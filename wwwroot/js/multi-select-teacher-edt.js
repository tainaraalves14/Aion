const inpEdt = document.querySelector('.select-modal-edt');
const labelEdt = document.querySelector('#label-modal-edt')
const dropDownEdt = document.querySelector('.dropdown-select-edt');
const blurDropEdt = document.querySelector('.modal-container-edt')

const ActiveDropDownClassEdt = 'dropdown-show-edt';

const closeDropDownEdt = () => {
    dropDownEdt.classList.remove(ActiveDropDownClassEdt);
    inpEdt.blur()
}
const openDropDownEdt = () => {
    dropDownEdt.classList.add(ActiveDropDownClassEdt);
    inpEdt.blur()
}

inpEdt.addEventListener('focus', () => {
    dropDownEdt.classList.contains(ActiveDropDownClassEdt) ? closeDropDownEdt() : openDropDownEdt()
})

blurDropEdt.addEventListener('mousedown', (event) => {
    if (blurDropEdt.contains(event.target) && !inpEdt.contains(event.target)
    && !labelEdt.contains(event.target) && !dropDownEdt.contains(event.target))
    closeDropDownEdt()
})

// Select Box

let itemsEdt = []

function selectEdt(id)
{
    const nameItemEdt = document.querySelector(`#items-edt-${id}`).innerHTML
    let posEdt = itemsEdt.indexOf(nameItemEdt)
    
    if (posEdt == -1)
    {
        itemsEdt.push(nameItemEdt)
    }
    else
    {
        itemsEdt.splice(posEdt, 1)
    }

    document.querySelector('.select-modal-edt').value = itemsEdt;
}

// Limpar seleção

function deleteItemsEdt()
{
    itemsEdt.splice(0, itemsEdt.length)
}