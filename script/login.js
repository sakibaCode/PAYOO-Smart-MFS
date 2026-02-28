document.getElementById("login-btn").addEventListener("click",function(){

    const numberInput = document.getElementById("number-input")
    const contactNumber = numberInput.value

    const passwordInput = document.getElementById("password-input")
    const passwordNumber = passwordInput.value

    if(contactNumber=="01718517777" && passwordNumber=="admin123"){
        window.location.assign("home.html")
    }
    else{
        alert("Incorrect Number or Password")
        return;
    }
})
