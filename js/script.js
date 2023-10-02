
const logged = localStorage.getItem('@divino-sabor: Authenticated')

document.addEventListener('DOMContentLoaded', function () {
  smoothScroll();

});

const logo = document.getElementsByClassName('logoContainer')[0]
logo.addEventListener('click', () => {
  window.location.href = '../home'
})

const carrinho = document.getElementById('carrinho')

carrinho.addEventListener('click', () => {
  if (!!logged) {
    window.location.href = `../modal/index.html?kart=true`
  } else {
    alert('Você precisa fazer login primeiro')
  }
})



function smoothScroll() {
  // Selecione todos os links <a> com href começando com #
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
          behavior: 'smooth'
        });
      }
    });
  });
}

function loadCategories() {
  const mainFlavors = document.getElementsByClassName('mainFlavors')

  const availableCategories = categories

  availableCategories.map((category) => {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('cardContainer');

    const img = document.createElement('img');
    img.src = `../../assets/categories/${category.img}`;
    img.alt = category.title;

    const cardName = document.createElement('div');
    cardName.classList.add('cardName');
    cardName.innerHTML = `<p>${category.title}</p>`;

    cardContainer.appendChild(img);
    cardContainer.appendChild(cardName);

    mainFlavors[0].appendChild(cardContainer)
  })
}

loadCategories()

function loadSales() {
  const offers = document.getElementsByClassName('offers')

  for (var i = 0; i < 4; i++) {
    const cardOffers = document.createElement('div')
    cardOffers.classList.add('cardOffers')

    const cakeId = document.createElement('h1')
    cakeId.innerHTML = `#${i + 1}`

    const img = document.createElement('img')
    img.src = `../../assets/cake_image.png`
    img.alt = 'Foto de um bolo'

    const paragraph = document.createElement('p')
    paragraph.innerHTML = `${bolos[i].titulo}`

    const button = document.createElement('button')
    button.innerHTML = "Peça agora"

    const parsedBolo = JSON.stringify(bolos[i])
    button.addEventListener('click', () => {

      if (!!logged) {
        window.location.href = `../modal/index.html?bolo=${encodeURIComponent(parsedBolo)}`
      } else {
        alert("Você precisa fazer login primeiro")
      }

    })

    cardOffers.appendChild(cakeId)
    cardOffers.appendChild(img)
    cardOffers.appendChild(paragraph)
    cardOffers.appendChild(button)

    offers[0].appendChild(cardOffers)
  }

  for (var i = 4; i < bolos.length; i++) {
    const cardOffers = document.createElement('div')
    cardOffers.classList.add('cardOffers')

    const cakeId = document.createElement('h1')
    cakeId.innerHTML = `#${i + 1}`

    const img = document.createElement('img')
    img.src = `../../assets/cake_image.png`
    img.alt = 'Foto de um bolo'

    const paragraph = document.createElement('p')
    paragraph.innerHTML = `${bolos[i].titulo}`

    const button = document.createElement('button')
    button.innerHTML = "Peça agora"

    const parsedBolo = JSON.stringify(bolos[i])
    button.addEventListener('click', () => {

      if (!!logged) {
        window.location.href = `../modal/index.html?bolo=${encodeURIComponent(parsedBolo)}`
      } else {
        alert("Você precisa fazer login primeiro")
      }

    })

    cardOffers.appendChild(cakeId)
    cardOffers.appendChild(img)
    cardOffers.appendChild(paragraph)
    cardOffers.appendChild(button)

    offers[1].appendChild(cardOffers)
  }
}

loadSales()

function redirect() {
  window.location.href = '../login'
}

