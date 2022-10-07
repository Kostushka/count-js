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
