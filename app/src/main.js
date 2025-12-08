import "./style.css";
import { questions } from "./questions.js";

const sortedQuestions = document.getElementById("sortedQuestions");
const difficultySelect = document.getElementById("selectdifficulty");
const topicSelect = document.getElementById("selecttopic");
const topics = ["CircuitLab", "Forensics", "DynamicPlanet", "MaterialScience"];
const difficulties = ["Easy", "Medium", "Hard"];
let currentDisplayedQuestions = [...questions];
let showAnswersMode = false;
let userAnswers = {}; //{questionId: selectedAnswer}

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
  let userAnswer = userAnswers[item.id]; //Get stored user answer

  item.options.forEach((option, index) => {
    const optionId = `${item.id}-option${index}`;
    const isCorrect = option === item.correctAnswer;
    const isUserAnswer = option === userAnswer;
    let optionClass = "option-label";

    if (showAnswersMode) {
      if (isCorrect) {
        optionClass += " correct-answer";
      } else if (isUserAnswer && !isCorrect) {
        optionClass += " wrong-answer";
      }
    }

    optionsHtml += `
      <div class="option-item"> 
        <input 
          type="radio" 
          id="${optionId}" 
          name="question-${item.id}" 
          value="${option}"
          class="option-radio"
          ${isUserAnswer ? "checked" : ""}  //Always show user's selection
          ${showAnswersMode ? "disabled" : ""} //cant click no more hahahah
        >
        <label for="${optionId}" class="${optionClass}">${option}</label>
      </div>
    `;
  });

  sortedQuestions.insertAdjacentHTML(
    "beforeend",
    `<div class="questioncard" data-id="${item.id}">
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

  // Add event listeners to store user answers when they select options
  if (!showAnswersMode) {
    addAnswerListeners();
  }
}

function addAnswerListeners() {
  const radioInputs = document.querySelectorAll(".option-radio");
  radioInputs.forEach((input) => {
    input.addEventListener("change", (e) => {
      const questionId = e.target.name.split("-")[1];
      userAnswers[questionId] = e.target.value; //store selected ans so we can check if correct later and gie color
    });
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
  currentDisplayedQuestions = [];

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
      currentDisplayedQuestions.push(question);
    }

    if (showThisQuestion) {
    }
  });
  displayQuestions(currentDisplayedQuestions);
}

function randomizeQuestions() {
  questions.sort(() => Math.random() - 0.5);
}

function checkIfAllAnswered() {
  let allAnswered = true;
  const unansweredQuestions = [];

  currentDisplayedQuestions.forEach((question, index) => {
    if (!userAnswers[question.id]) {
      allAnswered = false;
      unansweredQuestions.push(index + 1);
    }
  });

  if (!allAnswered) {
    alert(`Missing questions: ${unansweredQuestions.join(", ")}`);
  } else {
    scoreHandler();
  }
}

function scoreHandler() {
  let totalscore = currentDisplayedQuestions.length;
  let userscore = 0;

  currentDisplayedQuestions.forEach((question) => {
    if (userAnswers[question.id] === question.correctAnswer) {
      userscore += 1;
    }
  });

  displayScore(userscore, totalscore);
  showAnswersMode = true;
  displayQuestions(currentDisplayedQuestions);
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
showAnswersMode = false;
userAnswers = {};
displayQuestions(currentDisplayedQuestions);
difficultySelect.addEventListener(
  "change",
  filterQuestions,
  randomizeQuestions
);
topicSelect.addEventListener("change", filterQuestions, randomizeQuestions);
submitButtonHandler();
document.getElementById("closeScore").addEventListener("click", () => {
  document.getElementById("displayScore").style.display = "none";
});
