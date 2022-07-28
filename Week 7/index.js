function orderButton() {
    const coffee = document.getElementById("q1").value;
    const icedCoffee = document.getElementById("q2").value;
    const cappuccino = document.getElementById("q3").value;
    const espresso = document.getElementById("q4").value;

    const coffeePrice = document.querySelector(".coffee-price").textContent;
    const icedPrice = document.querySelector(".iced-price").textContent;
    const espressoPrice = document.querySelector(".espresso-price").textContent;
    const cappuccinoPrice = document.querySelector(".cappuccino-price").textContent;


    const coffeeTotal = coffeePrice * coffee;
    const icedTotal = icedPrice * icedCoffee;
    const cappuccinoTotal = cappuccinoPrice *  cappuccino;
    const espressoTotal = espressoPrice * espresso;

    const totalPrice = coffeeTotal + icedTotal + espressoTotal + cappuccinoTotal;

    document.getElementById("order-button").value = totalPrice;
   
}


let itemOne = document.getElementById('item1');
let itemTwo = document.getElementById('item2');
let itemThree = document.getElementById('item3');
let itemFour = document.getElementById('item4');

let form = document.getElementById('form2');
let ul = document.getElementById('order-button');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let parentList = document.createElement('li');
    parentList.className = 'parentList';
    let subList = document.createElement('ul');
    let nestedList1 = document.createElement('li');

    parentList.textContent = itemOne.value;
    subList.textContent = details.value;

    parentList.textContent = itemTwo.value;
    subList.textContent = details.value;

    parentList.textContent = itemThree.value;
    subList.textContent = details.value;

    parentList.textContent = itemFour.value;
    subList.textContent = details.value;

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', (e) => {
        let removeBtn = e.target;
        removeBtn.parentNode.parentNode.parentNode.remove();
    });

    ul.appendChild(parentList);
    parentList.appendChild(subList);
    subList.appendChild(nestedList1);
    nestedList1.appendChild(deleteBtn);

    itemOne.value = "";
    details.value = "";

    itemTwo.value = "";
    details.value = "";

    itemThree.value = "";
    details.value = "";

    itemFour.value = "";
    details.value = "";
});