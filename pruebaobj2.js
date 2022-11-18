const persona = {
  nombre: "pepe",
  apellido: "perez",
  edad: 34,
  direccion: {
    ciudad: "Madrid",
    pais: "España",
  },
};
alert(persona);
alert(persona.direccion.ciudad);
const persona1 = {
    nombre: "pepe",
    apellido: "perez",
    edad: 34,
    direccion: {
      ciudad: "Madrid",
      pais: "España",
    },
  };

  console.log(Object.keys(persona1));
  console.log(Object.values(persona1));
  console.log(Object.entries(persona1));
  const persona2 = Object.assign({}, persona1);
  persona2.nombre= 'Ana';
  console.log(persona2);
  console.log(persona);

/* const personaJSON = JSON.stringify(persona);
console.log(personaJSON);
const personaobj = JSON.parse(personaJSON);
console.log(personaobj);
console.log(persona.direccion.ciudad);
console.log(persona.apellido);
 */