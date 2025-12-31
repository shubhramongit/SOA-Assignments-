// const questions = [
//   {
//     question: "Which language is used for web development?",
//     options: ["Java", "Python", "JavaScript", "C++"],
//     answer: "JavaScript"
//   },
//   {
//     question: "Which tag is used for JavaScript?",
//     options: ["<js>", "<javascript>", "<script>", "<code>"],
//     answer: "<script>"
//   }
// ];

// let index = 0;
// let score = 0;

// const questionEl = document.getElementById("question");
// const optionsContainer = document.getElementById("options-container");
// const options = document.querySelectorAll(".option");
// const scoreEl = document.getElementById("score");
// const nextBtn = document.getElementById("nextBtn");
// const startBtn = document.getElementById("startBtn");

// function startQuiz() {
//   index = 0;
//   score = 0;
//   scoreEl.innerText = "Score: 0";
//   startBtn.style.display = "none";
//   optionsContainer.style.display = "block";
  
//   loadQuestion();
// }

// function loadQuestion() {
//   nextBtn.style.display = "none";
  
//   questionEl.innerText = questions[index].question;
  
//   options.forEach((btn, i) => {
//     btn.innerText = questions[index].options[i];
//     btn.disabled = false;
//     btn.className = "option";
//   });
// }

// function checkAnswer(btn) {
//   const selectedAnswer = btn.innerText;
//   const correctAnswer = questions[index].answer;

//   if (selectedAnswer === correctAnswer) {
//     btn.classList.add("correct");
//     score++;
//     scoreEl.innerText = "Score: " + score;
//   } else {
//     btn.classList.add("wrong");
//     // Optionally show the user which one was correct
//     options.forEach(option => {
//         if(option.innerText === correctAnswer) option.classList.add("correct");
//     });
//   }

//   // Disable all buttons so they can't change answer
//   options.forEach(b => b.disabled = true);
  
//   // Show the Next button
//   nextBtn.style.display = "inline-block";
// }

// function nextQuestion() {
//   index++;
  
//   if (index < questions.length) {
//     loadQuestion();
//   } else {
//     showResults();
//   }
// }

// function showResults() {
//   questionEl.innerText = `Quiz Completed! You scored ${score} out of ${questions.length}.`;
//   optionsContainer.style.display = "none";
//   nextBtn.style.display = "none";
  
//   // Allow the user to restart
//   startBtn.innerText = "Restart Quiz";
//   startBtn.style.display = "inline-block";
// }
const questions = [
  {
    question: "Which language is used for web development?",
    options: ["Java", "Python", "JavaScript", "C++"],
    answer: "JavaScript"
  },
  {
    question: "Which tag is used for JavaScript?",
    options: ["<js>", "<javascript>", "<script>", "<code>"],
    answer: "<script>"
  }
];

let index = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const options = document.querySelectorAll(".option");
const scoreEl = document.getElementById("score");
const nextBtn = document.getElementById("nextBtn");
const startBtn = document.getElementById("startBtn");

function startQuiz() {
  index = 0;
  score = 0;
  scoreEl.innerText = "Score: 0";
  startBtn.style.display = "none";
  optionsContainer.style.display = "block";
  loadQuestion();
}

function loadQuestion() {
  nextBtn.style.display = "none";
  questionEl.style.opacity = 0;

  setTimeout(() => {
    questionEl.innerText = questions[index].question;
    questionEl.style.opacity = 1;
  }, 200);

  options.forEach((btn, i) => {
    btn.innerText = questions[index].options[i];
    btn.disabled = false;
    btn.className = "option";
  });
}

function checkAnswer(btn) {
  const selectedAnswer = btn.innerText;
  const correctAnswer = questions[index].answer;

  if (selectedAnswer === correctAnswer) {
    btn.classList.add("correct");
    score++;
    scoreEl.innerText = "Score: " + score;
  } else {
    btn.classList.add("wrong");
    options.forEach(option => {
      if (option.innerText === correctAnswer) {
        option.classList.add("correct");
      }
    });
  }

  options.forEach(b => b.disabled = true);
  nextBtn.style.display = "inline-block";
}

function nextQuestion() {
  index++;
  if (index < questions.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  questionEl.innerText = `Quiz Completed! You scored ${score} out of ${questions.length}.`;
  optionsContainer.style.display = "none";
  nextBtn.style.display = "none";
  startBtn.innerText = "Restart Quiz";
  startBtn.style.display = "inline-block";
}
