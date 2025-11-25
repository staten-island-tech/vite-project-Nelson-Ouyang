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

function optionsHTML(option, containerId) {
  const optionsContainer = document.getElementById(containerId);
  optionsContainer.insertAdjacentHTML(
    "beforeend",
    `<input type="radio" name="${containerId}" value="${option}">${option}<br>`
  );
}

function printAllQuestions() {
  const questionsContainer = document.getElementById("questionsContainer");
  questions.forEach((question) => {
    questionsContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="questioncard">
        <h3>Topic: ${question.question}</h3>
        <h4>Difficulty: ${question.difficulty}</h4>
        <h4>${question.category}</h4>
        <div id="options-${question.id}" class="options"></div>
      </div>`
    );
    question.options.forEach((option) => {
      optionsHTML(option, `options-${question.id}`);
    });
  });
  questionsContainer.insertAdjacentHTML(
    "beforeend",
    `<button type="submit" id="submitBtn">Submit</button>`
  );
}

function questionRandomizer() {
  return questions.sort(() => Math.random() - 0.5); //If you just used Math.random(), the range would be 0 → 1, always positive. That means .sort() would always push one element after the other, not randomize.
}

function setupSubmit() {
  const submitBtn = document.getElementById("submitBtn");

  submitBtn.addEventListener("click", () => {
    let allAnswered = true;
    let score = 0;

    questions.forEach((question) => {
      const options = document.getElementsByName(`options-${question.id}`);
      let answered = false;

      options.forEach((option) => {
        if (option.checked) {
          answered = true;
          if (option.value === question.answer) score++;
        }
      });

      if (!answered) allAnswered = false;
    });

    if (!allAnswered) {
      alert("Please answer all questions before submitting.");
    } else {
      alert(`Your score is ${score} out of ${questions.length}`);
    }
  });
}

questionRandomizer();
difficultyOptions();
topicOptions();
printAllQuestions();
setupSubmit();
