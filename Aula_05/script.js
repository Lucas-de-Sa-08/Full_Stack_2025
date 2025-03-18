//window.alert("Hello World!")
//console.log("Hello World!")

//let nome = prompt("Qual o seu nome?");
//console.log(nome);

//console.log("while");
//let i = 0;
//while(i < 10){
//    console.log(i)
//    i++;
//   i = i + 1;
//    i += 1;
//}

//console.log("")
//for(let i = 0; i < 10; i++){
//    console.log(i);
//}

console.log('Exercicio 01:')
for(let i = 1; i < 100; i += 2){
    console.log(i);
}

console.log('Exercicio 02:')
for(let i = 5; i < 500; i += 5){
    console.log(i);
}

console.log("Exercicio 03:")
let x = parseInt(prompt("Digite um numero inteiro: "));
if(x < 0){
    console.log("Numero invalido")
}


for(let i = x; i >= 0; i--){
    console.log(i);
}

console.log("Exercicio 04:")
let num = parseInt(prompt("Digite um numero inteiro: "));
if(num < 0){
    console.log("Numero invalido")
}

let mult = 1;
for(let i = num; i > 0; i--){
    mult *=i;
    console.log(i, mult);
}