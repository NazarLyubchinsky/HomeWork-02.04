// TASK 1
function validateInput(input) {
	input.value = input.value.replace(/[0-9]/g, '');
}
// TASK 2
function openModal() {
	let modal = document.getElementById("modal__window");
	modal.style.display = "block";
}

function closeModal() {
	let modal = document.getElementById("modal__window");
	modal.style.display = "none";
}

// TASK 3
let footballField = document.getElementById('football-field');
let football = document.getElementById('football');

footballField.addEventListener('click', function (event) {

	let clickX = event.clientX;
	let clickY = event.clientY;


	let fieldRect = footballField.getBoundingClientRect();
	let fieldLeft = fieldRect.left;
	let fieldTop = fieldRect.top;
	let fieldWidth = fieldRect.width;
	let fieldHeight = fieldRect.height;

	let ballWidth = football.offsetWidth;
	let ballHeight = football.offsetHeight;

	let ballNewX = clickX - fieldLeft - ballWidth / 2;
	let ballNewY = clickY - fieldTop - ballHeight / 2;


	if (ballNewX < 0) {
		ballNewX = 0;
	} else if (ballNewX > fieldWidth - ballWidth) {
		ballNewX = fieldWidth - ballWidth;
	}

	if (ballNewY < 0) {
		ballNewY = 0;
	} else if (ballNewY > fieldHeight - ballHeight) {
		ballNewY = fieldHeight - ballHeight;
	}

	football.style.top = ballNewY + 'px';
	football.style.left = ballNewX + 'px';
});

// TASK 4
let redLight = document.querySelector('.red');
let yellowLight = document.querySelector('.yellow');
let greenLight = document.querySelector('.green');

// Функція для зміни колірного світла світлофора
function trafficLight() {
	if (redLight.style.backgroundColor === 'red') {
		redLight.style.backgroundColor = 'black';
		yellowLight.style.backgroundColor = 'yellow';
		greenLight.style.backgroundColor = 'black';
	} else if (yellowLight.style.backgroundColor === 'yellow') {
		redLight.style.backgroundColor = 'black';
		yellowLight.style.backgroundColor = 'black';
		greenLight.style.backgroundColor = 'green';
	} else {
		redLight.style.backgroundColor = 'red';
		yellowLight.style.backgroundColor = 'black';
		greenLight.style.backgroundColor = 'black';
	}
}

// TASK 5

let selectedBook = null;
function changeBookColor(book) {
	if (selectedBook) {
		selectedBook.classList.remove('selected');
	}
	if (selectedBook !== book) {
		book.classList.add('selected');
		selectedBook = book;
	} else {
		selectedBook = null;
	}
}

//  TASK 6 

function showTooltip(btn, text) {
	var tooltip = document.createElement('div');
	tooltip.className = 'tooltip';
	tooltip.textContent = text;


	if (btn.offsetTop > tooltip.offsetHeight) {
		tooltip.className += ' bottom';
	} else {
		tooltip.className += ' top';
	}

	btn.appendChild(tooltip);
}

// TASK 7

const listItems = document.querySelectorAll('li');
listItems.forEach(item => {
	item.addEventListener('click', () => {
		item.classList.toggle('collapsed');
		item.classList.toggle('expanded');
		const nestedList = item.querySelector('ul');
		if (nestedList) {
			nestedList.style.display = nestedList.style.display === 'none' ? 'block' : 'none';
		}
	});
});

// TASK 8
const resizableBox = document.querySelector('.resizable-box');
let isResizing = false;
let startX;
let startY;

resizableBox.addEventListener('mousedown', (event) => {
	if (event.target === resizableBox) {
		isResizing = true;
		startX = event.clientX;
		startY = event.clientY;
	}
});

document.addEventListener('mousemove', (event) => {
	if (isResizing) {
		const width = event.clientX - startX + resizableBox.offsetWidth;
		const height = event.clientY - startY + resizableBox.offsetHeight;
		resizableBox.style.width = `${width}px`;
		resizableBox.style.height = `${height}px`;
	}
});

document.addEventListener('mouseup', () => {
	isResizing = false;
});