const inpTeAssign = document.querySelector('.select-modal-teassign');
const labelTeAssign = document.querySelector('#label-modal-teassign')
const dropDownTeAssign = document.querySelector('.dropdown-select-teassign');
const blurDropTeAssign = document.querySelector('.modal-container-teassign')

const inpGridAssign = document.querySelector('.select-modal-gridassign');
const labelGridAssign = document.querySelector('#label-modal-gridassign')
const dropDownGridAssign = document.querySelector('.dropdown-select-gridassign');

const inpClassAssign = document.querySelector('.select-modal-classassign');
const labelClassAssign = document.querySelector('#label-modal-classassign')
const dropDownClassAssign = document.querySelector('.dropdown-select-classassign');

const ActiveDropDownClassTeAssign = 'dropdown-show-teassign';
const ActiveDropDownClassGridAssign = 'dropdown-show-gridassign';
const ActiveDropDownClassClassAssign = 'dropdown-show-classassign';

const closeDropDownTeAssign = () => {
    dropDownTeAssign.classList.remove(ActiveDropDownClassTeAssign);
    inpTeAssign.blur()
}
const openDropDownTeAssign = () => {
    dropDownTeAssign.classList.add(ActiveDropDownClassTeAssign);
    inpTeAssign.blur()
}

const closeDropDownGridAssign = () => {
    dropDownGridAssign.classList.remove(ActiveDropDownClassGridAssign);
    inpGridAssign.blur()
}
const openDropDownGridAssign = () => {
    dropDownGridAssign.classList.add(ActiveDropDownClassGridAssign);
    inpGridAssign.blur()
}

const closeDropDownClassAssign = () => {
    dropDownClassAssign.classList.remove(ActiveDropDownClassClassAssign);
    inpClassAssign.blur()
}
const openDropDownClassAssign = () => {
    dropDownClassAssign.classList.add(ActiveDropDownClassClassAssign);
    inpClassAssign.blur()
}

inpTeAssign.addEventListener('focus', () => {
    dropDownTeAssign.classList.contains(ActiveDropDownClassTeAssign) ? closeDropDownTeAssign() : openDropDownTeAssign()
})

inpGridAssign.addEventListener('focus', () => {
    dropDownGridAssign.classList.contains(ActiveDropDownClassGridAssign) ? closeDropDownGridAssign() : openDropDownGridAssign()
})

inpClassAssign.addEventListener('focus', () => {
    dropDownClassAssign.classList.contains(ActiveDropDownClassClassAssign) ? closeDropDownClassAssign() : openDropDownClassAssign()
})

blurDropTeAssign.addEventListener('mousedown', (event) => {
    if (blurDropTeAssign.contains(event.target) && !inpTeAssign.contains(event.target)
    && !labelTeAssign.contains(event.target))
    closeDropDownTeAssign()
})

blurDropTeAssign.addEventListener('mousedown', (event) => {
    if (blurDropTeAssign.contains(event.target) && !inpGridAssign.contains(event.target)
    && !labelGridAssign.contains(event.target))
    closeDropDownGridAssign()
})

blurDropTeAssign.addEventListener('mousedown', (event) => {
    if (blurDropTeAssign.contains(event.target) && !inpClassAssign.contains(event.target)
    && !labelClassAssign.contains(event.target))
    closeDropDownClassAssign()
})

// Select Box

let itemsTeAssign = ''

function selectTeAssign(id)
{
    const nameItemTeAssign = document.querySelector(`#items-teassign-${id}`).innerHTML

    itemsTeAssign = nameItemTeAssign

    document.querySelector('.select-modal-teassign').value = itemsTeAssign;
}

let itemsGridAssign = ''

function selectGridAssign(id)
{
    const nameItemGridAssign = document.querySelector(`#items-gridassign-${id}`).innerHTML

    itemsGridAssign = nameItemGridAssign

    document.querySelector('.select-modal-gridassign').value = itemsGridAssign;
}

let itemsClassAssign = ''

function selectClassAssign(id)
{
    const nameItemClassAssign = document.querySelector(`#items-classassign-${id}`).innerHTML

    itemsClassAssign = nameItemClassAssign

    document.querySelector('.select-modal-classassign').value = itemsClassAssign;
}

// Convert checkbox in a bool value for controller

let inputCheck = document.querySelector('[name="isMatrizInp"]')
let inputSubmit = document.querySelector('[name="isMatriz"]')

inputCheck.addEventListener('change', () => {
    inputCheck.checked ? inputSubmit.value = true : inputSubmit.value = false
})