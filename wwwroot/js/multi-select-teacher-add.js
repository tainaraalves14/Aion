const inp = document.querySelector('.select-modal');
const label = document.querySelector('#label-modal')
const dropDown = document.querySelector('.dropdown-select');
const blurDrop = document.querySelector('.modal-container')

const ActiveDropDownClass = 'dropdown-show';

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
    && !label.contains(event.target) && !dropDown.contains(event.target))
    closeDropDown()
})

// Select Box

let items = []

function select(id)
{
    const nameItem = document.querySelector(`#items-${id}`).innerHTML
    let pos = items.indexOf(nameItem)

    if (pos == -1)
    {
        items.push(nameItem)
    }
    else
    {
        items.splice(pos, 1)
    }

    document.querySelector('.select-modal').value = items;
}

// Limpar seleção

function deleteItems()
{
    items.splice(0, items.length)
}