/*function orderButton() {
    const coffee = document.getElementById("q1").value;
    const icedCoffee = document.getElementById("q2").value;
    const cappuccino = document.getElementById("q3").value;
   

    const coffeePrice = document.querySelector(".coffee-price").textContent;
    const icedPrice = document.querySelector(".iced-price").textContent;
    
    const cappuccinoPrice = document.querySelector(".cappuccino-price").textContent;


    const coffeeTotal = coffeePrice * coffee;
    const icedTotal = icedPrice * icedCoffee;
    const cappuccinoTotal = cappuccinoPrice *  cappuccino;
    

    const totalPrice = coffeeTotal + icedTotal + cappuccinoTotal;

    document.getElementById("order-button").value = totalPrice;
} */

function orderButton() {

   

    const coffee = document.getElementById("q1").value;
    const icedCoffee = document.getElementById("q2").value;
    const cappuccino = document.getElementById("q3").value;
   

    const coffeePrice = document.querySelector(".coffee-price").textContent;
    const icedPrice = document.querySelector(".iced-price").textContent;
    
    const cappuccinoPrice = document.querySelector(".cappuccino-price").textContent;


    const coffeeTotal = coffeePrice * coffee;
    const icedTotal = icedPrice * icedCoffee;
    const cappuccinoTotal = cappuccinoPrice *  cappuccino;
    

    const totalPrice = coffeeTotal + icedTotal + cappuccinoTotal;

    document.getElementById("order-button").value = totalPrice;

    document.getElementById("receipt-temp").value =  coffee + " coffee";
    document.getElementById("receipt-temp").value =  coffee + " Iced coffee";
    document.getElementById("receipt-temp").value =  coffee + " Cappucino";

    var totalReceipt = totalPrice;
    document.getElementById("receipt-temp").value = ("$") + totalReceipt;
} 
    
    