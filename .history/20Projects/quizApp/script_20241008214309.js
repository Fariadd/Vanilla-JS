// script.js

// Array of quiz questions and options
const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: 1, // The correct answer is "Paris" (index 2)
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: 1, // The correct answer is "Jupiter" (index 2)
  },
  {
    question: "What year did WW2 end?",
    options: ["1939", "1942", "1945", "1949"],
    answer: 1, // The correct answer is "1945" (index 2)
  },
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const options = document.querySelectorAll(".option");
const scoreEl = document.getElementById("score");
const nextBtn = document.getElementById("nextBtn");

// Load the current question
function loadQuestion() {
  const currentQuizData = quizData[currentQuestion];
  questionEl.textContent = currentQuizData.question;

  options.forEach((option, index) => {
    option.textContent = currentQuizData.options[index];
    option.onclick = () => checkAnswer(index); // Attach click event to each option
  });
}

// Check if the selected answer is correct
function checkAnswer(selectedIndex) {
  const correctIndex = quizData[currentQuestion].answer;

  if (selectedIndex === correctIndex) {
    score++; // Increase score if the answer is correct
    alert("Correct!");
  } else {
    alert("Wrong answer!");
  }

  nextBtn.classList.remove("hidden"); // Show "Next" button after selecting an answer
}

// Load the next question
function loadNextQuestion() {
  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
    nextBtn.classList.add("hidden"); // Hide "Next" button until next answer is selected
  } else {
    questionEl.textContent = "Quiz complete!";
    document.querySelector(".options-container").style.display = "none";
    nextBtn.style.display = "none";
    scoreEl.textContent = `Final Score: ${score}`;
  }
}

// Initial load
loadQuestion();

// Event listener for next button
nextBtn.addEventListener("click", loadNextQuestion);
