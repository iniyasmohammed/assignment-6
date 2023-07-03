function validatename(){
    let text = document.getElementById("fname").value;
    let regex = /^[a-zA-Z]+$/;
    // keep the reject test conditions to a variable
    if(regex.test(text)){
        document.getElementById("namewarning").innerHTML = "success";
        document.getElementById("namewarning").style.color = "green";
    }else{
        
            document.getElementById("namewarning").innerHTML = "enter a valid name";
            document.getElementById("namewarning").style.color = "red";
            }
}
function validatelname(){
    let text = document.getElementById("lname").value;
    let regex = /^[a-zA-Z]+$/;
    // keep the reject test conditions to a variable
    if(regex.test(text)){
        document.getElementById("lnamewarning").innerHTML = "success";
        document.getElementById("lnamewarning").style.color = "green";
    }else{
        
            document.getElementById("lnamewarning").innerHTML = "enter a valid name";
            document.getElementById("lnamewarning").style.color = "red";
            }
}
function validateexp(){
    let exp = document.getElementById("exp").value;
    let regex = /[0-2]{1}[0-9]{1}/;
    if(regex.test(exp)){
        document.getElementById("expwarning").innerHTML = "success";
        document.getElementById("expwarning").style.color = "green";
    }else{
        
        document.getElementById("expwarning").innerHTML = "are u kidding with experience?";
        document.getElementById("expwarning").style.color = "red";
        }
}

function validateemail(){
    let text = document.getElementById("email").value;
    let regex = /^([a-z0-9\.]+)@([a-z]+).([a-z])+$/;
    // keep the reject test conditions to a variable
    if(regex.test(text)){
        document.getElementById("emailwarning").innerHTML = "success";
        document.getElementById("emailwarning").style.color = "green";
    }else{
        
            document.getElementById("emailwarning").innerHTML = "enter a valid Email";
            document.getElementById("emailwarning").style.color = "red";
            }
}
function validatenumber(){
    let text = document.getElementById("mobnum").value;
    let regex = /^[0-9]{10}$/;
    // keep the reject test conditions to a variable
    if(regex.test(text)){
        document.getElementById("numberwarning").style.color = "green";
        document.getElementById("numberwarning").innerHTML = "success";
    }else{
        
            document.getElementById("numberwarning").innerHTML = "enter a valid Mobile number";
            document.getElementById("numberwarning").style.color = "red";
            }
}
submitAll=()=>{
    validatename()
    validatelname()
    validateexp()
    validateemail()
    validatenumber()

    let fName = document.getElementById('fname').value;
    let lName = document.getElementById('lname').value;

    let fullName = fName.concat(" "+lName);
    document.getElementById('wlcmMsg').innerHTML = "welcome Mr " +fullName;

    let newMsg = document.getElementById("exp").value;
    
    document.getElementById("rplceMsg1").innerHTML = "your experience is "+ newMsg+" years";
    newMsg = newMsg.replace(newMsg,"great");
    document.getElementById('newMsg').innerHTML = "your experience is "+ newMsg;
}
