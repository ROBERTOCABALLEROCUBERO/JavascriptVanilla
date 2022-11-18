window.addEventListener('load', () => (document.getElementById('comprueba').addEventListener('click', () => 
{
let formularios = document.getElementsByTagName("input");

for (let index = 0; index < formularios.length; index++) {
    if (index == 0) {
        document.getElementById('username').innerHTML = inputName.tooShort;
    }
    if (index == 1) {
        
    }
    if (index == 2) {
        
    }
    if (index == 3) {
        
    }
    
}


document.getElementById('error').innerHTML = inputName.validationMessage;
document.getElementById('checkValidity').innerHTML = inputName.checkValidity();
document.getElementById('validationMessage').innerHTML = inputName.validationMessage;
document.getElementById('valueMissing').innerHTML = inputName.validity.valueMissing;
document.getElementById('tooshort').innerHTML = inputName.validity.tooShort;
document.getElementById('tooLong').innerHTML = inputName.validity.tooLong;




}


)))
