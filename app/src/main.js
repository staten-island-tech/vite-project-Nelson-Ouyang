import "./style.css";
import { questions } from "./questions.js";

const sortedQuestions = document.getElementById("sortedQuestions");
const difficultySelect = document.getElementById("selectdifficulty");
const topicSelect = document.getElementById("selecttopic");
const topics = ["CircuitLab", "Forensics", "DynamicPlanet", "MaterialScience"];
const difficulties = ["Easy", "Medium", "Hard"];

//variable to track currently displayed questions
let currentDisplayedQuestions = [...questions];
let showAnswersMode = false; // Global state to track if we should show answers

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

function injectQuestion(item, questionNumber) {
  let optionsHtml = "";
  item.options.forEach((option, index) => {
    const optionId = `${item.id}-option${index}`;
    const isCorrect = option === item.correctAnswer;
    let optionClass = "option-label";

    if (showAnswersMode && isCorrect) {
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
          ${showAnswersMode && isCorrect ? "checked" : ""}
          ${showAnswersMode ? "disabled" : ""}
        >
        <label for="${optionId}" class="${optionClass}">${option}</label>
      </div>
    `;
  });

  sortedQuestions.insertAdjacentHTML(
    "beforeend",
    `<div class="questioncard">
    <h3>Question ${questionNumber}: ${item.question}</h3>
      <h4>Difficulty: ${item.difficulty}</h4>
      <h4>Topic: ${item.category}</h4>
      <div class="options">
        ${optionsHtml}
      </div>
      <p class="explanation" id="explanation-${item.id}" style="display: ${
      showAnswersMode ? "block" : "none"
    };">
        Explanation: ${item.explanation}
      </p>
    </div>`
  );
}

// Updated function to display specific questions
function displayQuestions(questionsToShow) {
  sortedQuestions.innerHTML = "";
  questionsToShow.forEach((question, index) => {
    const questionNumber = index + 1;
    injectQuestion(question, questionNumber);
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

// Updated to track currently displayed questions
function filterQuestions() {
  const selectedDifficulties = getSelectedValues(difficultySelect);
  const selectedTopics = getSelectedValues(topicSelect);

  sortedQuestions.innerHTML = "";
  currentDisplayedQuestions = []; // Reset current displayed questions

  if (selectedDifficulties.length === 0 && selectedTopics.length === 0) {
    currentDisplayedQuestions = [...questions];
    displayQuestions(currentDisplayedQuestions);
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
      currentDisplayedQuestions.push(question); // Track displayed question
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

// Updated to use currentDisplayedQuestions instead of all questions
function scoreHandler() {
  let totalscore = currentDisplayedQuestions.length; // Use filtered count
  let userscore = 0;

  currentDisplayedQuestions.forEach((question) => {
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

// Set initial mode to false (not showing answers)
showAnswersMode = false;
displayQuestions(currentDisplayedQuestions);

difficultySelect.addEventListener("change", filterQuestions);
topicSelect.addEventListener("change", filterQuestions);
submitButtonHandler();

// Updated to show answers only for current displayed questions
document.getElementById("closeScore").addEventListener("click", () => {
  document.getElementById("displayScore").style.display = "none";
  // Toggle to show answers mode
  showAnswersMode = true;
  displayQuestions(currentDisplayedQuestions);
});
