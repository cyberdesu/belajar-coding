const Login = document.getElementById("Login")
Login.addEventListener("click", function() {
    let email = document.getElementById("user").value
    let pass = document.getElementById("pass").value
    
    if (email==true && pass==true){
        alert("Login berhasil")
        Login('./latihan.html')
    }else if(email == undefined && pass == true){
        alert("Silahkan isi data terlebih dahulu");
    }
})