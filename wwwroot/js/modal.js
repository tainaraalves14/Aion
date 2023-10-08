const getElement = (...queries) => document.querySelector(...queries);

const btnOpenAdd = getElement('.btn-modal');
const btnCloseAdd = getElement('.close-modal');
const background = getElement('.modal');
const modal = getElement('.modal-container');

const btnCloseEdt = getElement('.close-modal-edt');
const backgroundEdt = getElement('.modal-edt');
const modalEdt = getElement('.modal-container-edt');

const btnCloseDel = getElement('.close-modal-del');
const backgroundDel = getElement('.modal-del');
const modalDel = getElement('.modal-container-del');

const activeModalClass = 'modal-show';

const openModalAdd = () => background.classList.add(activeModalClass);
const closeModalAdd = () => {
    background.classList.remove(activeModalClass);
    closeDropDown();
}

function openModalDel(id, name)
{
    backgroundDel.classList.add(activeModalClass);
    let nameTxt = getElement('#name-del');
    nameTxt.innerText = name;

    let inpSub = getElement('#id-del')
    inpSub.value = id;
}
const closeModalDel = () => backgroundDel.classList.remove(activeModalClass);

function openModalEdtCursos(id, name, type, qty)
{
    backgroundEdt.classList.add(activeModalClass);
    let inpName = getElement('#name-edt');
    let inpType = getElement('#select-modal-typecoEdt');
    let inpQty = getElement('#qtySem-edt');
    inpName.value = name;
    inpType.value = type;
    inpQty.value = qty;

    let inpSub = getElement('#id-edt');
    inpSub.value = id;
}

function openModalEdtGrades(id, course, date, number)
{
    backgroundEdt.classList.add(activeModalClass);
    let inpDate = getElement('#date-edt');
    let inpCourse = getElement('#select-modal-gridEdt');
    let inpNumber = getElement('#number-edt');
    let dateFormat = date.split(' ');
    inpDate.value = dateFormat[0];
    inpCourse.value = course;
    inpNumber.value = number;

    let inpSub = getElement('#id-edt');
    inpSub.value = id;
}

function openModalEdtTurmas(id, name, grid, schYear)
{
    backgroundEdt.classList.add(activeModalClass);
    let inpName = getElement('#name-edt');
    let inpGrid = getElement('#select-modal-coclassEdt');
    let inpSchYear = getElement('#select-modal-peclassEdt');
    inpName.value = name;
    inpGrid.value = grid;
    inpSchYear.value = schYear;

    let inpSub = getElement('#id-edt');
    inpSub.value = id;
}

function openModalEdtProfessores(id, name, email, phone, materias)
{
    backgroundEdt.classList.add(activeModalClass);
    
    let inpName = getElement('#name-edt');
    let inpEmail = getElement('#email-edt');
    let inpPhone = getElement('#phone-edt');
    inpName.value = name;
    inpEmail.value = email;
    inpPhone.value = phone;

    let inpSub = getElement('#id-edt');
    inpSub.value = id;

    let materiaId = materias.split(',');
    for (i = 0; i < materiaId.length; i++)
    {   
        let input = getElement(`#item-select-edt-${materiaId[i]}`)
        const nameItemEdta = getElement(`#items-edt-${materiaId[i]}`).innerHTML

        let posEdta = itemsEdt.indexOf(nameItemEdta)
        if (posEdta == -1)
        {
            itemsEdt.push(nameItemEdta)
            input.checked = true;
        }
        getElement('.select-modal-edt').value = itemsEdt;
        
        // Quando o modal for fechado os itens do select perdem o atributo "checked"
        backgroundEdt?.addEventListener('mousedown', (event) => {
            if (!modalEdt.contains(event.target)) checkFalse()
        })  
    }
}

const checkFalse = () => {
    let inpChecks = document.getElementsByClassName('check-select-edt');
    for (i = 0; i < inpChecks.length; i++)
    {
        inpChecks[i].checked = false;
    }
}

function openModalEdtAtribuicoes(id, teacher, gridSub, turma, isMatriz)
{
    backgroundEdt.classList.add(activeModalClass);
    let inpTeacher = getElement('#select-modal-teassignEdt');
    let inpGridSub = getElement('#select-modal-gridassignEdt');
    let inpTurma = getElement('#select-modal-classassignEdt');
    let inpMatriz = getElement('#isMatriz-edt');
    inpTeacher.value = teacher;
    inpGridSub.value = gridSub;
    inpTurma.value = turma;
    inpMatriz.value = isMatriz;

    let inpMatrizSub = getElement('[name=isMatrizInpEdt]')
    if (inpMatriz.value == 'True')
    {
        inpMatriz.checked = true
        inpMatrizSub.value = true
    }
    else
    {
        inpMatriz.checked = false
        inpMatrizSub.value = false
    }

    let inpSubmit = getElement('#id-edt');
    inpSubmit.value = id;
}

function openModalEdtGradeDisciplinas(id, grid, sub, semester, hasDivisionEdt, workload)
{
    backgroundEdt.classList.add(activeModalClass);
    let inpGrid = getElement('#select-modal-grgridsubEdt');
    let inpSub = getElement('#select-modal-sgridsubEdt');
    let inpSemester = getElement('#semester-edt');
    let inpHasDivisionEdt = getElement('#hasDivision-edt');
    let inpWorkload = getElement('#workload-edt');
    inpGrid.value = grid;
    inpSub.value = sub;
    inpSemester.value = semester;
    inpHasDivisionEdt.value = hasDivisionEdt;
    inpWorkload.value = workload;

    let inpHasDivisionEdtSub = getElement('[name=hasDivisionEdt]')
    if (inpHasDivisionEdt.value == 'True')
    {
        inpHasDivisionEdt.checked = true
        inpHasDivisionEdtSub.value = true
    }
    else
    {
        inpHasDivisionEdt.checked = false
        inpHasDivisionEdtSub.value = false
    }

    let inpSubmit = getElement('#id-edt');
    inpSubmit.value = id;
}

const closeModalEdt = () => {
    backgroundEdt.classList.remove(activeModalClass)
    closeDropDownEdt();
    deleteItemsEdt();
};

btnCloseDel.addEventListener('click', closeModalDel)
btnCloseEdt?.addEventListener('click', closeModalEdt)
btnOpenAdd.addEventListener('click', openModalAdd)
btnCloseAdd.addEventListener('click', closeModalAdd)

// A diferença do mousedown pro click é que só quando o mouse for clicado a função será executada, e não quando soltado o clique.
background.addEventListener('mousedown', (event) => {
    if (!modal.contains(event.target)) closeModalAdd()
    
    return;
})
backgroundEdt?.addEventListener('mousedown', (event) => {
    if (!modalEdt.contains(event.target)) closeModalEdt()
    
    return;
})
backgroundDel.addEventListener('mousedown', (event) => {
    if (!modalDel.contains(event.target)) closeModalDel()
    
    return;
})