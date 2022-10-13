let input = document.querySelector('input');
let btn = document.querySelector('button');
let timerBlock = document.getElementById('timer');

btn.addEventListener('click', getInputValue);

function getInputValue() {
    let value = input.value;
    if (!value) {
        alert('Введите число');
    }
    if (value < 0) {
        alert('Введите положительное число');
    }
    const timer = setInterval(() => {
        if (value < 0) {
            clearInterval(timer);
            timerBlock.innerHTML = '';
        } else {
            timerBlock.innerHTML = `${value}`;
            input.value = null;
        }
        --value;
    }, 1000);
}

// ---------------------------------------
const redButton = document.getElementById('red');
const greenButton = document.getElementById('green');
const yellowButton = document.getElementById('yellow');
const currentButton = document.getElementById('current');
const clearButton = document.getElementById('clear');

const firstBlock = document.getElementById('first');
const secondBlock = document.getElementById('second');

redButton.addEventListener('click', () => applyColor(red));
greenButton.addEventListener('click', () => applyColor(green));
yellowButton.addEventListener('click', () => applyColor(yellow));
currentButton.addEventListener('click', applyCurrentColor);
clearButton.addEventListener('click', removeAll);

function firstBlockremoveColor(c1, c2) {
    firstBlock.classList.remove(c1);
    firstBlock.classList.remove(c2);
}
function secondBlockremoveColor(c1, c2) {
    secondBlock.classList.remove(c1);
    secondBlock.classList.remove(c2);
}
function removeAll() {
    const arrColorFirstBlock = firstBlock
        .getAttribute('class')
        .split(' ')
        .splice(1);
    arrColorFirstBlock.map((el) => firstBlock.classList.remove(el));
    const arrColorSecondBlock = secondBlock
        .getAttribute('class')
        .split(' ')
        .slice(1);
    arrColorSecondBlock.map((el) => secondBlock.classList.remove(el));
}

function applyColor(color) {
    switch (color) {
        case red:
            firstBlockremoveColor('green-color', 'yellow-color');
            firstBlock.classList.add('red-color');
            break;
        case green:
            firstBlockremoveColor('red-color', 'yellow-color');
            firstBlock.classList.add('green-color');
            break;
        case yellow:
            firstBlockremoveColor('green-color', 'red-color');
            firstBlock.classList.add('yellow-color');
            break;
        default:
            break;
    }
}

function applyCurrentColor() {
    const color = firstBlock.getAttribute('class');
    const currentColor = color.split(' ').splice(1, 1).join('');
    switch (currentColor) {
        case '':
            break;
        case 'red-color':
            secondBlockremoveColor('green-color', 'yellow-color');
            secondBlock.classList.add(currentColor);
            break;

        case 'green-color':
            secondBlockremoveColor('red-color', 'yellow-color');
            secondBlock.classList.add(currentColor);
            break;

        case 'yellow-color':
            secondBlockremoveColor('green-color', 'red-color');
            secondBlock.classList.add(currentColor);
            break;
        default:
            break;
    }
}
