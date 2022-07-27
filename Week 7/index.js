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



function customer(){
    let form3 = document.getElementById('form3')
    const name = document.getElementById("item");
    const lastName = document.getElementById("item");
    const number = document.getElementById("item");
    const customerInfo = form3 + name + lastName + number;

    document.getElementById("order")=customerInfo;
}
