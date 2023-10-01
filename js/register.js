function registerNewUser(event) {
    event.preventDefault()
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])(?:([0-9a-zA-Z$*&@#])(?!\1)){8,}$/
    const errorMessage = document.getElementById("error-message");

    const username = document.getElementById("register-name");
    const email = document.getElementById("register-email");
    const password = document.getElementById("register-password");
    const address = document.getElementById("register-address");

    if (regex.test(password.value) && email.value !== '' && username.value !== '') {
        // Autenticação bem-sucedida
        errorMessage.textContent = "Cadastro bem-sucedido!";
        errorMessage.style.color = "green";

        const userData = {
            email: email.value,
            password: password.value
        }

        const localUserString = localStorage.getItem("@divino-sabor: user-data")
        var localUsers = localUserString !== null ? JSON.parse(localUserString) : []

        localUsers.push(userData)

        localStorage.setItem("@divino-sabor: user-data", JSON.stringify(localUsers))
    } else {
        // Autenticação falhou
        errorMessage.textContent = "Usuário ou senha inválidos.";
        errorMessage.style.color = "red";
        username.value = ""
        password.value = ""
        email.value = ""
        address.value = ""
        

    }
}