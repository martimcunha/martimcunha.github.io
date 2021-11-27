function percent() {
  var inPercentual = document.getElementById("inPercentual");
  var inNumero = document.getElementById("inNumero");

  var percentual = Number(inPercentual.value);
  var numero = Number(inNumero.value);

  var calc = (percentual / 100) * numero;

  outResposta.textContent = "Total: " + calc.toFixed(2);
}

function clearFields() {
  document.getElementById("inValor").value = "";
  document.getElementById("inPeriodo").value = "";
}
