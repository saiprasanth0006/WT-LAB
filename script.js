document.getElementById("registrationForm").addEventListener("submit", function(e){

    e.preventDefault();

    document.querySelectorAll(".error").forEach(function(item){
        item.innerHTML="";
    });

    document.getElementById("successMessage").innerHTML="";

    let valid=true;

    let name=document.getElementById("name").value.trim();
    let roll=document.getElementById("roll").value.trim();
    let email=document.getElementById("email").value.trim();
    let mobile=document.getElementById("mobile").value.trim();
    let password=document.getElementById("password").value;
    let confirmPassword=document.getElementById("confirmPassword").value;
    let department=document.getElementById("department").value;
    let dob=document.getElementById("dob").value;

    let gender=document.querySelector('input[name="gender"]:checked');

    if(name===""){
        document.getElementById("nameError").innerHTML="Full Name is required";
        valid=false;
    }

    if(!/^[A-Za-z0-9]+$/.test(roll)){
        document.getElementById("rollError").innerHTML="Roll Number should contain only letters and numbers";
        valid=false;
    }

    if(!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email)){
        document.getElementById("emailError").innerHTML="Enter a valid Email";
        valid=false;
    }

    if(!/^[0-9]{10}$/.test(mobile)){
        document.getElementById("mobileError").innerHTML="Enter exactly 10 digits";
        valid=false;
    }

    if(password.length<8){
        document.getElementById("passwordError").innerHTML="Password must be at least 8 characters";
        valid=false;
    }

    if(password!==confirmPassword){
        document.getElementById("confirmPasswordError").innerHTML="Passwords do not match";
        valid=false;
    }

    if(gender==null){
        document.getElementById("genderError").innerHTML="Select Gender";
        valid=false;
    }

    if(department===""){
        document.getElementById("departmentError").innerHTML="Select Department";
        valid=false;
    }

    if(dob===""){
        document.getElementById("dobError").innerHTML="Select Date of Birth";
        valid=false;
    }

    if(valid){
        document.getElementById("successMessage").innerHTML="Registration Successful!";
        document.getElementById("registrationForm").reset();
    }

});