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

function injectQuestion(item, showAnswers = false) {
  let optionsHtml = "";
  item.options.forEach((option, index) => {
    const optionId = `${item.id}-option${index}`;
    const isCorrect = option === item.correctAnswer;
    let optionClass = "option-label";

    if (showAnswers && isCorrect) {
      optionClass += " correct-answer";
    }

    optionsHtml += `
      <div class="option-item">
        <input 
          type="radio" 
          id="${optionId}" 
          name="question-${item.id}" 
          value="${option}"
          class="option-radio"
          ${showAnswers && isCorrect ? "checked" : ""}
          ${showAnswers ? "disabled" : ""}
        >
        <label for="${optionId}" class="${optionClass}">${option}</label>
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
      <p class="explanation" id="explanation-${item.id}" style="display: ${
      showAnswers ? "block" : "none"
    };">
        ${item.explanation}
      </p>
    </div>`
  );
}

function displayAllCards(showAnswers = false) {
  sortedQuestions.innerHTML = "";
  questions.forEach((question) => {
    injectQuestion(question, showAnswers);
  });
}

function getSelectedValues(selectElement) {
  const selected = [];
  for (let i = 0; i < selectElement.options.length; i++) {
    if (selectElement.options[i].selected) {
      selected.push(selectElement.options[i].value);
    }
  }
  return selected;
}

function filterQuestions() {
  const selectedDifficulties = getSelectedValues(difficultySelect);
  const selectedTopics = getSelectedValues(topicSelect);

  sortedQuestions.innerHTML = "";

  if (selectedDifficulties.length === 0 && selectedTopics.length === 0) {
    displayAllCards();
    return;
  }

  questions.forEach((question) => {
    let showThisQuestion = false;

    const matchesDifficulty =
      selectedDifficulties.length === 0 ||
      selectedDifficulties.includes(question.difficulty);
    const matchesTopic =
      selectedTopics.length === 0 || selectedTopics.includes(question.category);

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
    scoreHandler();
  }
}

function scoreHandler() {
  let totalscore = questions.length;
  let userscore = 0;

  questions.forEach((question) => {
    const selected = document.querySelector(
      `input[name="question-${question.id}"]:checked`
    );
    if (selected && selected.value === question.correctAnswer) {
      userscore += 1;
    }
  });
  displayScore(userscore, totalscore);
}

function displayScore(userscore, totalscore) {
  const displayScoreDiv = document.getElementById("displayScore");
  const scoreText = document.getElementById("scoreText");

  scoreText.textContent = `Your Score: ${userscore} / ${totalscore}`;

  displayScoreDiv.style.display = "flex";
}

function submitButtonHandler() {
  const submitBtn = document.getElementById("submitBtn");
  submitBtn.addEventListener("click", checkIfAllAnswered);
}

randomizeQuestions();
populateOptions();
displayAllCards();
difficultySelect.addEventListener("change", filterQuestions);
topicSelect.addEventListener("change", filterQuestions);
submitButtonHandler();

document.getElementById("closeScore").addEventListener("click", () => {
  document.getElementById("displayScore").style.display = "none";
  displayAllCards(true); // Clear and redisplay with answers shown
});
