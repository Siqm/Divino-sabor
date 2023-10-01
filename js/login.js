function setupLoginForm() {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])(?:([0-9a-zA-Z$*&@#])(?!\1)){8,}$/
    const errorMessage = document.getElementById("error-message");
    var loginSucced = false

    const email = document.getElementById("username");
    const password = document.getElementById("password");

    const localUsers = JSON.parse(localStorage.getItem("@divino-sabor: user-data"))
    console.log(localUsers)

    localUsers.map((user) => {
        console.log('user', user);
        if (user.email === email.value && user.password === password.value) {
            errorMessage.textContent = "Login bem-sucedido!";
            errorMessage.style.color = "green";
            loginSucced = true
        }
    })

    if (loginSucced) {
        errorMessage.textContent = "Usuário ou senha inválidos.";
        errorMessage.style.color = "red";
        username.value = ""
        password.value = ""
    } else {
        setTimeout(() => {
            window.location.href = '../home'
        }, 5000);
        return
    }
}

function openRegisterPage() {
    window.location.href = '../register'
  }
  