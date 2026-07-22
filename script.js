document.getElementById("contactForm").addEventListener("submit",function(e){

e.preventDefault();

document.querySelectorAll(".error").forEach(function(x){
x.innerHTML="";
});

let valid=true;

let name=document.getElementById("name").value.trim();
let email=document.getElementById("email").value.trim();
let subject=document.getElementById("subject").value.trim();
let message=document.getElementById("message").value.trim();

if(name==""){
document.getElementById("nameError").innerHTML="Name cannot be empty";
valid=false;
}

if(!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email)){
document.getElementById("emailError").innerHTML="Enter valid email";
valid=false;
}

if(subject.length<5){
document.getElementById("subjectError").innerHTML="Subject must contain at least 5 characters";
valid=false;
}

if(message.length<20){
document.getElementById("messageError").innerHTML="Message must contain at least 20 characters";
valid=false;
}

if(valid){

alert("Message Sent Successfully");

document.getElementById("contactForm").reset();

}

});