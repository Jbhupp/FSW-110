var h = document.createElement("H2");  
var t = document.createTextNode("Welcome"); 
h.appendChild(t); 

document.body.appendChild(h); 

for (let i = 0; i < 4; i ++) {
    var ele = document.createElement("h2");
    ele.innerHTML = "Welcome";
    document.body.appendChild(ele);
    
}
var heading1 = document.getElementById("h2")
heading1.style.color ="cornflowerblue"