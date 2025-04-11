let canvas1 = document.getElementById('canvas_1');
let ctx1 = canvas1.getContext('2d');
///////////////////////////////////////////////////////////////////////

// texto
ctx1.beginPath();
ctx1.fillStyle = 'black';
ctx1.font = "35px arial"
ctx1.textAlign = "center";
ctx1.fillText("Canvas",250,80);
ctx1.closePath();

// Função para desenhar um circulo com borda
function desenharCirculo(x, y, raio, corPreenchimento, corBorda, larguraBorda){
    ctx1.beginPath();
    ctx1.arc(x, y, raio, 0, Math.PI * 2);

    // Cor de preenchimento
    ctx1.fillStyle = corPreenchimento;
    ctx1.fill();

    // Configurar a borda
    ctx1.lineWidth = larguraBorda;
    ctx1.strokeStyle = corBorda;
    ctx1.stroke();

    ctx1.closePath();
}
desenharCirculo(250, 190, 25, "aqua", "blue", "2");

desenharCirculo(125, 360, 25, "yellow", "green", "2");
desenharCirculo(375, 360, 25, "yellow", "green", "2");
///////////////////////////////////////////////////////////////////////

// Função para desenhar um quadrado com borda
function desenharQuadrado(x, y, tamanho, corPreenchimento,){
    // Preenchimento do quadrado
    ctx1.fillStyle = corPreenchimento;
    ctx1.fillRect(x, y, tamanho, tamanho);
}
desenharQuadrado(0, 0, 80, "blue")

desenharQuadrado(420, 0, 80, "red")

desenharQuadrado(450, 400, 50, "black")
desenharQuadrado(400, 450, 50, "black")
desenharQuadrado(450, 450, 50, "black")

desenharQuadrado(0, 400, 50, "yellow")
desenharQuadrado(0, 450, 50, "yellow")
desenharQuadrado(50, 450, 50, "yellow")

desenharQuadrado(450, 225, 50, "aqua")

desenharQuadrado(180, 250, 70, "red")
///////////////////////////////////////////////////////////////////////

// Função para desenhar um retângulo com borda
function desenharRetangulo(x, y, largura, altura, corPreenchimento, corBorda, larguraBorda){
    // Preenchimento do retângulo
    ctx1.fillStyle = corPreenchimento;
    ctx1.fillRect(x, y, largura, altura);

    // Configuração da borda
    //ctx1.lineWidth = larguraBorda;
    //ctx1.strokeStyle = corBorda;
    //ctx1.strokeRect(x, y, largura, altura);
}
desenharRetangulo(0, 200, 50, 100, "aqua")
///////////////////////////////////////////////////////////////////////

// Função para desenhar uma linha
function desenharLinha(xInicial, yInicial, xFinal, yFinal, cor, largura){
    ctx1.beginPath();
    ctx1.moveTo(xInicial, yInicial); // Ponto inicial
    ctx1.lineTo(xFinal, yFinal); // Ponto final
    ctx1.strokeStyle = cor; // Define a cor da linha
    ctx1.lineWidth = largura; // Define a espessura da linha
    ctx1.stroke(); // Desenha a linha
    ctx1.closePath();
}
desenharLinha(0, 250, 500, 250, "green", 3);
desenharLinha(0, 0, 250, 250, "blue", 3);
desenharLinha(500, 0, 250, 250, "red", 3);
desenharLinha(250, 250, 250, 430, "gray", 3)
///////////////////////////////////////////////////////////////////////

// Função para desenhar um arco
function desenharArco(x, y, raio, anguloInicialGraus, anguloFinalGraus, corBorda, larguraBorda, sentidoAntiHorario = false){
    const anguloInicial = anguloInicialGraus * Math.PI / 180; // graus → radianos
    const anguloFinal = anguloFinalGraus * Math.PI / 180;

    ctx1.beginPath();
    ctx1.arc(x, y, raio, anguloInicial, anguloFinal, sentidoAntiHorario);
    ctx1.lineWidth = larguraBorda;
    ctx1.strokeStyle = corBorda;
    ctx1.stroke();
    ctx1.closePath();
}
desenharArco(250, 250, 100, 180, 0, "green", 3,)
desenharArco(215, 250, 105, 180, -121, "green", 3,)
desenharArco(290, 250, 100, -61, 0, "green", 3,)

desenharArco(250, 500, 135, 180, -90, "green", 3)
desenharArco(250, 500, 100, -90, 180, "green", 3)

function desenharCirculoPorFração(x, y, raio, fracao, corPreenchimento, corBorda, larguraBorda, sentidoAntiHorario = false) {
    const anguloTotal = 2 * Math.PI; // 360 graus em radianos
    const anguloFinal = fracao * anguloTotal;

    ctx1.beginPath();
    ctx1.moveTo(x, y); // vai para o centro
    ctx1.arc(x, y, raio, 0, anguloFinal, sentidoAntiHorario);
    ctx1.closePath();

    // Preenchimento
    ctx1.fillStyle = corPreenchimento;
    ctx1.fill();

    // Borda
    ctx1.lineWidth = larguraBorda;
    ctx1.strokeStyle = corBorda;
    ctx1.stroke();
}
desenharCirculoPorFração(250, 500, 70, 1 / 2, "aqua", "green", 3, true)
///////////////////////////////////////////////////////////////////////

let  canvas2 = document.getElementById('canvas_2');
let ctx2 = canvas2.getContext('2d');

function desenharTriangulo2(x1, y1, x2, y2, x3, y3, cor, larguraBorda, corBorda){
    ctx2.beginPath(); // Inicia o caminho do desenho
    ctx2.moveTo(x1, y1); // Move para o primeiro ponto
    ctx2.lineTo(x2, y2); // Linha até o segundo ponto
    ctx2.lineTo(x3, y3); // Linha até o terceiro ponto
    ctx2.closePath(); // Fecha o triângulo ligando ao ponto inicial
    ctx2.fillStyle = cor; // Define a cor de preenchimento
    ctx2.fill(); // Preenche o triângulo
    // Borda
    //ctx2.lineWidth = larguraBorda;
    //ctx2.strokeStyle = corBorda;
    //ctx2.stroke();
}

desenharTriangulo2(250, 185, 185, 250, 315, 250, "coral")
///////////////////////////////////////////////////////////////////////

function desenharRetangulo2(x, y, largura, altura, corPreenchimento, corBorda, larguraBorda){
    // Preenchimento do retângulo
    ctx2.fillStyle = corPreenchimento;
    ctx2.fillRect(x, y, largura, altura);

    // Configuração da borda
    //ctx1.lineWidth = larguraBorda;
    //ctx1.strokeStyle = corBorda;
    //ctx1.strokeRect(x, y, largura, altura);
}
// Casa
desenharRetangulo2(185, 250, 130, 130, "rgb(135, 65, 65)")
desenharRetangulo2(235, 315, 30, 65, "rgb(70, 32, 32)")
desenharRetangulo2(195, 280, 40, 35, "rgb(93, 172, 245)")
desenharRetangulo2(265, 280, 40, 35, "rgb(93, 172, 245)")
// Chão e água
desenharRetangulo2(0, 380, 500, 120, "rgb(103, 103, 103)")
desenharRetangulo2(0, 380, 60, 120, "rgb(0, 132, 255)")
desenharRetangulo2(60, 440, 120, 60, "rgb(0, 132, 255)")
// Árvores
desenharRetangulo2(60, 315, 30, 65, "saddlebrown")
desenharRetangulo2(430, 400, 30, 65, "saddlebrown")
///////////////////////////////////////////////////////////////////////

function desenharCirculoPorFração2(x, y, raio, fracao, corPreenchimento, sentidoAntiHorario = false) {
    const anguloTotal = 2 * Math.PI; // 360 graus em radianos
    const anguloFinal = fracao * anguloTotal;

    ctx2.beginPath();
    ctx2.moveTo(x, y); // vai para o centro
    ctx2.arc(x, y, raio, 0, anguloFinal, sentidoAntiHorario);
    ctx2.closePath();

    // Preenchimento
    ctx2.fillStyle = corPreenchimento;
    ctx2.fill();

    // Borda
    //ctx2.lineWidth = larguraBorda;
    //ctx2.strokeStyle = corBorda;
    //ctx2.stroke();
}
// Água
desenharCirculoPorFração2(180, 500, 60, 3 / 4, "rgb(0, 132, 255)", true)
desenharCirculoPorFração2(0, 380, 60, 3 / 4, "rgb(0, 132, 255)", true)
// Sol
desenharCirculoPorFração2(380, 125, 65, 1/1, "yellow")
// Arvore
desenharCirculoPorFração2(445, 370, 40, 1/1, "darkgreen")
desenharCirculoPorFração2(75, 290, 40, 1/1, "darkgreen")