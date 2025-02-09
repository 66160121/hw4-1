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

const questionElement = document.getElementById("question");
const choicesContainer = document.getElementById("choices");
const nextButton = document.getElementById("next-btn");

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    choicesContainer.innerHTML = ""; // เคลียร์ตัวเลือกก่อนหน้า

    currentQuestion.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.classList.add("choice-btn");
        button.textContent = choice;
        button.addEventListener("click", () => selectAnswer(index));
        choicesContainer.appendChild(button);
    });
}

function selectAnswer(index) {
    const correctIndex = questions[currentQuestionIndex].answer;
    const allButtons = document.querySelectorAll(".choice-btn");

    allButtons.forEach((button, i) => {
        if (i === correctIndex) {
            button.style.background = "green";  // ตอบถูกเป็นสีเขียว
        } else {
            button.style.background = "red";  // ตอบผิดเป็นสีแดง
        }
        button.disabled = true;
    });

    nextButton.style.display = "block"; // แสดงปุ่มถัดไป
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
        nextButton.style.display = "none"; // ซ่อนปุ่มถัดไป
    } else {
        questionElement.textContent = "จบแบบทดสอบ! 🎉";
        choicesContainer.innerHTML = "";
        nextButton.style.display = "none";
    }
});

showQuestion();
