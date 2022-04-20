class Bomb {
    constructor(imageName,x,y) {
        this.x = x;
        this.y = y;
        this.rad = 5;
        this.width  = this.rad;
        this.height = this.rad;
        this.spd = 40;
        this.image = new Image();
        this.image.src = imageName;
    }

    render(canvas) {
        let pen = canvas.getContext('2d');
        pen.drawImage(this.image, this.x, this.y);
    }

    move() {
        this.y -= this.spd;
    }

}