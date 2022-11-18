const persona ={

nombre: "pepe",
apellido: "perez",
edad:34,
direccion: {
    ciudad: "Madrid",
    pais: "España"
}

}

const personaJSON = JSON.stringify(persona);
console.log(personaJSON);
const personaobj = JSON.parse(personaJSON);
console.log(personaobj);
console.log(persona.direccion.ciudad);
console.log(persona.apellido);