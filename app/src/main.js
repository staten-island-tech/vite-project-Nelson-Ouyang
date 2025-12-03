import "./style.css";
import { questions } from "./questions.js";

const sortedQuestions = document.getElementById("sortedQuestions");
const difficultySelect = document.getElementById("selectdifficulty");
const topicSelect = document.getElementById("selecttopic");

const topics = ["CircuitLab", "Forensics", "DynamicPlanet", "MaterialScience"];
const difficulties = ["Easy", "Medium", "Hard"];

function populateOptions() {
  difficulties.forEach((difficulty) => {
    difficultySelect.insertAdjacentHTML(
      "beforeend",
      `<option value="${difficulty}">${difficulty}</option>`
    );
  });

  topics.forEach((topic) => {
    topicSelect.insertAdjacentHTML(
      "beforeend",
      `<option value="${topic}">${topic}</option>`
    );
  });
}

function injectQuestion(item) {
  let optionsHtml = "";
  item.options.forEach((option, index) => {
    const optionId = `${item.id}-option${index}`;
    optionsHtml += `
      <div class="option-item">
        <input 
          type="radio" 
          id="${optionId}" 
          name="question-${item.id}" 
          value="${option}"
          class="option-radio"
        >
        <label for="${optionId}" class="option-label">${option}</label>
      </div>
    `;
  });

  sortedQuestions.insertAdjacentHTML(
    "beforeend",
    `<div class="questioncard">
      <h3>${item.question}</h3>
      <h4>Difficulty: ${item.difficulty}</h4>
      <h4>Topic: ${item.category}</h4>
      <div class="options">
        ${optionsHtml}
      </div>
      <p class="explanation" id="explanation-${item.id}" style="display: none;">
        ${item.explanation}
      </p>
    </div>`
  );
}

function displayAllCards() {
  sortedQuestions.innerHTML = "";
  questions.forEach((question) => {
    injectQuestion(question);
  });
}

function getSelectedValues(selectElement) {
  const selected = [];
  for (let i = 0; i < selectElement.options.length; i++) {
    if (selectElement.options[i].selected) {
      selected.push(selectElement.options[i].value); //literally push the value of the selected option into the array
    }
  }
  return selected;
}

function filterQuestions() {
  const selectedDifficulties = getSelectedValues(difficultySelect); //literally gets the selected values from the select element
  const selectedTopics = getSelectedValues(topicSelect);

  sortedQuestions.innerHTML = "";

  // If NOTHING selected, show ALL questions
  if (selectedDifficulties.length === 0 && selectedTopics.length === 0) {
    displayAllCards();
    return;
  }

  //Filter questions
  questions.forEach((question) => {
    let showThisQuestion = false; //cuz it dpeends on what the filters are duhh

    const matchesDifficulty =
      selectedDifficulties.length === 0 ||
      selectedDifficulties.includes(question.difficulty);
    //Check topic matches
    const matchesTopic =
      selectedTopics.length === 0 || selectedTopics.includes(question.category);
    //Show if matches BOTH conditions (OR if one filter is empty)
    if (matchesDifficulty && matchesTopic) {
      showThisQuestion = true;
    }

    if (showThisQuestion) {
      injectQuestion(question);
    }
  });
}

function randomizeQuestions() {
  questions.sort(() => Math.random() - 0.5);
}

function checkIfAllAnswered() {
  const questionCards = document.querySelectorAll(".questioncard");
  let allAnswered = true;

  questionCards.forEach((card) => {
    const options = card.querySelectorAll(".option-radio");
    let answered = false;

    options.forEach((option) => {
      if (option.checked) {
        answered = true;
      }
    });

    if (!answered) {
      allAnswered = false;
    }
  });

  if (!allAnswered) {
    alert("Please answer all questions before submitting.");
  } else {
    alert("go submit or check over");
  }
}

function scoreHandler() {
  let totalscore = questions.length;
  let userscore = 0;

  questions.forEach((question) => {
    const selected = document.querySelector(
      `input[name="question-${question.id}"]:checked` //selects the checked input for the specific question
    );
    if (selected && selected.value === question.correct) {
      userscore += 1;
    }
  });
  alert(`You scored ${userscore} out of ${totalscore}`);
}

function submitButtonHandler() {
  const submitBtn = document.getElementById("submitBtn");
  submitBtn.addEventListener("click", checkIfAllAnswered, scoreHandler);
}

randomizeQuestions();
populateOptions();
displayAllCards();
difficultySelect.addEventListener("change", filterQuestions);
topicSelect.addEventListener("change", filterQuestions);
submitButtonHandler();
