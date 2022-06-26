var h = document.createElement("H1"); 
var t = document.createTextNode("Welcome to my website");
h.appendChild(t); 
document.body.appendChild(h); 

var newP = document.createElement("p");
newP.textContent = "Things I like to do.";
document.body.appendChild(newP)


var newLi = document.createElement("li");
var newLi1 = document.createTextNode("Careers");
newLi.appendChild(newLi1);
document.body.appendChild(newLi);

var newLi2 = document.createElement("li");
var newLi3 = document.createTextNode("Sports");
newLi2.appendChild(newLi3);
document.body.appendChild(newLi2);

var newLi4 = document.createElement("li");
var newLi5 = document.createTextNode("Vacations");
newLi4.appendChild(newLi5);
document.body.appendChild(newLi4);

var newFooter = document.createElement("footer");
newFooter.textContent = "Copyright 2022";
document.body.appendChild(newFooter)

var link = document.createElement('a');
link.classList.add('menu__link');
link.href = '#home';
link.textContent = 'Home  About Us  Contact Us';
document.body.appendChild(link);


