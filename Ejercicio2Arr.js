var compra = [];
var dato;
dato = prompt("Introduce un elemento de la compra");
while (dato) {
  compra.push(dato);
  dato = prompt("Introduce un elemento de la compra");
}

compra.forEach((element) => {
  window.document.write(element);
  window.document.write("\n");
});
