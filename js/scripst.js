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
    pergunta.setAttribute('aria-expanded', 'ativa')
}

function eventoPerguntas(pergunta) {
    pergunta.addEventListener('click',ativarPergunta)
}

perguntas.forEach(eventoPerguntas)