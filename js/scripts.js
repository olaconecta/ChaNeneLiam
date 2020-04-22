var inicio = document.getElementById("btInicio");
var participar = document.getElementById("btParticipar");
var presente = document.getElementById("btPresente");
var lista = document.getElementById("btLista");
var doacao = document.getElementById("btDoacao");

const abreMenu = document.querySelector('.abreMenu');
const menu = document.querySelector('nav > ul');

var btns = [inicio, participar, presente, lista, doacao ];
// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
    menu.classList.remove('collapse');
  });
}


abreMenu.addEventListener('click', function () {
  let abre = menu.classList.contains('collapse');
  if(abre) {
    menu.classList.remove('collapse');
  } else {
    menu.classList.add('collapse');    
  }
})

// btns.addEventListener('click', function() {
//   if(abre) {
//     menu.classList.remove('collapse');
//   }
// })