const inpGridEdt = document.querySelector('.select-modal-gridEdt');
const labelGridEdt = document.querySelector('#label-modal-gridEdt')
const dropDownGridEdt = document.querySelector('.dropdown-select-gridEdt');
const blurDropGridEdt = document.querySelector('.modal-container-gridEdt')

const ActiveDropDownClassGridEdt = 'dropdown-show-gridEdt';

const closeDropDownGridEdt = () => {
    dropDownGridEdt.classList.remove(ActiveDropDownClassGridEdt);
    inpGridEdt.blur()
}
const openDropDownGridEdt = () => {
    dropDownGridEdt.classList.add(ActiveDropDownClassGridEdt);
    inpGridEdt.blur()
}

inpGridEdt.addEventListener('focus', () => {
    dropDownGridEdt.classList.contains(ActiveDropDownClassGridEdt) ? closeDropDownGridEdt() : openDropDownGridEdt()
})

blurDropGridEdt.addEventListener('mousedown', (event) => {
    if (blurDropGridEdt.contains(event.target) && !inpGridEdt.contains(event.target)
    && !labelGridEdt.contains(event.target))
    closeDropDownGridEdt()
})

// Select Box

let itemsGridEdt = ''

function selectGridEdt(id)
{
    const nameItemGridEdt = document.querySelector(`#items-gridEdt-${id}`).innerHTML

    itemsGridEdt = nameItemGridEdt

    document.querySelector('.select-modal-gridEdt').value = itemsGridEdt;
}