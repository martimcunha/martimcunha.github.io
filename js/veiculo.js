function financVeiculo() {
  var inValor = document.getElementById("inValor");
  var inEntrada = document.getElementById("inEntrada");
  var inTaxa = document.getElementById("inTaxa");
  var inPeriodo = document.getElementById("inPeriodo");

  var valor = Number(inValor.value);
  var entrada = Number(inEntrada.value);
  var taxa = Number(inTaxa.value);
  var periodo = Number(inPeriodo.value);

  var coeficiente = taxa / 1 - 1 / (1 + taxa);

  
}
