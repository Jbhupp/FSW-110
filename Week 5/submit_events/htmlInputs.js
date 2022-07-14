function Save() {
    var x1 = document.getElementById('first_name').value;
    var x2 = document.getElementById('last_name').value;
    var x3 = document.getElementById('age').value;
    
    var x4 = yesorno()
    var x5 = howlikely()
    var x6 = mybrands()
      
    alert("First Name : "+x1+"\n Last Name : "+x2+"\n Age : "+x3+ "\n Have you shopped here before? : " +x4+"\n How likely are you to recommend us to a friend? :" +x5+ "\n Which brands do you prefer? :"+x6,"");
    
}

function yesorno() {  
  var y1 = document.getElementById("y1");  
  var n1 = document.getElementById("n1");  
  var radioValue;
  if (y1.checked == true){  
    radioValue = (y1.value)   
  }   
  else if (n1.checked == true){  
    radioValue = (n1.value)
  }  
  return(radioValue)
} 

function howlikely() {  
  var hl = document.getElementById("hl");  
  var sl = document.getElementById("sl");  
  var nl= document.getElementById("nl");
  var radioValue;
  
  if (hl.checked == true){  
   radioValue= (hl.value)   
  }   
  else if (sl.checked == true){  
    radioValue = (sl.value)
  }  

  else if (nl.checked == true){
    radioValue = (nl.value)
  }
  return(radioValue)
} 


function mybrands() {  
  
  var l1 = document.getElementById("one");  
  var l2 = document.getElementById("two");  
  var l3 = document.getElementById("three");  
  var l4 = document.getElementById("four");  
  var l5 = document.getElementById("five");  
  var mycheckboxes= [];
    
   
  if (l1.checked == true){  
    mycheckboxes.push(l1.value);  
     
  }   
  if (l2.checked == true){  
    mycheckboxes.push(l2.value);  
       
  }  
  if (l3.checked == true){  
    mycheckboxes.push(l3.value);  
       
  }  
  if (l4.checked == true){  
    mycheckboxes.push(l4.value).value;  
       
  }  
  if (l5.checked == true){  
    mycheckboxes.push(l5.value);  
     
  }  
  return(mycheckboxes)
    
}
