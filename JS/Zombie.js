class Zombie {
    constructor(canvas, imageName, row, col) {
        this.pen = canvas.getContext('2d');
        this.image = new Image();
        this.image.src = imageName;
        this.row = row;
        this.col = col;
        this.indexCol = 0;
        this.indexRow = 0;
        this.x = Math.random() * canvas.width * 0.92;
        this.y = 0;
        this.width = 50;
        this.height = 50;
    }

    drawImage() {
        let imgWidth = this.image.width / this.col;
        let imgHeight = this.image.height / this.row;
        this.pen.clearRect(this.x, this.y, imgWidth, imgHeight);
        this.pen.drawImage(this.image, this.indexCol * imgWidth, this.indexRow * imgHeight, imgWidth, imgHeight, this.x, this.y, imgWidth, imgHeight);

    }

    updateFrame() {
        this.indexRow < this.row - 1 ? this.indexRow++ : this.indexRow = 0;
    }

    move() {
        this.y += 4;
    }

}