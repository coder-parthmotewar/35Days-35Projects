const quizData = [
    {
        question: "Which language is used for web apps?",
        options: ["Python", "Java", "JavaScript", "C++"],
        answer: "JavaScript"
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Computer Style Sheets",
            "Cascading Style Sheets",
            "Creative Style System",
            "Colorful Style Sheets"
        ],
        answer: "Cascading Style Sheets"
    },
    {
        question: "Which HTML tag is used for JavaScript?",
        options: ["<js>", "<javascript>", "<script>", "<code>"],
        answer: "<script>"
    }
];

let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");

loadQuestion();

function loadQuestion() {
    const current = quizData[currentIndex];
    questionEl.innerText = current.question;
    optionsEl.innerHTML = "";

    current.options.forEach(option => {
        const div = document.createElement("div");
        div.classList.add("option");
        div.innerText = option;
        div.onclick = () => selectAnswer(option);
        optionsEl.appendChild(div);
    });
}

function selectAnswer(selected) {
    if (selected === quizData[currentIndex].answer) {
        score++;
    }
    nextBtn.disabled = false;
}

nextBtn.addEventListener("click", () => {
    currentIndex++;

    if (currentIndex < quizData.length) {
        loadQuestion();
        nextBtn.disabled = true;
    } else {
        showResult();
    }
});

function showResult() {
    questionEl.innerText = "Quiz Completed 🎉";
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";
    scoreEl.innerText = `Your Score: ${score} / ${quizData.length}`;
}
