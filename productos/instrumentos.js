const pCatInstMenu = document.querySelector('.p-categoria-instrumentos');
const clickInstrumentos = document.querySelector('.cat-inst-menu');

pCatInstMenu.addEventListener('click', toggleMenu);

function toggleMenu(){
    clickInstrumentos.classList.toggle('inactive');
}

