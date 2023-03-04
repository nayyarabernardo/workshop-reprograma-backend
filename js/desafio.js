var inputValorHora = document.querySelector("#valor-hora");
var inputHorasProjeto = document.querySelector("#horas-projeto");
var spanResposta = document.querySelector('.secao-hora .secao__rodape__valor span');

function calcular(){
  var valorHora = inputValorHora.valueAsNumber;
  var horasProjeto = inputHorasProjeto.valueAsNumber;
  var valorTotal = valorHora * horasProjeto;

  spanResposta.textContent = "R$ " + valorTotal.toFixed(2);
}
