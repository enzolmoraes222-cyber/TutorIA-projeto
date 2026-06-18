const questionData = {
question: "Em uma população de bactérias, o número dobra a cada 20 minutos. Se inicialmente há 100 bactérias, quantas haverá após 1 hora?",
options: {
A: "200",
B: "400",
C: "800",
D: "1200",
E: "1600"
},
correct: "C",
explanation: "A cada 20 minutos dobra: 100 → 200 → 400 → 800 em 1 hora."
};

document.getElementById("question").innerText = questionData.question;

function checkAnswer(option) {
const feedback = document.getElementById("feedback");

if (option === questionData.correct) {
feedback.innerHTML = "✔ Correto! " + questionData.explanation;
feedback.style.color = "#22c55e";
} else {
feedback.innerHTML = "❌ Errado. Resposta correta: " + questionData.correct;
feedback.style.color = "#ef4444";
}
}