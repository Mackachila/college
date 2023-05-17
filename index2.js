/**
 * 
 */

const form = document.getElementById('form');
const sname = document.getElementById('sname');
const sadmnumber = document.getElementById('sadmnumber');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	validateInputs();
});
const isValidEmail=email =>{
	const re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return re.test(String(email).toLowerCase());
}
const setError = (element, message) => {
	const inputControl = element.parentElement;
	const errorDisplay = inputControl.querySelector('.error');
	errorDisplay.innerText = message;
	inputControl.classList.add('error');
	inputControl.classList.remove('success')
	
}
const setSuccess = element => {
	const inputControl = element.parentElement;
	const errorDisplay = inputControl.querySelector('.error');
	errorDisplay.innerText = "";
	inputControl.classList.add('success');
	inputControl.classList.remove('error');
	
}

const validateInputs = () => {

const snameValue = sname.value.trim();
const sadmnumberValue = sadmnumber.value.trim();
const emailValue = email.value.trim();
const phoneValue = phone.value.trim();
const passwordValue = password.value.trim();
const password2Value = password2.value.trim();

if(snameValue === ''){
	setError(sname, 'Name is Required');
}

else{
	setSuccess(sname);
}

if(sadmnumberValue === ''){
	setError(sadmnumber, 'This field is Required');
}
else{
	setSuccess(sadmnumber);
}

if(emailValue === ''){
	setError(email, 'Email is required');
}else if (!isValidEmail(emailValue))  
        {  
           setError(email, 'Provide a valid E-mail address');  
        } 
else{
	setSuccess(email);
}
if(phoneValue === ''){
	setError(phone, 'Phone number is required');
}
else if(phoneValue.length <10||phoneValue.length >10){
	setError(phone, 'Incorrect Phone number format');
}
else{
	setSuccess(phone);
}

if(passwordValue === ''){
	setError(password, 'Password is required');
}
else if(passwordValue.length <6){
	setError(password, 'Password must be at least 6 characters');
}
else{
	setSuccess(password);
}
if(password2Value === ''){
	setError(password2, 'You must confirm your password');
}
else if(password2Value !== passwordValue){
	setError(password2, 'Your passwords do not match');
}
else{
	setSuccess(password2);
}
};