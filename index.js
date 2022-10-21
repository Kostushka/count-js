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

// -------------------------------------------------------------------------------
const fBlock = document.getElementById('first');
const sBlock = document.getElementById('second');

const currButton = document.getElementById('current');
const clearButton = document.getElementById('clear');

const colors = ['red', 'green', 'yellow'];
let fColor = null;
let sColor = null;

for (let i = 0; i < colors.length; i++) {
    const button = document.getElementById(colors[i]);
    button.addEventListener('click', () => {
        removeColor(fBlock, fColor);
        fColor = colors[i] + '-color';
        applyColor(fBlock, fColor);
    });
}

function removeColor(block, color) {
    block.classList.remove(color);
}

function applyColor(block, color) {
    block.classList.add(color);
}

currButton.addEventListener('click', () => {
    removeColor(sBlock, sColor);
    applyColor(sBlock, fColor);
    sColor = fColor;
});

clearButton.addEventListener('click', () => {
    removeColor(fBlock, fColor);
    removeColor(sBlock, sColor);
    fColor = sColor = null;
});

// --------------------------------------------------------------------------------------
// const allItems = document.getElementById('all');
// let all = 800;
// allItems.innerHTML = all;

// const cost1 = document.getElementById('cost0');
// const cost2 = document.getElementById('cost1');
// const cost3 = document.getElementById('cost2');
// const cost4 = document.getElementById('cost3');
// const costs = [200, 300, 350, 432];
// function addCost(el, arr) {
//     el.innerHTML = arr[el.getAttribute('id').slice(-1)];
// }
// addCost(cost1, costs);
// addCost(cost2, costs);
// addCost(cost3, costs);
// addCost(cost4, costs);

// const item1 = document.getElementById('item0');
// const item2 = document.getElementById('item1');
// const item3 = document.getElementById('item2');
// const item4 = document.getElementById('item3');
// let item = 200;
// function addItem(el, item) {
//     el.innerHTML = item;
// }
// addItem(item1, item);
// addItem(item2, item);
// addItem(item3, item);
// addItem(item4, item);

// const inputNum1 = document.getElementById('inputItems1');
// const inputNum2 = document.getElementById('inputItems2');
// const inputNum3 = document.getElementById('inputItems3');
// const inputNum4 = document.getElementById('inputItems4');
// const countValue = {
//     value1: 0,
//     value2: 0,
//     value3: 0,
//     value4: 0,
// };

// function onChangeValue(inputNum, valueNum, itemNum, itemAmount) {
//     inputNum.addEventListener('change', () => {
//         if (Number(inputNum.value) < 0) {
//             inputNum.value = 0;
//             alert('Введите положительное число');
//         }

//         let sum = 0;
//         let value = Number(inputNum.value);
//         for (let key in countValue) {
//             if (key === `value${valueNum}`) {
//                 countValue[key] = 0 + value;
//             }
//             sum += countValue[key];
//         }
//         allItems.innerHTML = all - sum;
//         addItem(itemNum, itemAmount - value);
//     });
// }
// onChangeValue(inputNum1, '1', item1, item);
// onChangeValue(inputNum2, '2', item2, item);
// onChangeValue(inputNum3, '3', item3, item);
// onChangeValue(inputNum4, '4', item4, item);

const allItems = document.getElementById('all');
let all = 800;
allItems.innerHTML = all;

function createElement(...id) {
    const arrId = id;
    const hashEl = {};
    arrId.map((id) => (hashEl[id] = document.getElementById(id)));
    return hashEl;
}
const hashElCost = createElement('cost0', 'cost1', 'cost2', 'cost3');
const hashElItem = createElement('item0', 'item1', 'item2', 'item3');
const hashElInput = createElement(
    'inputItems1',
    'inputItems2',
    'inputItems3',
    'inputItems4'
);

function addValue(obj, arr) {
    for (let key in obj) {
        const element = obj[key];
        element.innerHTML = arr[element.getAttribute('id').slice(-1)];
    }
}

const costs = [200, 300, 350, 432];
const item = [200, 200, 200, 200];

addValue(hashElCost, costs);
addValue(hashElItem, item);

const countValue = {
    value1: 0,
    value2: 0,
    value3: 0,
    value4: 0,
};

function onChangeValue(inputNum, valueNum, itemNum, itemAmount) {
    for (let key in inputNum) {
        if (key === 'inputItems' + valueNum) {
            inputNum[key].addEventListener('change', () => {
                if (Number(inputNum.value) < 0) {
                    inputNum.value = 0;
                    alert('Введите положительное число');
                }

                let sum = 0;
                let value = Number(inputNum[key].value);
                for (let key in countValue) {
                    if (key === `value${valueNum}`) {
                        countValue[key] = 0 + value;
                    }
                    sum += countValue[key];
                }
                allItems.innerHTML = all - sum;
                itemAmount.splice(itemNum, 1, itemAmount[itemNum] - 1);
                addValue(hashElItem, itemAmount);
            });
        }
    }
}
onChangeValue(hashElInput, '1', 0, item);
onChangeValue(hashElInput, '2', 1, item);
onChangeValue(hashElInput, '3', 2, item);
onChangeValue(hashElInput, '4', 3, item);
