const questions = [
    {
        question: "HTML ย่อมาจากอะไร?",
        choices: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlink and Text Management Language", "None of the above"],
        answer: 0
    },
    {
        question: "CSS ใช้ทำอะไร?",
        choices: ["จัดการโครงสร้าง", "ตกแต่งหน้าเว็บ", "เขียนเงื่อนไข", "จัดการข้อมูล"],
        answer: 1
    },
    {
        question: "JavaScript เป็นภาษาสำหรับ?",
        choices: ["สร้างเกม", "จัดการเซิร์ฟเวอร์", "พัฒนาเว็บแอป", "ทั้งหมดถูก"],
        answer: 3
    }
];

let currentQuestionIndex = 0;
let score = 0;

const welcomeScreen = document.getElementById("welcome-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");

const questionElement = document.getElementById("question");
const choicesContainer = document.getElementById("choices");
const scoreText = document.getElementById("score-text");

// ฟังก์ชันเปลี่ยนหน้า
function showScreen(screen) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    screen.classList.add("active");
}

// เริ่มทำแบบทดสอบ
startButton.addEventListener("click", () => {
    score = 0;
    currentQuestionIndex = 0;
    showScreen(quizScreen);
    showQuestion();
});

// แสดงคำถาม
function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    choicesContainer.innerHTML = "";

    currentQuestion.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.classList.add("choice-btn");
        button.textContent = choice;
        button.addEventListener("click", () => selectAnswer(index));
        choicesContainer.appendChild(button);
    });

    nextButton.style.display = "none";
}

// ตรวจสอบคำตอบ
function selectAnswer(index) {
    const correctIndex = questions[currentQuestionIndex].answer;
    const allButtons = document.querySelectorAll(".choice-btn");

    allButtons.forEach((button, i) => {
        if (i === correctIndex) {
            button.style.background = "green";  // ถูก
        } else {
            button.style.background = "red";  // ผิด
        }
        button.disabled = true;
    });

    if (index === correctIndex) {
        score++; // เพิ่มคะแนน
    }

    nextButton.style.display = "block";
}

// ปุ่มถัดไป
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
        nextButton.style.display = "none";
    } else {
        showScreen(resultScreen);
        scoreText.textContent = `คุณได้คะแนน ${score} / ${questions.length} 🎉`;
    }
});

// ปุ่มกลับไปหน้าแรก
restartButton.addEventListener("click", () => {
    showScreen(welcomeScreen);
});

showScreen(welcomeScreen); // เริ่มต้นที่หน้าแรก
