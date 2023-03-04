function calcularValorHora() {
    var ganhoMes = document.querySelector("#ganho-mes").valueAsNumber;
    var horasDia = document.querySelector("#horas-dia").valueAsNumber;
    var diasTrabalhados = 20; // considerando 20 dias úteis por mês
    var valorHora = ganhoMes / (horasDia * diasTrabalhados);
  
    var resposta = document.querySelector("#resposta");
    resposta.innerHTML = "R$ " + valorHora.toFixed(2);
  }
  