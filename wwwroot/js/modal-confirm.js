const btnOpenConf = document.querySelector('.btn-modal-conf');
const btnCloseConf = document.querySelector('.close-modal-conf');
const backgroundConf = document.querySelector('.modal-conf');
const modalConf = document.querySelector('.modal-container-conf');
const itemsTable = document.getElementsByClassName('table-item-btn')

const activeModalClassConf = 'modal-show';

const openModalConf = () => 
{
    backgroundConf.classList.add(activeModalClassConf);
    for (i = 0; i < itemsTable.length; i++)
    {
        itemsTable[i].style.zIndex = "-1";
    }
};
const closeModalConf = () => 
{
    backgroundConf.classList.remove(activeModalClassConf)
    for (let i = 0; i < itemsTable.length; i++)
    {
        setTimeout(() => {
            itemsTable[i].style.zIndex = "0"
        }, 150);
    }
};

btnOpenConf?.addEventListener('click', openModalConf)
btnCloseConf?.addEventListener('click', closeModalConf)

// A diferença do mousedown pro click é que só quando o mouse for clicado a função será executada, e não quando soltado o clique.
backgroundConf.addEventListener('mousedown', (event) => {
    if (!modalConf.contains(event.target)) closeModalConf()
    
    return;
})

//