var inputValorDoMes = document.querySelector("#ganho-mes");
var inputHorasPorDias = document.querySelector("#horas-dia");
var spanHora = document.querySelector('.secao-hora .secao__rodape__valor span');

function calcularValorHora(){
    var totalDeHoras = inputHorasPorDias.valueAsNumber *22;
    var valordeHoras = (inputValorDoMes.valueAsNumber / totalDeHoras).toFixed(2);

    spanHora.textContent = "R$ " + valordeHoras;
}
