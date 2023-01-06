'use strict';
// Selecting elements
const navBtnsContainer = document.querySelector('.nav__btns'),
	forms = document.querySelectorAll('form'),
	navBtns = document.querySelectorAll('.nav__btns button'),
	containerDiv = document.querySelectorAll('.container'),
	contentContainer = document.querySelector('.content'),
	step3ContentContainer = document.querySelector('.step-3 .content'),
	nextStepContainer = document.querySelector('.next__step__container'),
	checkbox = document.querySelector('.checkbox'),
	backBtn = document.querySelector('.back'),
	nextStepBtn = document.querySelector('.next'),
	toggBtnCont = document.querySelector('.togg__btn__container'),
	toggBtn = document.querySelector('.togg__btn__container button'),
	formStep2 = document.querySelector('.step-2');

toggBtnCont.addEventListener('click', e => {
	e.preventDefault();
	toggBtn.classList.toggle('move');
});

contentContainer.addEventListener('click', e => {
	let selected = e.target.closest('.container');
	selected.classList.remove('border');
	containerDiv.forEach(container => container.classList.remove('border'));
	selected.classList.add('border');
});
step3ContentContainer.addEventListener('click', e => {
	let selected = e.target.closest('.container');
	selected.classList.remove('border');
	// containerDiv.forEach(container => container.classList.remove('border'));
	selected.classList.add('border');
	console.log('okay');
});
// checkbox.addEventListener('change', e => {
// 	console.log(checkbox.value);
// });

let index = 0;

let currentForm;
let currentBtn;
backBtn.style.display = 'none';
nextStepBtn.addEventListener('click', () => {
	index++; // incrementing the current index
	currentForm = forms[index]; // using the current index to select the next form
	currentBtn = navBtns[index]; // using the current index to select which button will be active

	if (index <= 4) {
		nextStepBtn.textContent = 'Next Step';
		navBtns.forEach(btn => btn.classList.remove('active')); // removing the active class for all the buttons
		currentBtn?.classList.add('active'); // adding the active class only to the current button
		currentForm?.classList.add('active__form'); // displaying the current form on top
		nextStepBtn.style.backgroundColor = 'var(--marine-blue)';
		backBtn.style.display = 'block';
	}
	if (index === 3) {
		nextStepBtn.textContent = 'Confirm';
		nextStepBtn.style.backgroundColor = 'var(--purplish-blue)';
	}
	if (index === 4) {
		nextStepContainer.style.display = 'none';
	}
});
backBtn.addEventListener('click', () => {
	currentForm = forms[index]; //using the current index to select the previous form
	index--; // decrementing the current index
	currentBtn = navBtns[index];
	if (index >= 0) {
		nextStepBtn.textContent = 'Next Step';
		navBtns.forEach(btn => btn.classList.remove('active')); // removing the active class from each of the buttons
		currentBtn?.classList.add('active'); // adding the active class to only to the current button
		currentForm?.classList.remove('active__form'); // removing the current form to display the previous form
		nextStepBtn.style.backgroundColor = 'var(--marine-blue)';
	} else {
		// nextStepBtn.textContent = 'Next Step';
		nextStepBtn.style.backgroundColor = 'var(--purplish-blue)';
	}
	if (index === 0) {
		backBtn.style.display = 'none';
	}
});
