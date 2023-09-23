function carregarArquivo(arquivo, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", arquivo, true);
    xhr.onload = function () {
        if (xhr.status == 200) {
            callback(xhr.responseText);
            carregarEstilos(arquivo); // Carrega os estilos após carregar o HTML
        }
    };
    xhr.send();
}

function carregarEstilos(arquivo) {
    // Determine o caminho do arquivo CSS com base no caminho do arquivo HTML
    var caminhoCSS = arquivo.replace(".html", ".css");

    // Crie uma tag <link> para carregar o arquivo CSS
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = caminhoCSS;

    // Adicione a tag <link> ao <head> do documento
    document.head.appendChild(link);
}

function mostrarArquivos() {
    var headerPath = '../components/header/index.html';
    var mainPath = "../components/main/index.html";


    carregarArquivo(headerPath, function (headerHTML) {
        carregarArquivo(mainPath, function(mainHTML) {
            var conteudo = document.getElementById("conteudo");
            conteudo.innerHTML = headerHTML + mainHTML;
        })
    });
}

mostrarArquivos();
