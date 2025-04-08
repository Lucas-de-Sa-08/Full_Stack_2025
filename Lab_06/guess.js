//let r = Math.random() * 100;
//let i = Math.floor(r);
//window.alert(i)

let numSecreto = Math.floor(Math.random() * 100) + 1;
let tentativasGrandes = [];
let tentativasPequenas = [];
console.log(numSecreto);

function verificarNum(){
    let numDig = parseInt(document.getElementById('numero').value);
    let mensagem = document.getElementById('mensagem');
    let tentativasG = document.getElementById('tentativasGrandes');
    let tentativasP = document.getElementById('tentativasPequenas');

    if (numDig < 1 || numDig >100){
        mensagem.textContent = "Por favor, digite um número válido!";
        mensagem.style.color = "red";
        return;
    }

    if (numDig < numSecreto){
        mensagem.textContent = "Número muito pequeno!";
        mensagem.style.color = "white"
        mensagem.style.backgroundColor = "red"
        tentativasPequenas.push(numDig);
    }
    else if (numDig > numSecreto){
        mensagem.textContent = "Número muito grande!";
        mensagem.style.color - "white"
        mensagem.style.backgroundColor = "red"
        tentativasGrandes.push(numDig);
    }
    else {
        mensagem.textContent = "Parabéns, você encontrou o número secreto!";
        mensagem.style.color = "white"
        mensagem.style.backgroundColor = "green"
    }
    tentativasP.textContent = tentativasPequenas.join(', ');
    tentativasG.textContent = tentativasGrandes.join(', ');
}