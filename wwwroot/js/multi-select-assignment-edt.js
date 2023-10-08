const inpTeAssignEdt = document.querySelector('.select-modal-teassignEdt');
const labelTeAssignEdt = document.querySelector('#label-modal-teassignEdt')
const dropDownTeAssignEdt = document.querySelector('.dropdown-select-teassignEdt');
const blurDropTeAssignEdt = document.querySelector('.modal-container-teassignEdt')

const inpGridAssignEdt = document.querySelector('.select-modal-gridassignEdt');
const labelGridAssignEdt = document.querySelector('#label-modal-gridassignEdt')
const dropDownGridAssignEdt = document.querySelector('.dropdown-select-gridassignEdt');

const inpClassAssignEdt = document.querySelector('.select-modal-classassignEdt');
const labelClassAssignEdt = document.querySelector('#label-modal-classassignEdt')
const dropDownClassAssignEdt = document.querySelector('.dropdown-select-classassignEdt');

const ActiveDropDownClassTeAssignEdt = 'dropdown-show-teassignEdt';
const ActiveDropDownClassGridAssignEdt = 'dropdown-show-gridassignEdt';
const ActiveDropDownClassClassAssignEdt = 'dropdown-show-classassignEdt';

const closeDropDownTeAssignEdt = () => {
    dropDownTeAssignEdt.classList.remove(ActiveDropDownClassTeAssignEdt);
    inpTeAssignEdt.blur()
}
const openDropDownTeAssignEdt = () => {
    dropDownTeAssignEdt.classList.add(ActiveDropDownClassTeAssignEdt);
    inpTeAssignEdt.blur()
}

const closeDropDownGridAssignEdt = () => {
    dropDownGridAssignEdt.classList.remove(ActiveDropDownClassGridAssignEdt);
    inpGridAssignEdt.blur()
}
const openDropDownGridAssignEdt = () => {
    dropDownGridAssignEdt.classList.add(ActiveDropDownClassGridAssignEdt);
    inpGridAssignEdt.blur()
}

const closeDropDownClassAssignEdt = () => {
    dropDownClassAssignEdt.classList.remove(ActiveDropDownClassClassAssignEdt);
    inpClassAssignEdt.blur()
}
const openDropDownClassAssignEdt = () => {
    dropDownClassAssignEdt.classList.add(ActiveDropDownClassClassAssignEdt);
    inpClassAssignEdt.blur()
}

inpTeAssignEdt.addEventListener('focus', () => {
    dropDownTeAssignEdt.classList.contains(ActiveDropDownClassTeAssignEdt) ? closeDropDownTeAssignEdt() : openDropDownTeAssignEdt()
})

inpGridAssignEdt.addEventListener('focus', () => {
    dropDownGridAssignEdt.classList.contains(ActiveDropDownClassGridAssignEdt) ? closeDropDownGridAssignEdt() : openDropDownGridAssignEdt()
})

inpClassAssignEdt.addEventListener('focus', () => {
    dropDownClassAssignEdt.classList.contains(ActiveDropDownClassClassAssignEdt) ? closeDropDownClassAssignEdt() : openDropDownClassAssignEdt()
})

blurDropTeAssignEdt.addEventListener('mousedown', (event) => {
    if (blurDropTeAssignEdt.contains(event.target) && !inpTeAssignEdt.contains(event.target)
    && !labelTeAssignEdt.contains(event.target))
    closeDropDownTeAssignEdt()
})

blurDropTeAssignEdt.addEventListener('mousedown', (event) => {
    if (blurDropTeAssignEdt.contains(event.target) && !inpGridAssignEdt.contains(event.target)
    && !labelGridAssignEdt.contains(event.target))
    closeDropDownGridAssignEdt()
})

blurDropTeAssignEdt.addEventListener('mousedown', (event) => {
    if (blurDropTeAssignEdt.contains(event.target) && !inpClassAssignEdt.contains(event.target)
    && !labelClassAssignEdt.contains(event.target))
    closeDropDownClassAssignEdt()
})

// Select Box

let itemsTeAssignEdt = ''

function selectTeAssignEdt(id)
{
    const nameItemTeAssignEdt = document.querySelector(`#items-teassignEdt-${id}`).innerHTML

    itemsTeAssignEdt = nameItemTeAssignEdt

    document.querySelector('.select-modal-teassignEdt').value = itemsTeAssignEdt;
}

let itemsGridAssignEdt = ''

function selectGridAssignEdt(id)
{
    const nameItemGridAssignEdt = document.querySelector(`#items-gridassignEdt-${id}`).innerHTML

    itemsGridAssignEdt = nameItemGridAssignEdt

    document.querySelector('.select-modal-gridassignEdt').value = itemsGridAssignEdt;
}

let itemsClassAssignEdt = ''

function selectClassAssignEdt(id)
{
    const nameItemClassAssignEdt = document.querySelector(`#items-classassignEdt-${id}`).innerHTML

    itemsClassAssignEdt = nameItemClassAssignEdt

    document.querySelector('.select-modal-classassignEdt').value = itemsClassAssignEdt;
}


let inputCheckEdt = document.querySelector('[name="isMatrizInpEdt"]')
let inputSubmitEdt = document.querySelector('[name="isMatrizEdt"]')

inputCheckEdt.addEventListener('change', () => {
    inputCheckEdt.checked ? inputSubmitEdt.value = true : inputSubmitEdt.value = false
})