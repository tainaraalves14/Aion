const inpCoClass = document.querySelector('.select-modal-coclass');
const labelCoClass = document.querySelector('#label-modal-coclass')
const dropDownCoClass = document.querySelector('.dropdown-select-coclass');
const blurDropCoClass = document.querySelector('.modal-container-coclass')

const inpPeClass = document.querySelector('.select-modal-peclass');
const labelPeClass = document.querySelector('#label-modal-peclass')
const dropDownPeClass = document.querySelector('.dropdown-select-peclass');

const ActiveDropDownClassCoClass = 'dropdown-show-coclass';
const ActiveDropDownClassPeClass = 'dropdown-show-peclass';

const closeDropDownCoClass = () => {
    dropDownCoClass.classList.remove(ActiveDropDownClassCoClass);
    inpCoClass.blur()
}
const openDropDownCoClass = () => {
    dropDownCoClass.classList.add(ActiveDropDownClassCoClass);
    inpCoClass.blur()
}

const closeDropDownPeClass = () => {
    dropDownPeClass.classList.remove(ActiveDropDownClassPeClass);
    inpPeClass.blur()
}
const openDropDownPeClass = () => {
    dropDownPeClass.classList.add(ActiveDropDownClassPeClass);
    inpPeClass.blur()
}

inpCoClass.addEventListener('focus', () => {
    dropDownCoClass.classList.contains(ActiveDropDownClassCoClass) ? closeDropDownCoClass() : openDropDownCoClass()
})

inpPeClass.addEventListener('focus', () => {
    dropDownPeClass.classList.contains(ActiveDropDownClassPeClass) ? closeDropDownPeClass() : openDropDownPeClass()
})

blurDropCoClass.addEventListener('mousedown', (event) => {
    if (blurDropCoClass.contains(event.target) && !inpCoClass.contains(event.target)
    && !labelCoClass.contains(event.target))
    closeDropDownCoClass()
})

blurDropCoClass.addEventListener('mousedown', (event) => {
    if (blurDropCoClass.contains(event.target) && !inpPeClass.contains(event.target)
    && !labelPeClass.contains(event.target))
    closeDropDownPeClass()
})

// Select Box

let itemsCoClass = ''

function selectCoClass(id)
{
    const nameItemCoClass = document.querySelector(`#items-coclass-${id}`).innerHTML

    itemsCoClass = nameItemCoClass

    document.querySelector('.select-modal-coclass').value = itemsCoClass;
}

let itemsPeClass = ''

function selectPeClass(id)
{
    const nameItemPeClass = document.querySelector(`#items-peclass-${id}`).innerHTML

    itemsPeClass = nameItemPeClass

    document.querySelector('.select-modal-peclass').value = itemsPeClass;
}