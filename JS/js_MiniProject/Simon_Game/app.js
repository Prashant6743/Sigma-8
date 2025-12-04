let gameseq = [];
let userseq = [];

console.log("Simon Game  ");

let btns = ["yellow", "red", "purple", "green"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started === false) {
        console.log("game started ");
        started = true;
        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function correctFlash() {
    // Removed background flash - only button will flash green
}

function buttonGreenFlash(btn) {
    btn.style.backgroundColor = "green";
    setTimeout(function () {
        btn.style.backgroundColor = "";
    }, 150);
}

function wrongFlash() {
    document.body.style.backgroundColor = "red";
    setTimeout(function () {
        document.body.style.backgroundColor = "white";
    }, 150);
}

function levelUp() {
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIndex = Math.floor(Math.random() * 4);
    let randColor = btns[randIndex];
    let randbtn = document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    console.log(gameseq);
    playSequence();
}

function playSequence() {
    let idx = 0;

    function next() {
        if (idx < gameseq.length) {
            let color = gameseq[idx];
            let btn = document.querySelector(`.${color}`);
            gameFlash(btn);
            idx++;
            setTimeout(next, 800);
        }
    }

    next();
}
function checkAnswer(idx) {
    console.log(`currentLevel:-${level}`);

    if (userseq[idx] !== gameseq[idx]) {
        wrongFlash();
        h2.innerText = "Game Over! Your score: " + level + ". Press any key to restart";
        console.log("Wrong!");
        started = false;
        level = 0;
        gameseq = [];
        userseq = [];
        return;
    }

    correctFlash();
    let correctBtn = document.querySelector(`.${userseq[idx]}`);
    buttonGreenFlash(correctBtn);

    if (userseq.length === gameseq.length) {
        setTimeout(levelUp, 1000);
    }
}
function btnPress() {
    if (!started) return;

    let btn = this;
    let usercolor = btn.getAttribute("id");
    console.log(usercolor);
    userseq.push(usercolor);
    userFlash(btn);

    checkAnswer(userseq.length - 1);
}
let allbtns = document.querySelectorAll(".btn");
for (let btn of allbtns) {
    btn.addEventListener("click", btnPress);
}
