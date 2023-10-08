const inpTypeCo = document.querySelector('.select-modal-typeco');
const labelTypeCo = document.querySelector('#label-modal-typeco')
const dropDownTypeCo = document.querySelector('.dropdown-select-typeco');
const blurDropTypeCo = document.querySelector('.modal-container-typeco')

const ActiveDropDownClassTypeCo = 'dropdown-show-typeco';

const closeDropDownTypeCo = () => {
    dropDownTypeCo.classList.remove(ActiveDropDownClassTypeCo);
    inpTypeCo.blur()
}
const openDropDownTypeCo = () => {
    dropDownTypeCo.classList.add(ActiveDropDownClassTypeCo);
    inpTypeCo.blur()
}

inpTypeCo.addEventListener('focus', () => {
    dropDownTypeCo.classList.contains(ActiveDropDownClassTypeCo) ? closeDropDownTypeCo() : openDropDownTypeCo()
})

blurDropTypeCo.addEventListener('mousedown', (event) => {
    if (blurDropTypeCo.contains(event.target) && !inpTypeCo.contains(event.target)
    && !labelTypeCo.contains(event.target))
    closeDropDownTypeCo()
})

// Select Box

let itemsTypeCo = ''

function selectTypeCo(id)
{
    const nameItemTypeCo = document.querySelector(`#items-typeco-${id}`).innerHTML

    itemsTypeCo = nameItemTypeCo

    document.querySelector('.select-modal-typeco').value = itemsTypeCo;
}