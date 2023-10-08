const controls = document.querySelectorAll('.control')
const controlLeft = document.querySelector('.arrow-left')
const controlRight = document.querySelector('.arrow-right')

let currentItem = 0;
const items = document.querySelectorAll('.grid-table')
const maxItems = items.length

if (maxItems == 1) controlRight.classList.add('arrow-hide')

controls.forEach(control => {
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains('arrow-left')
        
        isLeft ? currentItem -= 1 : currentItem += 1
        
        if (currentItem >= maxItems) currentItem = maxItems -1
        currentItem == maxItems - 1 ? controlRight.classList.add('arrow-hide') : controlRight.classList.remove('arrow-hide')
        
        if (currentItem < 0) currentItem = 0
        currentItem == 0 ? controlLeft.classList.add('arrow-hide') : controlLeft.classList.remove('arrow-hide')

        items.forEach(item =>
        item.classList.remove('current-grid-table'))
            items[currentItem].scrollIntoView({
                inline: "center",
                behavior: "smooth"
        })

        items[currentItem].classList.add('current-grid-table')
    })
})