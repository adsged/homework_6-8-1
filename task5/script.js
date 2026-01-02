let 
	textField = document.querySelector('#textField'),
	duplicateField = document.querySelector('#duplicateField');


textField.addEventListener('keyup', 
    (event) => {        
        duplicateField.textContent = event.target.value;        
})

document.querySelector("#submitButton").addEventListener('click', 
    (event) => {
        event.preventDefault();
        console.log("Текст, введенный в форме:", duplicateField.textContent);
        duplicateField.textContent = "";
        textField.value = "";
})


 