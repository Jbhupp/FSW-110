
function Save() {
    var x1 = document.getElementById('first_name').value;
    var x2 = document.getElementById('last_name').value;
    var x3 = document.getElementById('email_address').value;

    alert("First Name : "+x1+"\n Last Name : "+x2+"\n Email : "+x3,"");
    document.getElementById('first_name').value = "";
    document.getElementById('last_name').value = "";
    document.getElementById('email_address').value = "";
}

