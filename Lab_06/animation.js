let canvas1 = document.getElementById('canvas_1');
let ctx1 = canvas1.getContext('2d');

let bola = {
    x: 150,
    y: 150,
    raio: 50,
    img: new Image(),
    desenha: function(){
        this.img.src = 
        'https://thumb.silhouette-ac.com/t/7b/7b264dfa6773527740f86b4de192dea3_w.jpeg';
        ctx1.beginPath();
        ctx1.drawImage(this.img, this.x - this.raio, this.y - this.raio, 2 * this.raio, 2 * this.raio);
        ctx1.closePath();
    }
}
function animacao(){
    ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
    bola.desenha();
    requestAnimationFrame(animacao)
}
animacao();
document.addEventListener('mousemove',function(evento){
    let rect = canvas1.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;
    // Garante que o centro da bola (não as bordas) segue o ponteiro
    x_mouse = Math.max(bola.raio, Math.min(x_mouse, canvas1.width - bola.raio));
    y_mouse = Math.max(bola.raio, Math.min(y_mouse, canvas1.width - bola.raio));

    //console.log(x_mouse,y_mouse);
    bola.x = x_mouse;
    bola.y = y_mouse;
});
bola.img.onload = animacao
