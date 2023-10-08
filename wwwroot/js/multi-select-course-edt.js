const inpTypeCoEdt = document.querySelector('.select-modal-typecoEdt');
const labelTypeCoEdt = document.querySelector('#label-modal-typecoEdt')
const dropDownTypeCoEdt = document.querySelector('.dropdown-select-typecoEdt');
const blurDropTypeCoEdt = document.querySelector('.modal-container-typecoEdt')

const ActiveDropDownClassTypeCoEdt = 'dropdown-show-typecoEdt';

const closeDropDownTypeCoEdt = () => {
    dropDownTypeCoEdt.classList.remove(ActiveDropDownClassTypeCoEdt);
    inpTypeCoEdt.blur()
}
const openDropDownTypeCoEdt = () => {
    dropDownTypeCoEdt.classList.add(ActiveDropDownClassTypeCoEdt);
    inpTypeCoEdt.blur()
}

inpTypeCoEdt.addEventListener('focus', () => {
    dropDownTypeCoEdt.classList.contains(ActiveDropDownClassTypeCoEdt) ? closeDropDownTypeCoEdt() : openDropDownTypeCoEdt()
})

blurDropTypeCoEdt.addEventListener('mousedown', (event) => {
    if (blurDropTypeCoEdt.contains(event.target) && !inpTypeCoEdt.contains(event.target)
    && !labelTypeCoEdt.contains(event.target))
    closeDropDownTypeCoEdt()
})

// Select Box

let itemsTypeCoEdt = ''

function selectTypeCoEdt(id)
{
    const nameItemTypeCoEdt = document.querySelector(`#items-typecoEdt-${id}`).innerHTML

    itemsTypeCoEdt = nameItemTypeCoEdt

    document.querySelector('.select-modal-typecoEdt').value = itemsTypeCoEdt;
}