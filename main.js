const nameInput = document.querySelector('#username');
const startBtn = document.querySelector('#startBtn');
const showRes = document.querySelector('.showResult');

let nameInputVal;
let nameScore;
let word;
let wordVal;

let words = {
    A: 1,
    J: 1,
    S: 1,
    Š: 1,
    B: 2,
    K: 2,
    T: 2,
    C: 3,
    Č: 3,
    Ć: 3,
    L: 3,
    LJ: 3,
    U: 3,
    D: 4,
    Đ: 4,
    DŽ: 4,
    M: 4,
    V: 4,
    E: 5,
    N: 5,
    NJ: 5,
    W: 5,
    F: 6,
    O: 6,
    X: 6,
    G: 7,
    P: 7,
    Y: 7,
    H: 8,
    Q: 8,
    Z: 8,
    Ž: 8,
    I: 9,
    R: 9,
};

startBtn.addEventListener('click', show);
window.addEventListener('keyup', check);

function show() {
    nameScore = 0;
    nameInputVal = nameInput.value.toUpperCase();
    checkCharacter();
    

    if(nameInputVal.length >= 3) {
        for(let i = 0; i < nameInputVal.length; i++) {
            word = nameInputVal[i].split("");
            wordVal = words[word];
            nameScore += wordVal;
        }

    if(isNaN(parseInt(nameScore))) {
        showRes.innerHTML = '<span class="red">Please, check your letters</span>';
        showRes.style.display = "block";
        }else {
            showRes.innerHTML = `Total score for <span class="red">${nameInputVal}</span> is: <span class="red">${nameScore}</span>`;
            showRes.style.display = "block";
        }
    }else {
        showRes.innerHTML = '<span class="red">Please, enter name which contains more than 3 characters</span>';
        showRes.style.display = "block";
    }
}

function checkCharacter() {
    if(nameInputVal.indexOf("DŽ") !== -1) {
        nameScore = -8;
    }else if (nameInputVal.indexOf("LJ") !== -1) {
        nameScore = -1;
    }else if (nameInputVal.indexOf("DŽ") !== -1) {
        nameScore = -1;
    }
}

function check(e) {
    if(e.keyCode === 13) {
        show();
    }
}