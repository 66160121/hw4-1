const quizData = [
    { id: 1, text: "HTML ย่อมาจากอะไร?", choices: ["Hyper Transfer Markup Language", "Hyper Text Markup Language", "High Tech Modern Language", "None"], correct: "Hyper Text Markup Language" },
    { id: 2, text: "JavaScript ใช้ทำอะไร?", choices: ["จัดการสไตล์", "สร้างโครงสร้าง", "เพิ่มความโต้ตอบ", "None"], correct: "เพิ่มความโต้ตอบ" },
    { id: 3, text: "CSS ย่อมาจากอะไร?", choices: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style System", "None"], correct: "Cascading Style Sheets" },
    { id: 4, text: "localStorage ใช้ทำอะไร?", choices: ["เก็บข้อมูลถาวร", "เก็บชั่วคราว", "ใช้คำนวณตัวเลข", "None"], correct: "เก็บข้อมูลถาวร" },
    { id: 5, text: "Tailwind CSS คืออะไร?", choices: ["Framework CSS", "JavaScript Library", "Backend Framework", "None"], correct: "Framework CSS" }
];

document.getElementById("start-btn").addEventListener("click", startQuiz);

function startQuiz() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = "";

    let score = 0;
    let index = 0;
    let timer = 60; // กำหนดเวลา 60 วินาที
    const interval = setInterval(() => {
        timer--;
        document.getElementById("start-btn").innerText = `เวลาที่เหลือ: ${timer}s`;
        if (timer <= 0) {
            clearInterval(interval);
            showResults(score);
        }
    }, 1000);

    quizData.forEach(question => {
        const div = document.createElement("div");
        div.classList.add("mb-4");

        const questionText = document.createElement("p");
        questionText.innerText = `${index + 1}. ${question.text}`;
        questionText.classList.add("text-gray-800", "font-semibold", "mb-2");
        
        div.appendChild(questionText);

        question.choices.forEach(choice => {
            const button = document.createElement("button");
            button.innerText = choice;
            button.classList.add("block", "w-full", "py-2", "mt-2", "rounded", "border", "hover:bg-gray-200");
            button.onclick = () => {
                if (choice === question.correct) score++;
                button.style.backgroundColor = choice === question.correct ? "lightgreen" : "lightcoral";
                setTimeout(() => {
                    div.innerHTML = "";
                }, 500);
            };
            div.appendChild(button);
        });

        quizContainer.appendChild(div);
        index++;
    });
}

function showResults(score) {
    document.getElementById("quiz-container").innerHTML = "";
    const resultContainer = document.getElementById("result-container");
    resultContainer.innerHTML = `<h2 class="text-xl font-bold">คะแนนของคุณ: ${score}/${quizData.length}</h2>`;
    resultContainer.classList.remove("hidden");
}

