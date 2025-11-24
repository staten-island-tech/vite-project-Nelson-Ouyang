import "./style.css";
import { questions } from "./questions.js";
const topics = ["CircuitLab", "Forensics", "DynamicPlanet"];
const difficulties = ["easy", "medium", "hard"];

function difficultyOptions() {
  const difficultiesOptions = document.getElementById("selectdifficulty");
  difficulties.forEach((difficulty) => {
    difficultiesOptions.insertAdjacentHTML(
      "afterbegin",
      `<option value="${difficulty}">${difficulty}</option>`
    );
  });
}

function topicOptions() {
  const topicOptions = document.getElementById("selecttopic");
  topics.forEach((topic) => {
    topicOptions.insertAdjacentHTML(
      "afterbegin",
      `<option value="${topic}">${topic}</option>`
    );
  });
}

function optionsHTML(option) {
  const optionsContainer = document.querySelector(".options");
  optionsContainer.insertAdjacentHTML(
    "beforeend",
    `<input type="radio" name="option" value="${option}">${option}<br>`
  );
}

function printAllQuestions() {
  const questionsContainer = document.getElementById("questionsContainer");
  questions.forEach((question) => {
    questionsContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="questioncard"></div>
        <h3>Topic: ${question.question}</h3>
        <h4>Difficulty: ${question.difficulty}</h4>
        <div id = ${question.id}}></div>
        <h4>${question.category}</h4>`
    );
    question.options.forEach((option) => {
      optionsHTML(option);
    });
  });
}

difficultyOptions();
topicOptions();
printAllQuestions();
