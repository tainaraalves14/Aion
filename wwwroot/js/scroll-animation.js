const scrollAnima = document.querySelector('[data-anima="scroll"]')

const metadeWindow = window.innerHeight * 1.7

function animarScroll() {
    const topoItem = scrollAnima.getBoundingClientRect().top

    const itemVisivel = topoItem - metadeWindow < 0

    if (itemVisivel) 
    {
        scrollAnima.classList.add('show-button-top')
    }
    else
    {
        scrollAnima.classList.remove('show-button-top')
    }
}

addEventListener('scroll', animarScroll)