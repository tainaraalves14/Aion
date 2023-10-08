const inpGrid = document.querySelector('.select-modal-grid');
const labelGrid = document.querySelector('#label-modal-grid')
const dropDownGrid = document.querySelector('.dropdown-select-grid');
const blurDropGrid = document.querySelector('.modal-container-grid')

const ActiveDropDownClassGrid = 'dropdown-show-grid';

const closeDropDownGrid = () => {
    dropDownGrid.classList.remove(ActiveDropDownClassGrid);
    inpGrid.blur()
}
const openDropDownGrid = () => {
    dropDownGrid.classList.add(ActiveDropDownClassGrid);
    inpGrid.blur()
}

inpGrid.addEventListener('focus', () => {
    dropDownGrid.classList.contains(ActiveDropDownClassGrid) ? closeDropDownGrid() : openDropDownGrid()
})

blurDropGrid.addEventListener('mousedown', (event) => {
    if (blurDropGrid.contains(event.target) && !inpGrid.contains(event.target)
    && !labelGrid.contains(event.target))
    closeDropDownGrid()
})

// Select Box

let itemsGrid = ''

function selectGrid(id)
{
    const nameItemGrid = document.querySelector(`#items-grid-${id}`).innerHTML

    itemsGrid = nameItemGrid

    document.querySelector('.select-modal-grid').value = itemsGrid;
}