const btnOpenSave = document.querySelector('.btn-save');
const btnCloseSave = document.querySelector('.close-modal-save');
const backgroundSave = document.querySelector('.modal-save');
const modalSave = document.querySelector('.modal-container-save');

const activeModalClassSave = 'modal-show';

const openModalSave = () => 
{
    backgroundSave.classList.add(activeModalClassSave);
};
const closeModalSave = () => 
{
    backgroundSave.classList.remove(activeModalClassSave)
};

btnOpenSave.addEventListener('click', openModalSave)
btnCloseSave.addEventListener('click', closeModalSave)

// A diferença do mousedown pro click é que só quando o mouse for clicado a função será executada, e não quando soltado o clique.
backgroundSave.addEventListener('mousedown', (event) => {
    if (!modalSave.contains(event.target)) closeModalSave()
    
    return;
})