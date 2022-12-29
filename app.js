let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let email = document.getElementById('email');
let pass = document.getElementById('Pass');
// let btn = document.getElementById('btn');
let form = document.getElementById('form');

form.addEventListener('submit', () => {
	let fregex = /[A-Za-z]/;
	let eregex = /[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}/
	let passcheck = /[A-Za-z 0-9]/
	if (!fname.value.match(fregex)) {
		document.querySelector('.fname').childNodes[1].innerHTML = 'first name cannot be empty';
		document.querySelector('.fname-img').innerHTML = `<img src="./images/icon-error.svg" alt="icon-error">`
		return false;
	}
	if (!lname.value.match(fregex)) {
		document.querySelector('.lname').innerHTML = 'Last name cannot be empty';
		document.querySelector('.lname-img').innerHTML = `<img src="./images/icon-error.svg" alt="icon-error">`
		return false;
	}
	if (!email.value.match(eregex)) {
		document.querySelector('.email').innerHTML = 'Looks like this is not a email';
		document.querySelector('.email-img').innerHTML = `<img src="./images/icon-error.svg" alt="icon-error">`
		return false;
	}
	if (!pass.value.match(passcheck)) {
		document.querySelector('.pass').innerHTML = 'password cannot be empty';
		document.querySelector('.pass-img').innerHTML = `<img src="./images/icon-error.svg" alt="icon-error">`
		return false;
	}


})