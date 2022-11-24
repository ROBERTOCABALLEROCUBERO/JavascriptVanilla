/* document.addEventListener('load', function() { */
let resul = 0;
res = (a) => {
  resulid.innerHTML = a;
};
control = () => {
  if (!(resulid.innerHTML == "") && signo.innerHTML == "=") {
    resulid.innerHTML = "";
    resul = 0;
  }
};
let calcular = (numero1) => {
  if (signo.innerHTML == "+") {
    resul += numero1;

  }

  if (signo.innerHTML == "-") {
    resul -= numero1;
  }

  if (signo.innerHTML == "=") {
    res(resul);
  }
};

let primnum = (num) => {
  calcular(num);
  resulid.innerHTML = "";
};

let resulid = document.getElementById("resultado");
let signo = document.getElementById("signo");


  document.getElementById("9").addEventListener("click", () => {
    control();
    resulid.innerHTML = resulid.innerHTML + "9";
  });
  document.getElementById("8").addEventListener("click", () => {
    control();

    resulid.innerHTML = resulid.innerHTML + "8";
  });
  document.getElementById("7").addEventListener("click", () => {
    control();

    resulid.innerHTML = resulid.innerHTML + "7";
  });
  document.getElementById("6").addEventListener("click", () => {
    control();

    resulid.innerHTML = resulid.innerHTML + "6";
  });
  document.getElementById("5").addEventListener("click", () => {
    control();

    resulid.innerHTML = resulid.innerHTML + "5";
  });
  document.getElementById("4").addEventListener("click", () => {
    control();

    resulid.innerHTML = resulid.innerHTML + "4";
  });
  document.getElementById("3").addEventListener("click", () => {
    control();

    resulid.innerHTML = resulid.innerHTML + "3";
  });
  document.getElementById("2").addEventListener("click", () => {
    control();

    resulid.innerHTML = resulid.innerHTML + "2";
  });
  document.getElementById("1").addEventListener("click", () => {
    control();

    resulid.innerHTML = resulid.innerHTML + "1";
  });
  document.getElementById("0").addEventListener("click", () => {
    control();

    resulid.innerHTML = resulid.innerHTML + "0";
  });
  document.getElementById("suma").addEventListener("click", () => {
    signo.innerHTML = "+";
    primnum(parseInt(resulid.innerHTML));
  });
  document.getElementById("igual").addEventListener("click", () => {
    signo.innerHTML = "=";
    calcular(parseInt(resulid.innerHTML));
  });



