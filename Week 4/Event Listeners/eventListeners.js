const square = document.getElementById("square")

function handleLoad(){
    square.style.backgroundColor ="black";
}

square.addEventListener("DOMContentLoaded", handleLoad)


function handleStart(){
    square.style.backgroundColor ="white";
}

square.addEventListener("start", handleStart)


function handleMouseOver(){
    square.style.backgroundColor ="green";
}

square.addEventListener("mouseover", handleMouseOver)

function handleMouseDown(){
    square.style.backgroundColor ="yellow";
}

square.addEventListener("mousedown", handleMouseDown)

function handleMouseUp(){
    square.style.backgroundColor ="blue";
}

square.addEventListener("mouseup", handleMouseUp)

function handleMouseDouble(){
    square.style.backgroundColor ="red";
}

square.addEventListener("dblclick", handleMouseDouble)

function handleMouseScroll(){
    square.style.backgroundColor ="purple";
}

square.addEventListener("scroll", handleMouseScroll)