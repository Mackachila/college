/**
 * 
 */

    function showPopupForm() {
      var popupForm = document.getElementById("popupForm");
      popupForm.style.display = "block";
    }

    function closePopupForm() {
      var popupForm = document.getElementById("popupForm");
      popupForm.style.display = "none";
    }
  
 function showPopupForm2() {
      var popupForm2 = document.getElementById("popupForm2");
      popupForm2.style.display = "block";
    }

    function closePopupForm2() {
      var popupForm2 = document.getElementById("popupForm2");
      popupForm2.style.display = "none";
    }

    function showPopupForm3() {
      var popupForm2 = document.getElementById("popupForm3");
      popupForm2.style.display = "block";
    }

    function closePopupForm3() {
      var popupForm2 = document.getElementById("popupForm3");
      popupForm2.style.display = "none";
    }

     function showPopupForm4() {
      var popupForm2 = document.getElementById("popupForm4");
      popupForm2.style.display = "block";
    }

    function closePopupForm4() {
      var popupForm2 = document.getElementById("popupForm4");
      popupForm2.style.display = "none";
    }

     function showPopupForm5() {
      var popupForm2 = document.getElementById("popupForm5");
      popupForm2.style.display = "block";
    }

    function closePopupForm5() {
      var popupForm2 = document.getElementById("popupForm5");
      popupForm2.style.display = "none";
    }

 function myFunction() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
// Get references to the elements
function form_function(){
var openBtn = document.getElementById("open-btn");
var closeBtn = document.getElementById("close-btn");
var popupForm = document.getElementById("popup-form");
var overlay = document.getElementById("overlay");

// Open the pop-up form
openBtn.addEventListener("click", function () {
    popupForm.style.display = "block";
    overlay.style.display = "block";
});

// Close the pop-up form
closeBtn.addEventListener("click", function () {
    popupForm.style.display = "none";
    overlay.style.display = "none";
});
}

 
function myFunction() {
  var x = document.getElementById("password");
  var y = document.getElementById("password2");
  if (x.type === "password") {
    x.type = "text";
    y.type = "text";
  } else {
    x.type = "password";
    y.type = "password";
  }
}

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
