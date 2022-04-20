let canvas = document.getElementById('myCanvas');
let allZombie = [];
let countE = 0;
let multi = 10;
let multiboss = 35;
let tank = new Tank('Images/tank.png',320,510)
let ui = new UI();

function spawnEnemy() {
    countE++;
    if (countE % multi === 0) {
        let zombie = new Zombie(canvas, 'Images/zombie2.png',6, 1)
        allZombie.push(zombie);
    } if (countE % multiboss === 0) {
        let zombie = new Zombie(canvas, 'Images/zombie2.png',6, 1)
        allZombie.push(zombie);
    }
}

function drawZombie(canvas) {
    for (let i = 0; i < allZombie.length; i++) {
        allZombie[i].drawImage();
        allZombie[i].move();
        allZombie[i].updateFrame(canvas);
    }
}

function checkLose(){
    for (let i = 0; i < allZombie.length; i++) {
        if (allZombie[i].y > canvas.height) {
            alert("you lost");
            alert(`Your score: ${ui.score}`)
            break;
        }
    }
}

window.addEventListener('keydown', move);
function move(evt) {
    switch (evt.key) {
        case "d":
            tank.direct = "right";
            break;
        case "a":
            tank.direct = "left";
            break;
        default: tank.direct = "idle";
    }
}

function checkCollision(obj1, obj2) {
    let left1 = obj1.x;
    let right1 = obj1.x + obj1.width;
    let top1 = obj1.y ;
    let bottom1 = obj1.y + obj1.height;

    let left2 = obj2.x;
    let right2 = obj2.x + obj2.width;
    let top2 = obj2.y;
    let bottom2 = obj2.y + obj2.height;

    if(left1 > right2 || right1 < left2 || top1 > bottom2 || bottom1 < top2){
        return false;
    }
    return true;
}

function checkCrash(){
    for (let i = 0; i < tank._bullets.length; i++) {
        for (let j = 0; j < allZombie.length; j++) {
            if (checkCollision(tank._bullets[i],allZombie[j])) {
                let bang = new Bang(canvas, "Images/bang.png", 5, 1,tank._bullets[i].x - 20,tank._bullets[i].y - 20)
                bang.drawImage(canvas)
                tank._bullets.splice(i,1);
                allZombie.splice(j, 1);
                ui.upScore();
                i--;
                j--;
            }
        }
    }
}

function init() {
    setInterval(function() {
        ui.createUI();
        canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
        tank.render(canvas)
        tank.drawBullet(canvas);
        tank.move();
        tank.fire(canvas);
        tank.checkOut();
        drawZombie(canvas)
        spawnEnemy();
        checkCrash();
        checkLose();
    }, 90);
}

function tankmuot(){
    tank.move();
    tank.drawBullet();
    tank.fire(canvas);
    requestAnimationFrame(tankmuot);
}
tankmuot();
init();