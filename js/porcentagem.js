function percent() {
  var inPercentual = document.getElementById("inPercentual");
  var inNumero = document.getElementById("inNumero");

  var percentual = inPercentual.value;
  var numero = inNumero.value;

  var percentual1 = parseFloat(percentual.replace(",", "."));
  var numero1 = parseFloat(numero.replace(",", "."));

  var calc = (percentual1 / 100) * numero1;

  outResposta.textContent = "Total: " + calc.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2});
}

function clearFields() {
  document.getElementById("inValor").value = "";
  document.getElementById("inPeriodo").value = "";
}
