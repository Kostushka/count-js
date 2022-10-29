import products from './products.js'; // вынес все товары в отдельный файл для удобства

const itemsBlocks = document.getElementsByClassName('item'); // выносим все родительские блоки товаров в один массив
const allAmountBlock = document.getElementById('all'); // блок с общим количеством товаров

for (let i = 0; i < products.length; i++) { // используем цикл для перебора всех товаров
  const product = products[i]; // определяем объект товара, который будет использоваться в одной итерации
  product.remaining = product.amount; // добавляем новое независимое поле с остатком товара
  const itemBlock = itemsBlocks[i]; // определяем соответсвующий блок товара, в который мы добавим информацию о товаре

  // определяем блок куда надо добавить информацию о цене и добавляем её
  const itemBlock_cost = itemBlock.getElementsByClassName('item__cost')[0].getElementsByTagName('span')[0]; 
  itemBlock_cost.textContent = product.cost;

  // определяем блок куда надо добавить информацию о количестве
  const itemBlock_amount = itemBlock.getElementsByClassName('item__amount')[0].getElementsByTagName('span')[0];

  updateAmountInfo(); // выносим обновление информация об остатке в функцию т.к. обновляем эту информацию в нескольких местах

  // определяем блок для ввода количества покупаемого товара
  const itemBlock_input = itemBlock.getElementsByTagName('input')[0];

  itemBlock_input.oninput = function() {
    const count = Number(this.value); // значение поля, с преобразованием в число, выносим  в переменную, для удобства и лучшей читаемости
    
    if(count > 0 && count <= product.amount) { // вводимое число должно быть больше нуля и меньше общего количества товара
      product.remaining = product.amount - count;
    } else {                                   // иначе остаток возвращаем в начальное значение
      product.remaining = product.amount;
    }

    product.count = count; // изменяем количество покупаемого товара
    updateAmountInfo(); 
  }

  function updateAmountInfo() { // функция обновления информации о количестве товара в DOM
    let allRemaining = 0;
    products.forEach(product => allRemaining += product.remaining);

    itemBlock_amount.textContent = product.remaining;
    allAmountBlock.textContent = allRemaining;
  }
}

