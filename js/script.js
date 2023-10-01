document.addEventListener('DOMContentLoaded', function() {
    smoothScroll();

});

function setupLoginForm() {
    const loginForm = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "usuario" && password === "senha") {
        // Autenticação bem-sucedida
        errorMessage.textContent = "Login bem-sucedido!";
        errorMessage.style.color = "green";
        // Redirecionar ou executar ação desejada após o login
    } else {
        // Autenticação falhou
        errorMessage.textContent = "Usuário ou senha inválidos.";
        errorMessage.style.color = "red";
    }
}

// document.getElementById('user-icon').addEventListener('click', redirect)

function smoothScroll() {
    // Selecione todos os links <a> com href começando com #
    console.log('chamou')
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        // Adicione um evento de clique para cada link
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Evite o comportamento de rolagem padrão

            const targetId = this.getAttribute('href').substring(1); // Obtenha o ID do alvo (removendo o #)
            const targetElement = document.getElementById(targetId); // Encontre o elemento de destino

            if (targetElement) {
                // Role suavemente para o elemento alvo
                const headerHeight = 128
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight, // Altura do elemento alvo em relação ao topo da página
                    behavior: 'smooth' // Rola suavemente
                });
            }
        });
    });
}

function redirect() {
    window.location.href = '../login'
}