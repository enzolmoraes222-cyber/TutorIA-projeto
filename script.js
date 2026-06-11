// Rolagem suave

document.querySelectorAll('a[href^="#"]').forEach(link => {

link.addEventListener('click', function(e){

e.preventDefault();

const destino = document.querySelector(
this.getAttribute('href')
);

destino.scrollIntoView({
behavior:'smooth'
});

});

});

// Mensagem de demonstração

const botoes = document.querySelectorAll('button');

botoes.forEach(botao => {

botao.addEventListener('click', () => {

alert(
'Em breve você será direcionado para o cadastro da TutorIA 🚀'
);

});

});