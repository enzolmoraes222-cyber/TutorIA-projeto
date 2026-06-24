//
// =========================
// 🔥 QUIZ GLOBAL (HOME / SIMULADOS)
// =========================
//

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

explanation: "Em 1 hora ocorrem 3 duplicações: 100 → 200 → 400 → 800."
};

const questionEl = document.getElementById("question");
const buttons = document.querySelectorAll(".option");
const feedback = document.getElementById("feedback");

if (questionEl) {
questionEl.innerText = questionData.question;

buttons.forEach((btn, index) => {
const letter = ["A","B","C","D","E"][index];
btn.innerText = `${letter}) ${questionData.options[letter]}`;
});
}

function checkAnswer(option) {

if (!feedback) return;

buttons.forEach(btn => btn.disabled = true);

buttons.forEach(btn => {
const letter = btn.innerText.charAt(0);

if (letter === questionData.correct) {
btn.classList.add("correct");
}

if (letter === option && option !== questionData.correct) {
btn.classList.add("wrong");
}
});

if (option === questionData.correct) {
feedback.innerHTML = "✔ Correto!<br><br>" + questionData.explanation;
feedback.style.color = "#22c55e";
} else {
feedback.innerHTML =
"❌ Errado.<br><br>Resposta correta: " +
questionData.correct +
"<br><br>" +
questionData.explanation;

feedback.style.color = "#ef4444";
}
}

//
// =========================
// 📚 EXPOSIÇÃO DE FUNÇÕES DE APRENDIZADO
// =========================
//

// FUTURO: revisão inteligente (base para evolução)
let erros = [];

function registrarErro(tema) {
erros.push(tema);
localStorage.setItem("erros", JSON.stringify(erros));
}

function obterErros() {
return JSON.parse(localStorage.getItem("erros")) || [];
}

//
// =========================
// 🔁 MINI REVISÃO (EXPPLICAÇÕES)
// =========================
//

function review(texto) {
const el = document.getElementById("review");
if (!el) return;

el.innerHTML = "🔁 Revisão: " + texto;
}

//
// =========================
// 📊 BASE PARA FUTURO (IA / PERSONALIZAÇÃO)
// =========================
//

// aqui depois você conecta IA real
function perguntarIA(pergunta) {
console.log("IA futura:", pergunta);
}