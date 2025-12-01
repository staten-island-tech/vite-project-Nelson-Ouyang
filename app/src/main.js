import "./style.css";
import { questions } from "./questions.js";

const topics = ["all", "CircuitLab", "Forensics", "DynamicPlanet"];
const difficulties = ["all", "easy", "medium", "hard"];
const sortedQuestions = [];

function questionRandomizer() {
  questions.sort(() => Math.random() - 0.5);
}
questionRandomizer();

function renderQuestions(list) {
  const sortedQuestionsContainer = document.getElementById("sortedQuestions");
  sortedQuestionsContainer.innerHTML = "";

  list.forEach((question) => {
    sortedQuestionsContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="questioncard">
        <h3>${question.question}</h3>
        <h4>Difficulty: ${question.difficulty}</h4>
        <h4>Topic: ${question.category}</h4>
        <div id="options-${question.id}" class="options"></div>
      </div>`
    );
  });
}

function sort() {
  const difficultySelect = document.getElementById("selectdifficulty");
  const topicSelect = document.getElementById("selecttopic");

  function applyFilter() {
    const selectedDifficulty = difficultySelect.value;
    const selectedTopic = topicSelect.value;

    sortedQuestions.length = 0;

    if (selectedDifficulty === "all" && selectedTopic === "all") {
      sortedQuestions.push(...questions);
    } else {
      // Filter by difficulty and topic
      questions.forEach((q) => {
        const matchesDifficulty =
          selectedDifficulty === "all" || q.difficulty === selectedDifficulty;
        const matchesTopic =
          selectedTopic === "all" || q.category === selectedTopic;

        if (matchesDifficulty && matchesTopic) {
          sortedQuestions.push(q);
        }
      });
    }

    renderQuestions(sortedQuestions);
  }

  // Attach listeners
  difficultySelect.addEventListener("change", applyFilter);
  topicSelect.addEventListener("change", applyFilter);

  // Initial render
  applyFilter();
}

function difficultyOptions() {
  const difficultiesOptions = document.getElementById("selectdifficulty");
  difficulties.forEach((difficulty) => {
    difficultiesOptions.insertAdjacentHTML(
      "beforeend",
      `<option value="${difficulty}">${difficulty}</option>`
    );
  });
}

function topicOptions() {
  const topicOptions = document.getElementById("selecttopic");
  topics.forEach((topic) => {
    topicOptions.insertAdjacentHTML(
      "beforeend",
      `<option value="${topic}">${topic}</option>`
    );
  });
}

difficultyOptions();
topicOptions();
sort();
