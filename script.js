

function ativaLetra(elemento) {
    const arrTexto = elemento.innerHTML.split(''); 
    elemento.innerHTML = '';
    arrTexto.forEach((letra, index) => {
        setTimeout(() => {
            elemento.innerHTML += letra; 
        }, 75 * index);
    });
}

const título = document.querySelector('.digitando');
ativaLetra(título);

const ativaMenu = document.querySelector('.fa-bars'); 


const navMenu =document.querySelector('header .navegaçao-primaria')


ativaMenu.addEventListener('click', () => { 
    ativaMenu.classList.toggle('fa-x'); 
    navMenu.classList .toggle('ativado')
});


