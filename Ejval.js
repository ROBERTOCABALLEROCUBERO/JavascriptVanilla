window.addEventListener("load", () =>document.getElementById("comprueba").addEventListener("click", () => {
    let formularios = document.getElementsByTagName("input");

    document.getElementById("respuesta0").innerHTML =
      formularios[0].validationMessage;

    if (
      formularios[1].checkValidity() == false
    ) {
      document.getElementById("respuesta1").textContent =
        "El email no es válido";
    } else {
      document.getElementById("respuesta1").textContent = "Esta bien";
    }
    document.getElementById("respuesta2").innerHTML =
      formularios[2].validationMessage;

    if (
      document.getElementById("pass").value ==
      document.getElementById("passc").value
    ) {
      document.getElementById("respuesta3").textContent = "Esta bien";
    } else {
      if (document.getElementById("passc").value == "") {
        document.getElementById("respuesta3").innerHTML =
        formularios[3].validationMessage;
      } else {
        document.getElementById("respuesta3").textContent =
          "La contraseña no coincide";
      }
    }
  })
);
