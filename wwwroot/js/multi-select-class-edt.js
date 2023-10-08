const inpCoClassEdt = document.querySelector('.select-modal-coclassEdt');
const labelCoClassEdt = document.querySelector('#label-modal-coclassEdt')
const dropDownCoClassEdt = document.querySelector('.dropdown-select-coclassEdt');
const blurDropCoClassEdt = document.querySelector('.modal-container-coclassEdt')

const inpPeClassEdt = document.querySelector('.select-modal-peclassEdt');
const labelPeClassEdt = document.querySelector('#label-modal-peclassEdt')
const dropDownPeClassEdt = document.querySelector('.dropdown-select-peclassEdt');

const ActiveDropDownClassCoClassEdt = 'dropdown-show-coclassEdt';
const ActiveDropDownClassPeClassEdt = 'dropdown-show-peclassEdt';

const closeDropDownCoClassEdt = () => {
    dropDownCoClassEdt.classList.remove(ActiveDropDownClassCoClassEdt);
    inpCoClassEdt.blur()
}
const openDropDownCoClassEdt = () => {
    dropDownCoClassEdt.classList.add(ActiveDropDownClassCoClassEdt);
    inpCoClassEdt.blur()
}

const closeDropDownPeClassEdt = () => {
    dropDownPeClassEdt.classList.remove(ActiveDropDownClassPeClassEdt);
    inpPeClassEdt.blur()
}
const openDropDownPeClassEdt = () => {
    dropDownPeClassEdt.classList.add(ActiveDropDownClassPeClassEdt);
    inpPeClassEdt.blur()
}

inpCoClassEdt.addEventListener('focus', () => {
    dropDownCoClassEdt.classList.contains(ActiveDropDownClassCoClassEdt) ? closeDropDownCoClassEdt() : openDropDownCoClassEdt()
})

inpPeClassEdt.addEventListener('focus', () => {
    dropDownPeClassEdt.classList.contains(ActiveDropDownClassPeClassEdt) ? closeDropDownPeClassEdt() : openDropDownPeClassEdt()
})

blurDropCoClassEdt.addEventListener('mousedown', (event) => {
    if (blurDropCoClassEdt.contains(event.target) && !inpCoClassEdt.contains(event.target)
    && !labelCoClassEdt.contains(event.target))
    closeDropDownCoClassEdt()
})

blurDropCoClassEdt.addEventListener('mousedown', (event) => {
    if (blurDropCoClassEdt.contains(event.target) && !inpPeClassEdt.contains(event.target)
    && !labelPeClassEdt.contains(event.target))
    closeDropDownPeClassEdt()
})

// Select Box

let itemsCoClassEdt = ''

function selectCoClassEdt(id)
{
    const nameItemCoClassEdt = document.querySelector(`#items-coclassEdt-${id}`).innerHTML

    itemsCoClassEdt = nameItemCoClassEdt

    document.querySelector('.select-modal-coclassEdt').value = itemsCoClassEdt;
}

let itemsPeClassEdt = ''

function selectPeClassEdt(id)
{
    const nameItemPeClassEdt = document.querySelector(`#items-peclassEdt-${id}`).innerHTML

    itemsPeClassEdt = nameItemPeClassEdt

    document.querySelector('.select-modal-peclassEdt').value = itemsPeClassEdt;
}