const form = document.querySelector('.signup-form');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    checkInputs();

});

function checkInputs() {
    const firstNameVal = firstName.value.trim();
    const lastNameVal = lastName.value.trim();
    const passwordVal = password.value.trim();
    const emailVal = email.value.trim();

    if (firstNameVal == '') {
        setErrorFor(firstName);
    } else {
        setSuccessFor(firstName);
    }

    if (lastNameVal == '') {
        setErrorFor(lastName);
    } else {
        setSuccessFor(lastName);
    }
    
    if (passwordVal == '') {
        setErrorFor(password);
    } else {
        setSuccessFor(password);
    }

    if(!isEmailValid(emailVal)) {
        setErrorFor(email);
        console.log('invalid');
    } else {
        setSuccessFor(email);
        console.log('Email is valid, function applied');
    }
}


function setErrorFor(input) {
    const formGroup = input.parentElement;
    const span = formGroup.querySelector('.error-message');
    const errorIcon = formGroup.querySelector('.error-icon');

    input.classList.add('error');

    span.style.display = 'block';
    errorIcon.style.display = 'block';

}

function setSuccessFor(input) {
    const formGroup = input.parentElement;
    const span = formGroup.querySelector('.error-message');
    const errorIcon = formGroup.querySelector('.error-icon');

    input.classList.remove('error');

    span.style.display = 'none';
    errorIcon.style.display = 'none';
}

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};