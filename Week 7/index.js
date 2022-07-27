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


let form = document.getElementById('form');
let ul = document.getElementById('customer');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let parentList = document.createElement('li');
    parentList.className = 'parentList';
    let subList = document.createElement('ul');
    let nestedList1 = document.createElement('li');

    parentList.textContent = item.value;
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

    item.value = "";
    details.value = "";

});
