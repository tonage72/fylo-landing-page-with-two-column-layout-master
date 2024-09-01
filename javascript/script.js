const getStartedButton = document.querySelector('.get-started-button');
const inputEmail = document.getElementsByName('input-email')[0];
const inputEmail2 = document.getElementsByName('input-email-2')[0];

getStartedButton.addEventListener('click', e => {

	const inputValueEmail = document.getElementsByName('input-email')[0].value.trim();

	if (inputValueEmail === '') {
		displayError();
	} else if (!isEmail(inputValueEmail)) {
		displayError();
	} else {
		location.reload();
	}
})

function displayError() {
	inputEmail.style.borderColor = 'red';
	inputEmail.style.borderWidth = '3px';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}