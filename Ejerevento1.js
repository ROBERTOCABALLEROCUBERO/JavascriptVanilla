function cambiar() {
  if (document.getElementById("evento").src.match("img1.gif")) {

    document.getElementById("evento").src = "img2.gif";
  } else {
    document.getElementById("evento").src = "img1.gif";
  }
}
