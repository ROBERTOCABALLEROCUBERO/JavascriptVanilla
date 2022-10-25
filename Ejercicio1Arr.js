
var dni;
var cadena = "TRWAGMYFPDXBNJZSQVHLCKET";


dni = prompt("Introduce un numero")





var posicion = dni%23;
var letra = cadena.substring(posicion,posicion+1);
window.document.write(dni+" - "+letra);
