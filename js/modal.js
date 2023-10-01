// Extrai o parâmetro JSON da URL
const urlParams = new URLSearchParams(window.location.search);
const jsonDataBolo = urlParams.get('bolo');
const kart = urlParams.get('kart')

// Analisa o JSON de volta para um objeto
const bolo = JSON.parse(decodeURIComponent(jsonDataBolo));

function addCake() {
    // Crie um elemento div para a classe "modalContainer"
    const modalContainer = document.createElement("div");
    modalContainer.className = "modalContainer";

    // Crie um elemento div para a classe "exit" e adicione um elemento p dentro dele
    const exitDiv = document.createElement("div");
    exitDiv.className = "exit";
    const exitP = document.createElement("p");
    exitP.textContent = "x";
    exitDiv.appendChild(exitP);

    // Crie um elemento div para a classe "photo" e adicione uma imagem dentro dele
    const photoDiv = document.createElement("div");
    photoDiv.className = "photo";
    const image = document.createElement("img");
    image.src = "../../assets/cake_Image.png";
    image.alt = "";
    photoDiv.appendChild(image);

    // Crie um elemento div para a classe "name" e adicione um elemento p dentro dele
    const nameDiv = document.createElement("div");
    nameDiv.className = "name";
    const nameP = document.createElement("p");
    nameP.textContent = bolo.titulo;
    nameDiv.appendChild(nameP);

    // Crie um elemento div para a classe "priceContainer"
    const priceContainerDiv = document.createElement("div");
    priceContainerDiv.className = "priceContainer";

    // Crie um elemento p para o preço
    const priceP = document.createElement("p");
    priceP.textContent = `R$ ${bolo.preco}`

    // Crie um elemento div para os botões "-" e "+"
    const buttonsDiv = document.createElement("div");
    buttonsDiv.className = "buttons";
    const minusButton = document.createElement("button");
    minusButton.textContent = "-";
    const plusButton = document.createElement("button");
    plusButton.textContent = "+";

    // Crie um input para o valor
    const priceInput = document.createElement("input");
    priceInput.setAttribute("maxlength", "2");
    priceInput.setAttribute("type", "number");
    priceInput.value = "1"; // Defina o valor inicial aqui
    var priceValue = bolo.preco

    // Event listener para o botão "-"
    minusButton.addEventListener("click", () => {
        const currentValue = parseInt(priceInput.value, 10);
        if (currentValue > 1) {
            priceInput.value = currentValue - 1;
            priceValue = priceValue - 26.90; // Subtrai o valor do preço
            priceP.textContent = `R$ ${priceValue.toFixed(2)}`; // Atualiza o texto do preço
        }
    });

    // Event listener para o botão "+"
    plusButton.addEventListener("click", () => {
        const currentValue = parseInt(priceInput.value, 10);
        priceInput.value = currentValue + 1;
        priceValue = priceValue + 26.90; // Adiciona o valor do preço
        priceP.textContent = `R$ ${priceValue.toFixed(2)}`; // Atualiza o texto do preço
    });

    priceContainerDiv.appendChild(priceP);
    buttonsDiv.appendChild(minusButton);
    buttonsDiv.appendChild(priceInput);
    buttonsDiv.appendChild(plusButton);
    priceContainerDiv.appendChild(buttonsDiv);

    // Crie um botão com a classe "confirmButton"
    const confirmButton = document.createElement("button");
    confirmButton.className = "confirmButton";
    confirmButton.textContent = "Confirmar";
    confirmButton.addEventListener('click', () => {
        var authData = JSON.parse(localStorage.getItem('@divino-sabor: Authenticated'))

        const addedBolo = {
            titulo: bolo.titulo,
            preco: bolo.preco,
        }
        authData.cart.push(addedBolo)

        localStorage.setItem('@divino-sabor: Authenticated', JSON.stringify(authData))
        window.location.href = '/pages/home'
    })

    // Adicione todos os elementos criados ao "modalContainer"
    modalContainer.appendChild(exitDiv);
    modalContainer.appendChild(photoDiv);
    modalContainer.appendChild(nameDiv);
    modalContainer.appendChild(priceContainerDiv);
    modalContainer.appendChild(confirmButton);

    // Adicione o "modalContainer" ao documento (à sua página)
    document.body.appendChild(modalContainer);
}

function loadPrice() {
    const stored = JSON.parse(localStorage.getItem("@divino-sabor: Authenticated"))
    console.log('stored', stored);
    const items = stored.cart


    var total = 0
    items.map((bolo) => {
        total += bolo.preco
    })
    return total
}

function finishOrder() {
    // Crie um elemento div para a classe "modalContainer"
    const modalContainer = document.createElement("div");
    modalContainer.className = "modalContainer";

    // Crie um elemento div para a classe "exit" e adicione um elemento p dentro dele
    const exitDiv = document.createElement("div");
    exitDiv.className = "exit";
    const exitP = document.createElement("p");
    exitP.textContent = "x";
    exitDiv.appendChild(exitP);

    // Crie um elemento div para a classe "cart" e adicione um elemento p dentro dele
    const cartDiv = document.createElement("div");
    cartDiv.className = "cart";
    const cartP = document.createElement("p");
    cartP.textContent = "Carrinho";
    cartDiv.appendChild(cartP);


    const stored = JSON.parse(localStorage.getItem("@divino-sabor: Authenticated"))
    console.log('stored', stored);
    stored.cart.map((bolo) => {
        const requestsContainerDiv = document.createElement("div");
        requestsContainerDiv.className = "requestsContainer";
    
        // Crie um elemento div para a classe "requests" e adicione elementos p dentro dele
        const requestsDiv = document.createElement("div");
        requestsDiv.className = "requests";
        const request1P = document.createElement("p");
        request1P.textContent = "bolo de milho";
        const request2P = document.createElement("p");
        request2P.textContent = "2kg";
        const request3P = document.createElement("p");
        request3P.textContent = "R$ 100,00";
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "excluir";
    
        // Adicione event listener para o botão "excluir"
        deleteButton.addEventListener("click", () => {
            // Remova o elemento "requestsDiv" quando o botão "excluir" for clicado
            requestsContainerDiv.removeChild(requestsDiv);
        });
    
        requestsDiv.appendChild(request1P);
        requestsDiv.appendChild(request2P);
        requestsDiv.appendChild(request3P);
        requestsDiv.appendChild(deleteButton);

    })

    // Crie um elemento div para a classe "requestsContainer"



    // Crie um elemento div para a classe "total" e adicione um elemento p dentro dele
    const totalDiv = document.createElement("div");
    totalDiv.className = "total";
    const totalP = document.createElement("p");
    totalP.textContent = `Total: R$ ${loadPrice()}`;
    totalDiv.appendChild(totalP);

    // Crie um elemento div para a classe "buttonsContainer" e adicione dois botões dentro dele
    const buttonsContainerDiv = document.createElement("div");
    buttonsContainerDiv.className = "buttonsContainer";
    const clearButton = document.createElement("button");
    clearButton.textContent = "Limpar";
    const confirmButton = document.createElement("button");
    confirmButton.textContent = "Confirmar";

    buttonsContainerDiv.appendChild(clearButton);
    buttonsContainerDiv.appendChild(confirmButton);

    // Adicione todos os elementos criados ao "modalContainer"
    modalContainer.appendChild(exitDiv);
    modalContainer.appendChild(cartDiv);
    requestsContainerDiv.appendChild(requestsDiv);
    modalContainer.appendChild(requestsContainerDiv);
    modalContainer.appendChild(totalDiv);
    modalContainer.appendChild(buttonsContainerDiv);

    // Adicione o "modalContainer" ao documento (à sua página)
    document.body.appendChild(modalContainer);


}

if (kart) {
    
    finishOrder()
} else {
    addCake(bolo)
}