class Gun {
    x;
    y;
    w;
    h;
    constructor(x, y, w, h, color) {
        this._x = x;
        this._y = y;
        this._w = w;
        this._h = h;
        this._color = color;
        this._angle = 0;
        this._bullets = [];
        this._count = 0;
        this._reloadTime = 20;
        this.direct="";
        this.speed = 5;
    }

    render(context) {
        context.save();
        context.translate(this._x, this._y);
        context.rotate(-this._angle * Math.PI / 180);
        context.beginPath();
        context.rect(0, 0, this._w, this._h);
        context.fillStyle = this._color;
        context.fill();
        context.closePath();
        context.restore();
    }

    fire() {
        this._count++;
        if (this._count % this._reloadTime === 0) {
                let bullet = new Bullet(this._x + this._w/2, this._y -5 );
                this._bullets.push(bullet);
            }
    }

    drawBullet(context) {
        for (let i = 0; i < this._bullets.length; i++) {
            this._bullets[i].move();
            this._bullets[i].render(context);
        }
    }

    checkOut(){
        for (let i = 0; i < this._bullets.length; i++) {
            if (this._bullets[i]._x < 0) {
                this._bullets.splice(i,1)
            }
        }
    }

    move() {
        switch (this.direct) {
            case "right":
                this._x += this.speed;
                if (this._x > canvas.width) { this._x = canvas.width-this._w};
                break;
            case "left":
                this._x -= this.speed;
                if ( this._x < 0) { this._x = 0}
                break;

        }
    }
}