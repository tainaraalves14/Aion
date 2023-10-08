function SelectCell(day)
{
    let inpCell = document.querySelectorAll(`#first-${day}`)
    let td = document.getElementsByClassName(`td-${day}`)

    if (inpCell[0].checked == true) {
        td[0].style.backgroundColor = '#823bc5'
        td[0].style.color = '#fff'
    };
    if (inpCell[0].checked == false) {
        td[0].style.backgroundColor = '#fff'
        td[0].style.color = '#333'
    };
}

function SelectCell2(day)
{
    let inpCell = document.querySelectorAll(`#second-${day}`)
    let td = document.getElementsByClassName(`td-${day}`)

    if (inpCell[0].checked == true) {
        td[1].style.backgroundColor = '#823bc5'
        td[1].style.color = '#fff'
    };
    if (inpCell[0].checked == false) {
        td[1].style.backgroundColor = '#fff'
        td[1].style.color = '#333'
    };
}

function SelectCell3(day)
{
    let inpCell = document.querySelectorAll(`#third-${day}`)
    let td = document.getElementsByClassName(`td-${day}`)

    if (inpCell[0].checked == true) {
        td[2].style.backgroundColor = '#823bc5'
        td[2].style.color = '#fff'
    };
    if (inpCell[0].checked == false) {
        td[2].style.backgroundColor = '#fff'
        td[2].style.color = '#333'
    };
}

function SelectCell4(day)
{
    let inpCell = document.querySelectorAll(`#fourth-${day}`)
    let td = document.getElementsByClassName(`td-${day}`)

    if (inpCell[0].checked == true) {
        td[3].style.backgroundColor = '#823bc5'
        td[3].style.color = '#fff'
    };
    if (inpCell[0].checked == false) {
        td[3].style.backgroundColor = '#fff'
        td[3].style.color = '#333'
    };
}

function SelectCell5(day)
{
    let inpCell = document.querySelectorAll(`#fifth-${day}`)
    let td = document.getElementsByClassName(`td-${day}`)

    if (inpCell[0].checked == true) {
        td[4].style.backgroundColor = '#823bc5'
        td[4].style.color = '#fff'
    };
    if (inpCell[0].checked == false) {
        td[4].style.backgroundColor = '#fff'
        td[4].style.color = '#333'
    };
}

function SelectCell6(day)
{
    let inpCell = document.querySelectorAll(`#sixth-${day}`)
    let td = document.getElementsByClassName(`td-${day}`)

    if (inpCell[0].checked == true) {
        td[5].style.backgroundColor = '#823bc5'
        td[5].style.color = '#fff'
    };
    if (inpCell[0].checked == false) {
        td[5].style.backgroundColor = '#fff'
        td[5].style.color = '#333'
    };
}

function SelectCell7(day)
{
    let inpCell = document.querySelectorAll(`#seventh-${day}`)
    let td = document.getElementsByClassName(`td-${day}`)

    if (inpCell[0].checked == true) {
        td[6].style.backgroundColor = '#823bc5'
        td[6].style.color = '#fff'
    };
    if (inpCell[0].checked == false) {
        td[6].style.backgroundColor = '#fff'
        td[6].style.color = '#333'
    };
}

function SelectCell8(day)
{
    let inpCell = document.querySelectorAll(`#eighth-${day}`)
    let td = document.getElementsByClassName(`td-${day}`)

    if (inpCell[0].checked == true) {
        td[7].style.backgroundColor = '#823bc5'
        td[7].style.color = '#fff'
    };
    if (inpCell[0].checked == false) {
        td[7].style.backgroundColor = '#fff'
        td[7].style.color = '#333'
    };
}

function SelectAllCell()
{
    let inpSel = document.querySelector('#selectAll')
    let labelSel = document.querySelector('#selectAllLabel')
    let allInp = document.getElementsByClassName('hide')
    let alltd = document.getElementsByClassName('td-all')

    function Select()
    {
        for (i = 0; i < allInp.length; i++)
        {
            allInp[i].checked = true
            alltd[i].style.backgroundColor = '#823bc5'
            alltd[i].style.color = '#fff'
        }
        labelSel.innerHTML = 'Desfazer seleção'
    }

    function Deselect()
    {
        for (i = 0; i < allInp.length; i++)
        {
            allInp[i].checked = false
            alltd[i].style.backgroundColor = '#fff'
            alltd[i].style.color = '#333'
        }
        labelSel.innerHTML = 'Selecionar todos'
    }

    (inpSel.checked == true) ? Select() : Deselect()
}

const inpSel = document.querySelector('#selectAll')
inpSel.addEventListener('click', SelectAllCell)

function GetCells()
{
    let arrayCell = []
    let checked = document.querySelectorAll('input:checked')
    for (i = 0; i < checked.length; i++)
    {
        let values = checked[i].id
        arrayCell.push(values)
    }
}
