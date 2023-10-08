const inpGrGridsubEdt = document.querySelector('.select-modal-grgridsubEdt');
const labelGrGridsubEdt = document.querySelector('#label-modal-grgridsubEdt')
const dropDownGrGridsubEdt = document.querySelector('.dropdown-select-grgridsubEdt');
const blurDropEdt = document.querySelector('.modal-container-grgridsubEdt')

const inpSGridsubEdt = document.querySelector('.select-modal-sgridsubEdt');
const labelSGridsubEdt = document.querySelector('#label-modal-sgridsubEdt')
const dropDownSGridsubEdt = document.querySelector('.dropdown-select-sgridsubEdt');

const ActiveDropDownClassGrGridsubEdt = 'dropdown-show-grgridsubEdt';
const ActiveDropDownClassSGridsubEdt = 'dropdown-show-sgridsubEdt';

const closeDropDownGrGridsubEdt = () => {
    dropDownGrGridsubEdt.classList.remove(ActiveDropDownClassGrGridsubEdt);
    inpGrGridsubEdt.blur()
}
const openDropDownGrGridsubEdt = () => {
    dropDownGrGridsubEdt.classList.add(ActiveDropDownClassGrGridsubEdt);
    inpGrGridsubEdt.blur()
}

const closeDropDownSGridsubEdt = () => {
    dropDownSGridsubEdt.classList.remove(ActiveDropDownClassSGridsubEdt);
    inpSGridsubEdt.blur()
}
const openDropDownSGridsubEdt = () => {
    dropDownSGridsubEdt.classList.add(ActiveDropDownClassSGridsubEdt);
    inpSGridsubEdt.blur()
}

inpGrGridsubEdt.addEventListener('focus', () => {
    dropDownGrGridsubEdt.classList.contains(ActiveDropDownClassGrGridsubEdt) ? closeDropDownGrGridsubEdt() : openDropDownGrGridsubEdt()
})

inpSGridsubEdt.addEventListener('focus', () => {
    dropDownSGridsubEdt.classList.contains(ActiveDropDownClassSGridsubEdt) ? closeDropDownSGridsubEdt() : openDropDownSGridsubEdt()
})

blurDropEdt.addEventListener('mousedown', (event) => {
    if (blurDropEdt.contains(event.target) && !inpGrGridsubEdt.contains(event.target)
    && !labelGrGridsubEdt.contains(event.target))
    closeDropDownGrGridsubEdt()
})

blurDropEdt.addEventListener('mousedown', (event) => {
    if (blurDropEdt.contains(event.target) && !inpSGridsubEdt.contains(event.target)
    && !labelSGridsubEdt.contains(event.target))
    closeDropDownSGridsubEdt()
})

// Select Box

let itemsGrGridsubEdt = ''

function selectGrGridsubEdt(id)
{
    const nameItemGrGridsubEdt = document.querySelector(`#items-grgridsubEdt-${id}`).innerHTML

    itemsGrGridsubEdt = nameItemGrGridsubEdt

    document.querySelector('.select-modal-grgridsubEdt').value = itemsGrGridsubEdt;
}

let itemsSGridsubEdt = ''

function selectSGridsubEdt(id)
{
    const nameItemSGridsubEdt = document.querySelector(`#items-sgridsubEdt-${id}`).innerHTML

    itemsSGridsubEdt = nameItemSGridsubEdt

    document.querySelector('.select-modal-sgridsubEdt').value = itemsSGridsubEdt;
}

// Convert checkbox in a bool value for controller

let inputCheckEdt = document.querySelector('[name="hasDivisionInpEdt"]')
let inputSubmitEdt = document.querySelector('[name="hasDivisionEdt"]')

inputCheckEdt.addEventListener('change', () => {
    inputCheckEdt.checked ? inputSubmitEdt.value = true : inputSubmitEdt.value = false
})