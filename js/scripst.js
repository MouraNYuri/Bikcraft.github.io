// Ativar links do  menu

const links = document.querySelectorAll('.header-menu a')

function ativarLinks(link) {
    const url = location.href
    const href = link.href

    if(url.includes(href)) {
        link.classList.add('ativo')
    }
}

links.forEach(ativarLinks)

// Ativar itens do orçamento

const paramentros = new URLSearchParams(location.search)

function ativarProduto(paramentro) {
    const elemento = document.getElementById(paramentro)
    if(elemento) {
        elemento.checked = true
    }
}

paramentros.forEach(ativarProduto)

// Perguntas frequentes

const perguntas = document.querySelectorAll('.perguntas button')

function ativarPergunta(event) {
    const pergunta = event.currentTarget
    const controls = pergunta.getAttribute('aria-controls')
    const resposta = document.getElementById(controls)

    resposta.classList.toggle('ativa')
    const ativa = resposta.classList.contains('ativa')
    console.log(ativa)
    pergunta.setAttribute('aria-expanded', ativa)
}

function eventoPerguntas(pergunta) {
    pergunta.addEventListener('click',ativarPergunta)
}

perguntas.forEach(eventoPerguntas)

// Galeria de imagens

const galeria = document.querySelectorAll(".bicicletas-img img")
const galeriaContainer = document.querySelector(".bicicletas-img")

function trocarImagem(event) {
    const img = event.currentTarget
    const media = matchMedia('(min-width:1000px)').matches
    if(media) {
        galeriaContainer.prepend(img)
    }
}

function eventosGaleria(img) {
    img.addEventListener('click',trocarImagem)
}

galeria.forEach(eventosGaleria)

// Animação

new SimpleAnime()