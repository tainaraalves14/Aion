const inp = document.querySelector('.select-modal-reg');
const dropDown = document.querySelector('.dropdown-select-reg');
const blurDrop = document.querySelector('.section-main')

const ActiveDropDownClass = 'dropdown-show-reg';

const closeDropDown = () => {
    dropDown.classList.remove(ActiveDropDownClass);
    inp.blur()
}
const openDropDown = () => {
    dropDown.classList.add(ActiveDropDownClass);
    inp.blur()
}

inp.addEventListener('focus', () => {
    dropDown.classList.contains(ActiveDropDownClass) ? closeDropDown() : openDropDown()
})

blurDrop.addEventListener('mousedown', (event) => {
    if (blurDrop.contains(event.target) && !inp.contains(event.target)
    && !dropDown.contains(event.target))
    closeDropDown()
})

// Select Box

let itemsWeek = []

function selectDay(day)
{
    let pos = itemsWeek.indexOf(day)

    if (pos == -1)
    {
        itemsWeek.push(day)
    }
    else
    {
        itemsWeek.splice(pos, 1)
    }

    document.querySelector('.select-modal-reg').value = itemsWeek;
}

// Limpar seleção

function deleteItems()
{
    itemsWeek.splice(0, itemsWeek.length)
}