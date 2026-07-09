let acertos = 0;
let questaoAtual = 0;


const questoes = [

{
pergunta:"1) Um anúncio apresenta a frase: 'Menos plástico hoje, mais vida amanhã.' A estratégia usada é:",
alternativas:[
"Apresentar dados científicos detalhados.",
"Usar uma relação de causa e consequência para convencer.",
"Criticar empresas produtoras de plástico.",
"Narrar uma história fictícia.",
"Explicar a fabricação do plástico."
],
correta:1,
explicacao:"A frase relaciona uma ação no presente com uma consequência positiva no futuro."
},


{
pergunta:"2) Um produto custa R$250,00 e recebe 20% de desconto. Depois é adicionada uma taxa de entrega de R$15,00. O valor final é:",
alternativas:[
"R$200,00",
"R$215,00",
"R$225,00",
"R$235,00",
"R$250,00"
],
correta:1,
explicacao:"20% de 250 é 50. O produto fica R$200 + R$15 da entrega = R$215."
},


{
pergunta:"3) Uma consequência da Revolução Industrial foi:",
alternativas:[
"Redução das cidades.",
"Fim do trabalho assalariado.",
"Crescimento urbano e formação do proletariado industrial.",
"Diminuição da produção.",
"Fim das desigualdades."
],
correta:2,
explicacao:"A industrialização provocou crescimento das cidades e criação de uma classe trabalhadora industrial."
},


{
pergunta:"4) O desmatamento pode provocar:",
alternativas:[
"Aumento da biodiversidade.",
"Redução da erosão.",
"Alteração do ciclo da água e perda de habitats.",
"Aumento permanente da fertilidade.",
"Resfriamento global."
],
correta:2,
explicacao:"A retirada da vegetação prejudica ecossistemas e altera ciclos naturais."
},


{
pergunta:"5) Uma empresa possui a função L(x)=50x-500. Qual o lucro ao vender 20 produtos?",
alternativas:[
"R$200",
"R$300",
"R$500",
"R$700",
"R$1000"
],
correta:2,
explicacao:"L(20)=50×20-500 = 500."
},


{
pergunta:"6) A globalização é caracterizada por:",
alternativas:[
"Isolamento entre países.",
"Redução das tecnologias.",
"Maior integração econômica e cultural.",
"Fim das multinacionais.",
"Fim das diferenças regionais."
],
correta:2,
explicacao:"A globalização aumenta a conexão entre sociedades."
},


{
pergunta:"7) Um carro percorre 240 km em 3 horas. Sua velocidade média é:",
alternativas:[
"60 km/h",
"70 km/h",
"80 km/h",
"90 km/h",
"100 km/h"
],
correta:2,
explicacao:"Velocidade média = distância ÷ tempo. 240 ÷ 3 = 80 km/h."
},


{
pergunta:"8) O Modernismo brasileiro buscava:",
alternativas:[
"Copiar modelos antigos.",
"Valorizar uma linguagem brasileira e inovadora.",
"Eliminar temas nacionais.",
"Voltar ao estilo medieval.",
"Acabar com a criatividade."
],
correta:1,
explicacao:"O Modernismo valorizou a inovação e a identidade brasileira."
},


{
pergunta:"9) A água (H₂O) é uma substância:",
alternativas:[
"Formada por um único elemento.",
"Formada por dois elementos químicos diferentes.",
"Sem ligações químicas.",
"Sempre sólida.",
"Incapaz de dissolver substâncias."
],
correta:1,
explicacao:"A água é formada por hidrogênio e oxigênio."
},


{
pergunta:"10) As notas 6, 8, 7, 9 e 10 possuem média:",
alternativas:[
"7",
"7,5",
"8",
"8,5",
"9"
],
correta:2,
explicacao:"A soma das notas é 40. 40 dividido por 5 resulta em 8."
}

];




function mostrar(id){


document.querySelectorAll(".pagina")
.forEach(function(p){

p.classList.add("escondido");

});


document.getElementById(id)
.classList.remove("escondido");



if(id==="questoes"){

carregarQuestao();

}


}




function carregarQuestao(){


let q = questoes[questaoAtual];


document.getElementById("pergunta")
.innerHTML=q.pergunta;



let alternativas =
document.getElementById("alternativas");


alternativas.innerHTML="";



q.alternativas.forEach(function(texto,index){


let botao=document.createElement("button");


botao.innerHTML=texto;



botao.onclick=function(){

responder(index);

};



alternativas.appendChild(botao);



});



document.getElementById("resultado").innerHTML="";

document.getElementById("explicacao").innerHTML="";


document.getElementById("proxima").style.display="none";


}






function responder(resposta){


let q=questoes[questaoAtual];


let resultado=document.getElementById("resultado");



if(resposta===q.correta){


resultado.innerHTML="✅ Acertou!";

resultado.style.color="green";


acertos++;


document.getElementById("progresso")
.innerHTML="Acertos: "+acertos;


}

else{


resultado.innerHTML="❌ Errou!";

resultado.style.color="red";


}



document.getElementById("explicacao")
.innerHTML="Explicação: "+q.explicacao;



document.querySelectorAll("#alternativas button")
.forEach(function(botao){

botao.disabled=true;

});



document.getElementById("proxima")
.style.display="block";


}






function proximaQuestao(){


questaoAtual++;


if(questaoAtual < questoes.length){


carregarQuestao();


}

else{


document.getElementById("questaoBox").innerHTML=

"<h2>🎉 Simulado finalizado!</h2>"+
"<p>Você acertou "+acertos+" de "+questoes.length+" questões.</p>";


}


}