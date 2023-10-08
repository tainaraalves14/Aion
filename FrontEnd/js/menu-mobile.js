const btnMobile = document.getElementById('menu-btn')

function toggleMenu() {
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu)