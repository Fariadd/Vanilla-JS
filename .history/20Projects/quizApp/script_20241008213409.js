const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: 2, // The correct answer is "Paris" (index 2)
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: 2, // The correct answer is "Jupiter" (index 2)
  },
  {
    question: "What year did WW2 end?",
    options: ["1939", "1942", "1945", "1949"],
    answer: 2, // The correct answer is "1945" (index 2)
  },
];
let currentQuestion = 0;
let score = 0;
const questionEl = document.getElementById("question");
const options = document.querySelectorAll(".option");
const scoreEl = document.getElementById("score");
const nextBtn = document.getElementById("nextBtn");

// load the current question
function loadQuestion() {
  const currentQuizData = quizData[currentQuestion];
  questionEl.textContent = currentQuizData.question;

  options.forEach((option, index) => {
    option.textContent = currentQuizData.options[index];
    option.onclick = () => checkAnswer(index);
  });
}
function checkAnswer(selectedIndex) {
  const correctIndex = quizData[currentQuestion].answer;
}
