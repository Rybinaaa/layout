//обработка полей
//отправка формы 


document.querySelector('.enter-data').addEventListener('click', () => {
    menu.signUpClose();
})

document.querySelector('.modal-container').addEventListener('click', event => {
    (event.target.classList.value === 'modal-container')?menu.signUpClose():null;
    
})

document.querySelector('.sign-up').addEventListener('click', () =>{
    menu.signUpOpen()
})