var inicio = document.getElementById("btInicio");
var participar = document.getElementById("btParticipar");
var presente = document.getElementById("btPresente");
var lista = document.getElementById("btLista");
var doacao = document.getElementById("btDoacao");

inicio.addEventListener('click', function() {    
    inicio.classList.add("active");
    participar.classList.remove("active");
    presente.classList.remove("active");
    lista.classList.remove("active");
    doacao.classList.remove("active");
});
participar.addEventListener('click', function() {    
    participar.classList.add("active");
    inicio.classList.remove("active");
    presente.classList.remove("active");
    lista.classList.remove("active");
    doacao.classList.remove("active");
});
presente.addEventListener('click', function() {    
    presente.classList.add("active");
    inicio.classList.remove("active");
    participar.classList.remove("active");
    lista.classList.remove("active");
    doacao.classList.remove("active");
});
lista.addEventListener('click', function() {    
    lista.classList.add("active");
    inicio.classList.remove("active");
    participar.classList.remove("active");
    presente.classList.remove("active");
    doacao.classList.remove("active");
});
doacao.addEventListener('click', function() {    
    doacao.classList.add("active");
    inicio.classList.remove("active");
    participar.classList.remove("active");
    presente.classList.remove("active");
    lista.classList.remove("active");
});