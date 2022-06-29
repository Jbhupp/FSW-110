var h = document.createElement("H1");  
var t = document.createTextNode("Hello World"); 
h.appendChild(t); 

document.body.appendChild(h); 

for (let i = 0; i < 10; i ++) {
    var ele = document.createElement("h1");
    ele.innerHTML = "Hello world";
    document.body.appendChild(ele);
    
}

for (let i = 0; i < 10; i ++){
    var note = document.querySelector('H1');
    note.style.backgroundColor = 'blue';
    note.style.color = 'red';
    document.body.appendChild(note)
}

var names1 = ['steve', 'larry', 'joe', 'shirley', 'steph', 'nate', 'rick', 'emily']

var people = document.getElementById("newList")

for (var i = 0; i < names1.length; i ++) {
    people.innerHTML += "<li>" + names1[i] + "</li>"
    
}

var h1Elements = document.getElementsByTagName("h1");


