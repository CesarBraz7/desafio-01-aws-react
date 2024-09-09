const clearData = () => {
    localStorage.clear()
    location.reload()
}

const togglePassword = () => {
    if(password.type == "password"){
        togglePasswordButton.textContent = "Hide password"
        password.type = "text"
    } else{
        togglePasswordButton.textContent = "Show password"
        password.type = "password"
    }
}

const redirToHome = () => window.location.href = "../../index.html"

const nome = document.getElementById("name")
const email = document.getElementById("email")
const password = document.getElementById("password")
const togglePasswordButton = document.getElementById("show-pass-btn")

nome.value = localStorage.getItem("nome")
email.value = localStorage.getItem("email")
password.value = localStorage.getItem("password")