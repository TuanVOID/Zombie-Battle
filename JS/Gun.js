class Tank {
    constructor(imageName, x, y) {
        this.x = x;
        this.y = y;
        this.w = 70;
        this.h = 80;
        this._bullets = [];
        this._count = 0;
        this._reloadTime = 5;
        this.direct = "";
        this.speed = 12;
        this.image = new Image();
        this.image.src = imageName;
    }

    render(paper) {
        let pen = paper.getContext('2d');
        pen.drawImage(this.image, this.x, this.y, this.w, this.h);
    }

    fire() {
        this._count++;
        if (this._count % this._reloadTime === 0) {
            let bullet = new Bomb('Images/bullet.png',this.x + this.w/2.8, this.y -10 );
            this._bullets.push(bullet);
        }
    }

    drawBullet(canvas) {
        for (let i = 0; i < this._bullets.length; i++) {
            this._bullets[i].move();
            this._bullets[i].render(canvas);
        }
    }

    checkOut(){
        for (let i = 0; i < this._bullets.length; i++) {
            if (this._bullets[i].x < 0) {
                this._bullets.splice(i,1)
            }
        }
    }

    move() {
        switch (this.direct) {
            case "right":
                this.x += this.speed;
                if (this.x > canvas.width-this.w) {
                    this.x = canvas.width - this.w
                }
                break;
            case "left":
                this.x -= this.speed;
                if (this.x < 0) {
                    this.x = 0
                }
                break;

        }
    }
}