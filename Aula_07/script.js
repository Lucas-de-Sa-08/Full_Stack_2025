let canvas = document.getElementById('canvas1');
let ctx = canvas.getContext('2d');

// retângulos
ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = 'rgb(71, 129, 71)';
ctx.strokeStyle = 'black';
ctx.fillRect(5,5,70,70);
ctx.strokeRect(77,77,50,50);
ctx.closePath();

// linhas
ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = 'rgb(71, 129, 71)';
ctx.strokeStyle = 'black';
ctx.moveTo(200,150);
ctx.lineTo(130,150);
ctx.lineTo(60,250);
ctx.lineTo(200,250);
ctx.lineTo(200,148);
ctx.fill();
ctx.stroke();
ctx.closePath();

// arcos
ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = 'rgb(71, 129, 71)';
ctx.strokeStyle = 'black';
ctx.arc(290,100,50,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

// texto
ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = 'rgb(71, 129, 71)';
ctx.strokeStyle = 'black';
ctx.font = "90px comic sans ms"
ctx.textAlign = "center";
ctx.fillText("Olá",200,340);
ctx.strokeText("Olá",200,340)
ctx.closePath();

let canvas2 = document.getElementById('canvas2');
let ct2 = canvas2.getContext('2d');

// quadrado 1
ct2.beginPath();
ct2.fillStyle = 'red';
ct2.fillRect(1,1,40,40);
ct2.closePath();

// quadrado 2
ct2.beginPath();
ct2.fillStyle = 'blue';
ct2.fillRect(309,1,40,40);
ct2.closePath();

// quadrado 3
ct2.beginPath();
ct2.fillStyle = 'yellow';
ct2.fillRect(1,309,40,40);
ct2.closePath();

// quadrado 4
ct2.beginPath();
ct2.fillStyle = 'green';
ct2.fillRect(309,309,40,40);
ct2.closePath();

// Circulo 1
ct2.beginPath();
ct2.lineWidth = 2;
ct2.fillStyle = 'yellow';
ct2.strokeStyle = 'green';
ct2.arc(70,130,20,0*Math.PI,2*Math.PI);
ct2.fill();
ct2.stroke();
ct2.closePath();

// Circulo 2
ct2.beginPath();
ct2.lineWidth = 2;
ct2.fillStyle = 'yellow';
ct2.strokeStyle = 'green';
ct2.arc(280,130,20,0*Math.PI,2*Math.PI);
ct2.fill();
ct2.stroke();
ct2.closePath();

// linha 1
ct2.beginPath();
ct2.lineWidth = 2;
ct2.strokeStyle = 'red';
ct2.moveTo(350,350);
ct2.lineTo(0,0);
ct2.fill();
ct2.stroke();
ct2.closePath();

// linha 2
ct2.beginPath();
ct2.lineWidth = 2;
ct2.strokeStyle = 'blue';
ct2.moveTo(350,0);
ct2.lineTo(0,350);
ct2.fill();
ct2.stroke();
ct2.closePath();

// linha 2
ct2.beginPath();
ct2.lineWidth = 2;
ct2.strokeStyle = 'green';
ct2.moveTo(0,175);
ct2.lineTo(350,175);
ct2.fill();
ct2.stroke();
ct2.closePath();

// texto
ct2.beginPath();
ct2.fillStyle = 'black';
ct2.font = "20px arial"
ct2.textAlign = "center";
ct2.fillText("Desenvolvimento web",175,75);
ct2.closePath();

// arcos
ct2.beginPath();
ct2.lineWidth = 2;
ct2.strokeStyle = 'green';
ct2.arc(175,175,50,0*Math.PI,1*Math.PI);
ct2.stroke();
ct2.closePath();