const questions = [
    {
        question:   "What does CSS stands for?",
        a:  "Colorful Style Sheets",
        b:  "Cascading Style Sheets",
        c:  "Creative Style Sheets",
        d:  "Computer Style Sheets",
        ans:    "ans2"
    },
    {
        question:   "Which HTML tag is used to define an internal style sheet?",
        a:  "<script>",
        b:  "<css>",
        c:  "<style>",
        d:  "<html>",
        ans:    "ans3"
    },
    {
        question:   "Which HTML attribute is used to define inline styles?",
        a:  "style",
        b:  "class",
        c:  "font",
        d:  "styles",
        ans:    "ans1"
    },
    {
        question:   "How do you insert a comment in a CSS file?",
        a:  "/* This is a comment */",
        b:  "'This is a comment'",
        c:  "// This is a comment //",
        d:  "// This is a comment",
        ans:    "ans1"
    },
    {
        question:   "Which property is used to change background colour?",
        a:  "color",
        b:  "bgcolor",
        c:  "background-color",
        d:  "bcg-color",
        ans:    "ans3"
    }
]; 

const startButton = document.querySelector(".start-btn");
const startDiv = document.querySelector(".start");
const quiz = document.querySelector(".quiz");
const btnGroup = document.querySelector(".btnGroup");
const resetButton = document.querySelector(".reset");
const previousButton = document.querySelector(".previous");
const nextButton = document.querySelector(".next");
const resultDiv = document.querySelector(".result");
const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const retry = document.querySelector(".retry");
const scoreText = document.querySelector(".score");
const allOptions = document.querySelectorAll(".radio");

let currentQuestion = 0;
let score = 0;
let currentAnswer = "";

function startQuiz() {
    startDiv.classList.add("hide");
    quiz.classList.add("show");
    btnGroup.classList.add("show");
    loadQuestion();
}

startButton.addEventListener('click', startQuiz);

function loadQuestion () {
    const ques = questions[currentQuestion];
    question.textContent = ques.question;
    option1.textContent = ques.a;
    option2.textContent = ques.b;
    option3.textContent = ques.c;
    option4.textContent = ques.d;
    currentAnswer = ques.ans;
}

function previousQuestion() {
    if(currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

previousButton.addEventListener('click', previousQuestion);

function deselectAll() {
    allOptions.forEach((currentElement) => {
        if(currentElement.checked) {
            currentElement.checked = false;
        }
    })
}

function checkedAnswer() {
    let ans;
    allOptions.forEach((currentElement) => {
        if(currentElement.checked) {
            ans = currentElement.id;
        }
    });
    return ans;
}

function nextQuestion() {

    if(checkedAnswer() == currentAnswer) {
        score++;
    }

    deselectAll();

    if(currentQuestion < questions.length) {
        currentQuestion++;
    }

    if(currentQuestion === questions.length) {
        quiz.classList.remove("show");
        btnGroup.classList.remove("show");
        resultDiv.classList.add("show");
        scoreText.textContent = score;
    } else {
        loadQuestion();
    }
}

nextButton.addEventListener('click', nextQuestion);

function retryQuiz() {
    location.reload();
}

retry.addEventListener('click', retryQuiz);

resetButton.addEventListener('click', retryQuiz);




