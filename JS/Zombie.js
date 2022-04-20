class Zombie {
    constructor(w,h) {
        this._x = Math.random() * canvas.width * 0.92 ;  // luon xuat hien o phia tren
        this._y = 0;
        this._width = w;
        this._height = h;
        this._spdE = 1;  //toc do di chuyen zombie
    }

    renderEnemy(context) {
        context.beginPath();
        context.rect(this._x, this._y, this._width, this._height);
        context.fillStyle = "white";
        context.fill();
        context.closePath();
        context.restore();
    }

    moveEnemy() {
        this._y += this._spdE;
    }


}