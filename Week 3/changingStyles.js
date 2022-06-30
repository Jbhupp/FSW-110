var h = document.createElement("H2");  
var t = document.createTextNode("Welcome"); 
h.appendChild(t); 
document.body.appendChild(h); 

for (let i = 0; i < 4; i ++) {
    var ele = document.createElement("h2");
    ele.innerHTML = "Welcome";
    document.body.appendChild(ele);


    
}

for (let i = 0; i < 10; i ++){
    var note = document.querySelector('H2');
    note.style.backgroundColor = 'cornflowerblue';
    note.style.cssText += 'font-size:20px; font-weight: lighter; font-family: sans-serif'
    document.body.appendChild(note)
}



const heading = document.createElement('heading')
heading.classList.add("border")


