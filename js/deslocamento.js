function calculoDeslocamento() {
  var inKm = document.getElementById("inKm");
  var inCons = document.getElementById("inCons");
  var inLitro = document.getElementById("inLitro");

  var kilometragem = inKm.value;
  var consumo = inCons.value;
  var litro = inLitro.value;

  var km = parseFloat(kilometragem.replace(",", "."));
  var cons = parseFloat(consumo.replace(",", "."));
  var preco = parseFloat(litro.replace(",", "."));

  calc1 = km / cons;
  calc2 = calc1 * preco;

  outResposta.textContent = calc2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function clearFields() {
  document.getElementById("inValor").value = "";
  document.getElementById("inPeriodo").value = "";
}