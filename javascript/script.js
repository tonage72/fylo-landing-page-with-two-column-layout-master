const getStartedButton1 = document.querySelector('.get-started-button-1');
const getStartedButton2 = document.querySelector('.get-started-button-2');
const inputEmail1 = document.getElementsByName('input-email-1')[0];
const inputEmail2 = document.getElementsByName('input-email-2')[0];
const inputError1 = document.querySelector('.error-input-1');
const inputError2 = document.querySelector('.error-input-2');

getStartedButton1.addEventListener('click', e => {

	const inputValueEmail1 = document.getElementsByName('input-email-1')[0].value.trim();
	
	if (inputValueEmail1 === '') {
		displayError1();
	} else if (!isEmail(inputValueEmail1)) {
		displayError1();
	} else {
		location.reload();
	}

	
})

getStartedButton2.addEventListener('click', e => {

	const inputValueEmail2 = document.getElementsByName('input-email-2')[0].value.trim();
	
	if (inputValueEmail2 === '') {
		displayError2();
	} else if (!isEmail(inputValueEmail2)) {
		displayError2();
	} else {
		location.reload();
	}
})

function displayError1() {
	inputEmail1.style.borderColor = 'red';
	inputError1.style.visibility = 'visible';
}

function displayError2() {
	inputEmail2.style.borderColor = 'red';
	inputError2.style.visibility = 'visible';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}