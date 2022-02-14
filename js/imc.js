function calculoImc() {
  var rbMasculino = document.getElementById("rbMasculino");
  var rbFeminino = document.getElementById("rbFeminino");
  var inIdade = document.getElementById("inIdade");
  var inAltura = document.getElementById("inAltura");
  var inPeso = document.getElementById("inPeso");

  var masculino = rbMasculino.checked;
  var feminino = rbFeminino.checked;
  var idade = Number(inIdade.value);
  var altura = (inAltura.value);
  var peso = (inPeso.value);

  var altura1 = parseFloat(altura.replace(",", "."));
  var peso1 = parseFloat(peso.replace(",", "."));

  if (masculino == false && feminino == false) {
    alert("Por favor, selecione o sexo.");
    inIdade.focus();
    return;
  }

  if (idade == 0 || altura == 0 || peso == 0 || isNaN(idade)) {
    alert("Por favor, preencha os campos corretamente.");
    inIdade.focus();
    return;
  }

  calc1 = altura1 * altura1;
  calc2 = peso1 / calc1;

  if (calc2 <= 18.5) {
    outResposta.textContent = calc2.toFixed(2) + "." + "\n";
    outDiag.textContent = "Abaixo do Peso.";
  }

  if (calc2 >= 18.6 && calc2 <= 24.9) {
    outResposta.textContent = calc2.toFixed(2) + "." + "\n";
    outDiag.textContent = "Peso Normal.";
  }

  if (calc2 >= 25.0 && calc2 <= 29.9) {
    outResposta.textContent = calc2.toFixed(2) + "." + "\n";
    outDiag.textContent = "Pré-obesidade.";
  }

  if (calc2 >= 30.0 && calc2 <= 34.9) {
    outResposta.textContent = calc2.toFixed(2) + "." + "\n";
    outDiag.textContent = "Obesidade de Grau 1.";
  }

  if (calc2 >= 35.0 && calc2 <= 39.9) {
    outResposta.textContent = calc2.toFixed(2) + "." + "\n";
    outDiag.textContent = "Obesidade de Grau 2.";
  }

  if (calc2 >= 40.0) {
    outResposta.textContent = calc2.toFixed(2) + "." + "\n";
    outDiag.textContent = "Obesidade de Grau 3.";
  }
}

function clearFields() {
  document.getElementById("inIdade").value = "";
  document.getElementById("inAltura").value = "";
  document.getElementById("inPeso").value = "";
}
