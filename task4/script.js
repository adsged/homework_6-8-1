let changingLink = document.querySelector('#changingLink');

changingLink.addEventListener('click', 
    (event) => {
        event.preventDefault();
        changingLink.textContent = prompt('Введите новый текст ссылки');
})