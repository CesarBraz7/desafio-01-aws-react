const redirToLogin = () => window.location.href = "../login/index.html"

const register = () => {
    const form = document.getElementById("form")
    const nome = document.getElementById("name").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const confirmPassword = document.getElementById("confirm-password").value

    form.addEventListener("submit", (e) => {
        e.preventDefault()

        if(validatePassword(password)){
            if(password === confirmPassword){
                localStorage.setItem("nome", nome)
                localStorage.setItem("email", email)
                localStorage.setItem("password", password)
                
                window.location.href = "../profile/index.html"
                return true
            } else {
                alert("Passwords not matching.")
                return false
            }
        } else {
            alert("Invalid password. The password must contain at least 8 characters, including uppercase and lowercase letters, numbers and special characters.")
            return false
        }

    })
}

function validatePassword(password) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (regex.test(password)) {
        return true
    } else {
        return false
    }
}