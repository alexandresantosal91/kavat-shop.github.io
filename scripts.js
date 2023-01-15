window.onload = function() {
  
  alert("Bem vindo ao meu site!");

}



function mostrarPreco(valor) {
  
  alert("O carro vale R$" + valor);

}



function mudarCorFundo() {
  
  document.body.style.backgroundColor = "grey";

}



function mudarTodosCabecalhos() { 

  
  var elementos = document.getElementsByTagName("h3");


  for (i = 0; i < elementos.length; i++) {

    elementos[i].style.backgroundColor = "red";

  }

}
