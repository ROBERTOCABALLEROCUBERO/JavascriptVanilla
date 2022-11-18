window.addEventListener('load', () => (document.getElementById('comprueba').addEventListener('click', (event) => 
{

const inputName = document.getElementsByTagName('input')[0];

document.getElementById('error').in nerHTML = inputName.validationMessage;
document.getElementById('checkValidity').innerHTML = inputName.checkValidity();
document.getElementById('validationMessage').innerHTML = inputName.validationMessage;
document.getElementById('valueMissing').innerHTML = inputName.validity.valueMissing;
document.getElementById('tooshort').innerHTML = inputName.validity.tooShort;
document.getElementById('tooLong').innerHTML = inputName.validity.tooLong;




}


)))
