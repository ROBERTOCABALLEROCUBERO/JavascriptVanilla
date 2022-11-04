/* var jugador = {

Nombre: "Pedro",

edad: 20,

hablar : function()
{return "Hola";}



}
 */


/* var jugador = new Object();
jugador.nombre = "Pedro";
jugador.edad = 20;
jugador.hablar = function() {return "Hola";}
alert(jugador.nombre);
alert(jugador.hablar());
alert(jugador.edad); */
/* 
var jugador = Object.create(Object.prototype);
jugador.nombre = "Pedro";
jugador.edad = 20;
jugador.hablar = function() {return "Hola";}
alert(jugador.nombre);
alert(jugador.hablar());
alert(jugador.edad); */

/* function Jugador(nombre, edad) {

    this.nombre = nombre;
    this.edad = edad;
    this.hablar = function() {return "Hola";}
}
var jugador = new Jugador("Pedro", 20);
alert(jugador.nombre);
alert(jugador.hablar());
alert(jugador.edad);  */

/* "use strict";

let user = {

name: "Pepe",

get fullName() { return this.name ;},

set fullName(value) {this.name = value}

};

user.fullName = "Alicia";

alert(user.fullName);
alert(user.name); */

/* var unArray = [{pepe:1},{juan:2},{antonio:3}]

alert(unArray[1].juan);
unArray.push({luis:4});
alert(unArray[3].luis);

for (x in unArray){console.log(unArray[x])} */




