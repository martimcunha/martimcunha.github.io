const frm = document.querySelector("form")

function calculoRendimento() {
  var inValor = document.getElementById("inValor");

  var valor = inValor.value;
  var valor2 = parseFloat(valor.replace(",", "."));


  if (frm.selFii.value == "mxrf11") {
    qtdCotas = valor2 / 9.82;
    rendMensal = qtdCotas * 0.1;
  }

  if (frm.selFii.value == "knri11") {
    qtdCotas = valor2 / 136.74;
    rendMensal = qtdCotas * 0.81;
  }

  if (frm.selFii.value == "xpci11") {
    qtdCotas = valor2 / 96.99;
    rendMensal = qtdCotas * 1.13;
  }

  outValorInvestido.textContent = valor2.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  outCotas.textContent = Math.round(qtdCotas);

  outRendimento.textContent = rendMensal.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function clearFields() {
  document.getElementById("inValor").value = "";
  document.getElementById("inPeriodo").value = "";
}
