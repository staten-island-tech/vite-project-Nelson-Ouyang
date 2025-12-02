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
  item.options.forEach((option) => {
    optionsHtml += `<button class="option-btn" data-id="${item.id}">${option}</button>`;
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

randomizeQuestions();
populateOptions();
displayAllCards();
difficultySelect.addEventListener("change", filterQuestions);
topicSelect.addEventListener("change", filterQuestions);
