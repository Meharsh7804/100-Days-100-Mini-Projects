const questions = [
  {
    question: "What is the correct way to declare a JavaScript variable?",
    answers: [
      { text: "var myVariable;", correct: true },
      { text: "variable myVariable;", correct: false },
      { text: "v myVariable;", correct: false },
      { text: "declare myVariable;", correct: false },
    ],
  },
  {
    question: "Which company developed JavaScript?",
    answers: [
      { text: "Netscape", correct: true },
      { text: "Microsoft", correct: false },
      { text: "Google", correct: false },
      { text: "Apple", correct: false },
    ],
  },
  {
    question: "Which of the following is a JavaScript framework?",
    answers: [
      { text: "React", correct: true },
      { text: "Laravel", correct: false },
      { text: "Django", correct: false },
      { text: "Ruby on Rails", correct: false },
    ],
  },
  {
    question: "How do you write an 'if' statement in JavaScript?",
    answers: [
      { text: "if (x == 5)", correct: true },
      { text: "if x = 5 then", correct: false },
      { text: "if x == 5", correct: false },
      { text: "if (x = 5)", correct: false },
    ],
  },
  {
    question: "What is the output of 'typeof NaN' in JavaScript?",
    answers: [
      { text: "number", correct: true },
      { text: "NaN", correct: false },
      { text: "undefined", correct: false },
      { text: "object", correct: false },
    ],
  },
];

const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");
const resultContainer = document.getElementById("result-container");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart-button");

let shuffledQuestions, currentQuestionIndex;
let score = 0;

startQuiz();

function startQuiz() {
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  score = 0;
  resultContainer.classList.add("hide");
  questionContainer.classList.remove("hide");
  nextButton.classList.add("hide");
  restartButton.classList.add("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  if (correct) {
    score++;
  }
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    showResult();
  }
}

function showResult() {
  questionContainer.classList.add("hide");
  resultContainer.classList.remove("hide");
  scoreElement.innerText = score;
  restartButton.classList.remove("hide");
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

restartButton.addEventListener("click", startQuiz);