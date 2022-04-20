class UI {
    constructor() {
        this.score = 0;
    }

    createUI() {
        this.scoreUI = document.createElement('span');
        this.scoreUI.innerHTML = "Score: ";
        this.scoreUI.style.position = "absolute";
        this.scoreUI.style.left = "30px";
        this.scoreUI.style.top = "30px";
        this.scoreUI.style.color = "white";
        document.body.append(this.scoreUI);
        // let ctx = canvas.getContext('2d');
        // ctx.font = "30px Georgia";
        // ctx.style = "white";
        // ctx.fillText(Score: ${this.score}, 30,30)
    }

    upScore() {
        this.score++;
        this.scoreUI.innerHTML = `Score: ${this.score}`;
    }

}