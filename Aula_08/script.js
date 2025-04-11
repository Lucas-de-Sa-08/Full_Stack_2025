let carro1 = {
    cor: 'red',
    modelo: 'SUV',
    marca: 'Ferrari',
    buzina: function(){
        return 'bii bii';
    }
};

let carro2 = {
    cor: 'blue',
    modelo: 'SUV',
    marca: 'Ford',
    buzina: function(){
        return 'fom fom';
    }
};
///////////////////////////////////////////////////
// class Carro {
//     constructor(cor, modelo, marca){
//         this.cor = cor;
//         this.modelo = modelo;
//         this.marca = marca;
//     }
//     buzina{
//         return 'bii bii'
//     }
// }
// let carro1 = new Carro('green', 'SUV', 'Toyota')
// let carro2 = new Carro('black', 'SUV', 'Ford')

// console.log(carro1);
// console.log(carro2);
////////////////////////////////////////////////////

console.log(carro1);
console.log(carro1.cor);

console.log(carro1.buzina())
console.log(carro2.buzina())

let carros = []
carros.push(carro1)
carros.push(carro2)
for(let i = 0; i < carros.length; i++){
    console.log(carros[i].buzina())
}
////////////////////////////////////////////////////////////////////////////////////

class Retangulo{
    constructor(cor_linha, cor_preenchimento, grossura_linha, x, y, largura, altura){
        this.cor_linha = cor_linha;
        this.cor_preenchimento = cor_preenchimento;
        this.grossura_linha = grossura_linha;
        this.x = x;
        this.y = y;
        this.largura = largura;
        this.altura = altura;
    }
    desenhe(contexto){
        contexto.beginPath();
        contexto.lineWidth = this.grossura_linha;
        contexto.fillStyle = this.cor_preenchimento;
        contexto.strokeStyle = this.cor_linha;
        contexto.fillRect(this.x, this.y, this.largura, this.altura);
        contexto.strokeRect(this.x, this.y, this.largura, this.altura);
        contexto.closePath();
    }
}

let canvas1 = document.getElementById('canvas_1');
let ctx1 = canvas1.getContext('2d');

let retangulo_1 = new Retangulo('red', 'green', 5, 0, 10, 75, 75);
let retangulo_2 = new Retangulo('red', 'blue', 5, 215, 215, 75, 75);
let retangulo_3 = new Retangulo('red', 'yellow', 5, 125, 125, 75, 75);

function animacao(){
    if(retangulo_1.x == 500){
        retangulo_1.x = 0;
    }
    retangulo_1.x += 1;

    ctx1.clearRect(0,0,500,500)
    retangulo_1.desenhe(ctx1)
    retangulo_2.desenhe(ctx1)
    retangulo_3.desenhe(ctx1)

    requestAnimationFrame(animacao);
}
animacao()
document.addEventListener('keydown', function(evento){
    let tecla = evento.key;
    console.log(tecla);
    
    let velocidade = 10;
    if(tecla == 'ArrowUp'){ retangulo_2.y -= velocidade}
    if(tecla == 'ArrowDown'){ retangulo_2.y += velocidade}
    if(tecla == 'ArrowLeft'){ retangulo_2.x -= velocidade}
    if(tecla == 'ArrowRight'){ retangulo_2.x += velocidade}
})

document.addEventListener('mousemove', function(evento){
    let rect = canvas1.getBoundingClientRect()
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;
    console.log(x_mouse, y_mouse)

    retangulo_3.x = x_mouse;
    retangulo_3.y = y_mouse;
})