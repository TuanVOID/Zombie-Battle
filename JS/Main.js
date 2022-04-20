let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d')
let gun1 = new Gun(525, 575, 15, 45, "green")
let allZombie = [];
let countE = 0;
let multi = 40; //toc do xuat hien quai
let multiBoss = 2000;  //goi boss

//tao mang zombie
function spawnEnemy() {
    countE++;
    if (countE % multi === 0) {
        let zombie = new Zombie(60,60);
        allZombie.push(zombie);
    }

    if (countE % multiBoss === 0){
        let zombie1 = new Zombie(200,200);
        allZombie.push(zombie1);
    }
}

// render zombie
function drawZombie(ctx) {
    for (let i = 0; i < allZombie.length; i++) {
        allZombie[i].moveEnemy();
        allZombie[i].renderEnemy(ctx);
    }
}

//di chuyen sung
window.addEventListener('keydown', move);
function move(evt) {
    switch (evt.key) {
        case "d":
            gun1.direct = "right";
            break;
        case "a":
            gun1.direct = "left";
            break;
        default: gun1.direct = "idle";
    }
}

function checkCollision(obj1, obj2) {
    let left1 = obj1._x;
    let right1 = obj1._x + obj1._width;
    let top1 = obj1._y ;
    let bottom1 = obj1._y + obj1._height;

    let left2 = obj2._x;
    let right2 = obj2._x + obj2._width;
    let top2 = obj2._y;
    let bottom2 = obj2._y + obj2._height;

    if(left1 > right2 || right1 < left2 || top1 > bottom2 || bottom1 < top2){
        return false;
    }
    return true;
}

function checkCrash(){
    for (let i = 0; i < gun1._bullets.length; i++) {
        for (let j = 0; j < allZombie.length; j++) {
            if (checkCollision(gun1._bullets[i],allZombie[j])) {
                gun1._bullets.splice(i,1);
                allZombie.splice(j, 1);
                i--;
                j--;
            }
        }
    }
}

function checkLose(){
    for (let i = 0; i < allZombie.length; i++) {
        if (allZombie[i]._y > canvas.height) {
            alert(" You Lose ");
            console.log("abc");
            break;
        }
    }
}

function checkWin(){

}

function init() {
    clear();
    gun1.drawBullet(ctx);
    gun1.fire();
    gun1.move();
    gun1.render(ctx);
    gun1.checkOut();
    checkCrash();
    spawnEnemy();
    drawZombie(ctx);
    checkLose();
    requestAnimationFrame(init);
}

init();

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}