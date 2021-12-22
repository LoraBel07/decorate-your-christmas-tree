const image = document.querySelector("#myImage");
const text = document.querySelector("h2");
const textB = document.querySelector("h1");

const btnOne = document.querySelector("#oneY");
const btnTwo = document.querySelector("#twoS");

btnOne.addEventListener("click", bollsY);
btnTwo.addEventListener("click", bollsS);

let confett = document.querySelector("#my-canvas");


function bollsY() {
    image.setAttribute("src", "baseYeGr.png");
    text.textContent = "Choose a garland";
    btnOne.textContent = "Red";
    btnTwo.textContent = "Gold";

    btnOne.addEventListener("click", garlR);
    btnTwo.addEventListener("click", garlG);
}

function garlR() {
    image.setAttribute("src", "baseYeGrRedG.png");    
    text.textContent = "Choose gifts";
    btnOne.textContent = "Many";
    btnTwo.textContent = "Even more";

    btnOne.addEventListener("click", giftM);
    btnTwo.addEventListener("click", giftEm);
}

function garlG() {
    image.setAttribute("src", "baseYeGrGoldG.png");
    text.textContent = "Choose gifts";
    btnOne.textContent = "Many";
    btnTwo.textContent = "Even more";

    btnOne.addEventListener("click", giftGoldM);
    btnTwo.addEventListener("click", giftGoldEm);
}

function giftGoldM() {
    image.setAttribute("src", "baseYeGrGoldGgift.png");    
    text.style = "display: none";
    textB.textContent = "MARRY  CHRISTMAS !!!"
    btnOne.style = "display: none";
    btnTwo.style = "display: none";

    document.querySelector('#myAudio').play();
    confett.classList.add('active');
}

function giftGoldEm() {
    image.setAttribute("src", "baseYeGrGoldGgiftEM.png");    
    text.style = "display: none";
    textB.textContent = "MARRY  CHRISTMAS !!!"
    btnOne.style = "display: none";
    btnTwo.style = "display: none";

    document.querySelector('#myAudio').play();
    confett.classList.add('active');
}

function giftEm() {
    image.setAttribute("src", "baseYeGrRedGgiftEM.png");    
    text.style = "display: none";
    textB.textContent = "MARRY  CHRISTMAS !!!"
    btnOne.style = "display: none";
    btnTwo.style = "display: none";

    document.querySelector('#myAudio').play();
    confett.classList.add('active');
}

function giftM() {
    image.setAttribute("src", "baseYeGrRedGgift.png");    
    text.style = "display: none";
    textB.textContent = "MARRY  CHRISTMAS !!!"
    btnOne.style = "display: none";
    btnTwo.style = "display: none";

    document.querySelector('#myAudio').play();
    confett.classList.add('active');
}

function bollsS() {
    image.setAttribute("src", "baseSil.png");
    text.textContent = "Choose a garland";
    btnOne.textContent = "Red";
    btnTwo.textContent = "Gold";

    btnOne.addEventListener("click", garlSilRed);
    btnTwo.addEventListener("click", garlSilGold);
}

function garlSilRed() {
    image.setAttribute("src", "baseSilRedG.png");
    text.textContent = "Choose gifts";
    btnOne.textContent = "Many";
    btnTwo.textContent = "Even more!";

    btnOne.addEventListener("click", giftSilM);
    btnTwo.addEventListener("click", giftSilEm);
}

function giftSilM() {
    image.setAttribute("src", "baseSilRedGgift.png");    
    text.style = "display: none";
    textB.textContent = "MARRY  CHRISTMAS !!!"
    btnOne.style = "display: none";
    btnTwo.style = "display: none";

    document.querySelector('#myAudio').play();
    confett.classList.add('active');
}

function giftSilEm() {
    image.setAttribute("src", "baseSilRedGgiftEM.png");    
    text.style = "display: none";
    textB.textContent = "MARRY  CHRISTMAS !!!"
    btnOne.style = "display: none";
    btnTwo.style = "display: none";

    document.querySelector('#myAudio').play();
    confett.classList.add('active');
}

function garlSilGold() {
    image.setAttribute("src", "baseSilGoldG.png");
    text.textContent = "Choose gifts";
    btnOne.textContent = "Many";
    btnTwo.textContent = "Even more";

    btnOne.addEventListener("click", giftSilGM);
    btnTwo.addEventListener("click", giftSilGEm);
}

function giftSilGM() {
    image.setAttribute("src", "baseSilGoldGgift.png");    
    text.style = "display: none";
    textB.textContent = "MARRY  CHRISTMAS !!!"
    btnOne.style = "display: none";
    btnTwo.style = "display: none";

    document.querySelector('#myAudio').play();
    confett.classList.add('active');
}

function giftSilGEm() {
    image.setAttribute("src", "baseSilGoldGgiftEM.png");    
    text.style = "display: none";
    textB.textContent = "MARRY  CHRISTMAS !!!"
    btnOne.style = "display: none";
    btnTwo.style = "display: none";
    document.querySelector('#myAudio').play();
    confett.classList.add('active');
}

const confettiSettings = { target: 'my-canvas' };
const confetti = new ConfettiGenerator(confettiSettings);
confetti.render();
