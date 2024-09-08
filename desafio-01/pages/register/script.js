const storage = localStorage

const redirToLogin = () => window.location.href = "../login/index.html"

const register = () => {
    const form = document.getElementById("form")
    const nome = document.getElementById("name").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const confirmPassword = document.getElementById("confirm-password").value

    form.addEventListener("submit", (e) => {
        e.preventDefault()

        const isValid = () => {
            if(validatePassword(password)){
                if(password === confirmPassword){
                    storage.setItem("nome", nome)
                    storage.setItem("email", email)
    
                    form.submit()
                } else {
                    alert("Passwords not matching.")
                }
            } else {
                alert("Invalid password. The password must contain at least 8 characters, including uppercase and lowercase letters, numbers and special characters.")
            }
        }

        if(isValid){
            window.location.href = "../profile/index.html"
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