class Bullet{
    x;
    y;
    constructor(x,y) {
        this._x = x;
        this._y = y;
        this.rad = 5;
        this._width  = this.rad;
        this._height = this.rad;
        this.spd = 5;
    }

    render(context){
        context.beginPath();
        context.arc(this._x,this._y,this.rad,0,2*Math.PI);
        context.fillStyle = "black";
        context.fill();
        context.closePath();
    }

    move() {
        this._y -= this.spd;
    }
}