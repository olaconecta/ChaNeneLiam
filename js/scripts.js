var inicio = document.getElementById("btInicio");
var participar = document.getElementById("btParticipar");
var presente = document.getElementById("btPresente");
var lista = document.getElementById("btLista");
var doacao = document.getElementById("btDoacao");

var btns = [inicio, participar, presente, lista, doacao ];
// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}
