const linkInterno = document.querySelector('[data-scroll="suave"] a[href="#topo"]')

function scrollTop() {
    scrollTo(0,0)
}

linkInterno.addEventListener('click', scrollTop)