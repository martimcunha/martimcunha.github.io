function calcFiis() {
  var inValor = document.getElementById("inValor");
  var inDy = document.getElementById("inDy");
  var inCota = document.getElementById("inCota");

  var valor = inValor.value;
  var dy = inDy.value;
  var cota = inCota.value;

  var inValorinValor = parseFloat(valor.replace(",", "."));
  var inDyinDy = parseFloat(dy.replace(",", "."));
  var inCotainCota = parseFloat(cota.replace(",", "."));

  calcPercent = inDyinDy/100
  calcCotas = Math.round(inValorinValor / inCotainCota);
  calcRend = calcCotas * calcPercent;
  calcTotal = calcCotas * calcRend;

  outQtdCotas.textContent = calcCotas.toLocaleString("pt-BR");

  outRend.textContent = calcRend.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  outRendTotal.textContent = calcTotal.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function clearFields() {
  document.getElementById("inValor").value = "";
  document.getElementById("inDy").value = "";
  document.getElementById("inCota").value = "";
}