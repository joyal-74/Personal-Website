const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const phonenumber = document.getElementById('phoneno');
const messagearea = document.getElementById('messagearea');
const form = document.getElementById('form');  // Get the form element

document.getElementById('form').addEventListener('submit', function(event) {
      // Prevent the default form submission

    let isValid = true;

    // Validate First Name
    if (firstname.value.trim() === '') {
        firstname.placeholder = 'First Name is required!';
        firstname.style.borderColor = '#ff0000';
        isValid = false;
    } else {
        firstname.style.borderColor = '#00ff2a';
    }

    // Validate Last Name
    if (lastname.value.trim() === '') {
        lastname.style.borderColor = '#0ccaf0';
    } else {
        lastname.style.borderColor = '#00ff2a';
    }

    // Validate Email
    if (email.value.trim() === '') {
        email.placeholder = 'Email is required!';
        email.style.borderColor = '#ff0000';
        isValid = false;
    } else {
        email.style.borderColor = '#00ff2a';
    }

    const phoneNumberValue = phonenumber.value.replace(/\D/g, ''); 
    if (phoneNumberValue.length !== 10 || isNaN(phoneNumberValue)) {
        phonenumber.placeholder = 'Invalid Phone Number!';
        phonenumber.style.borderColor = '#ff0000';
        isValid = false;
    } else {
        phonenumber.style.borderColor = '#00ff2a';
    }

    if (messagearea.value.trim() === '') {
        messagearea.placeholder = 'Please Tell me why you try to connect me...!';
        messagearea.style.borderColor = '#ff0000';
        isValid = false;
    } else {
        messagearea.style.borderColor = '#00ff2a';
    }

    // Submit the form if all fields are valid
    if(isValid) {
        form.submit();
    } else {
        event.preventDefault();  // Corrected here
    }
});
