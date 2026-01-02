const consoleLog = document.querySelector('#consoleLog');
const alertConst = document.querySelector('#alert');
const promptConst = document.querySelector('#prompt');

consoleLog.addEventListener('click', () => {
	alert('Служит для вывода информации в консоль');
})

alertConst.addEventListener('click', () => {
	alert('Служит для вывода информации в диалоговое окно');
})

promptConst.addEventListener('click', () => {
	alert('Служит для ввода информации пользователем через диалоговое окно');
})