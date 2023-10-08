const inpGrGridsub = document.querySelector('.select-modal-grgridsub');
const labelGrGridsub = document.querySelector('#label-modal-grgridsub')
const dropDownGrGridsub = document.querySelector('.dropdown-select-grgridsub');
const blurDropGrGridsub = document.querySelector('.modal-container-grgridsub')

const inpSGridsub = document.querySelector('.select-modal-sgridsub');
const labelSGridsub = document.querySelector('#label-modal-sgridsub')
const dropDownSGridsub = document.querySelector('.dropdown-select-sgridsub');

const ActiveDropDownClassGrGridsub = 'dropdown-show-grgridsub';
const ActiveDropDownClassSGridsub = 'dropdown-show-sgridsub';

const closeDropDownGrGridsub = () => {
    dropDownGrGridsub.classList.remove(ActiveDropDownClassGrGridsub);
    inpGrGridsub.blur()
}
const openDropDownGrGridsub = () => {
    dropDownGrGridsub.classList.add(ActiveDropDownClassGrGridsub);
    inpGrGridsub.blur()
}

const closeDropDownSGridsub = () => {
    dropDownSGridsub.classList.remove(ActiveDropDownClassSGridsub);
    inpSGridsub.blur()
}
const openDropDownSGridsub = () => {
    dropDownSGridsub.classList.add(ActiveDropDownClassSGridsub);
    inpSGridsub.blur()
}

inpGrGridsub.addEventListener('focus', () => {
    dropDownGrGridsub.classList.contains(ActiveDropDownClassGrGridsub) ? closeDropDownGrGridsub() : openDropDownGrGridsub()
})

inpSGridsub.addEventListener('focus', () => {
    dropDownSGridsub.classList.contains(ActiveDropDownClassSGridsub) ? closeDropDownSGridsub() : openDropDownSGridsub()
})

blurDropGrGridsub.addEventListener('mousedown', (event) => {
    if (blurDropGrGridsub.contains(event.target) && !inpGrGridsub.contains(event.target)
    && !labelGrGridsub.contains(event.target))
    closeDropDownGrGridsub()
})

blurDropGrGridsub.addEventListener('mousedown', (event) => {
    if (blurDropGrGridsub.contains(event.target) && !inpSGridsub.contains(event.target)
    && !labelSGridsub.contains(event.target))
    closeDropDownSGridsub()
})

// Select Box

let itemsGrGridsub = ''

function selectGrGridsub(id)
{
    const nameItemGrGridsub = document.querySelector(`#items-grgridsub-${id}`).innerHTML

    itemsGrGridsub = nameItemGrGridsub

    document.querySelector('.select-modal-grgridsub').value = itemsGrGridsub;
}

let itemsSGridsub = ''

function selectSGridsub(id)
{
    const nameItemSGridsub = document.querySelector(`#items-sgridsub-${id}`).innerHTML

    itemsSGridsub = nameItemSGridsub

    document.querySelector('.select-modal-sgridsub').value = itemsSGridsub;
}

// Convert checkbox in a bool value for controller

let inputCheck = document.querySelector('[name="hasDivisionInp"]')
let inputSubmit = document.querySelector('[name="hasDivision"]')

inputCheck.addEventListener('change', () => {
    inputCheck.checked ? inputSubmit.value = true : inputSubmit.value = false
})