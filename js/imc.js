function calculoImc() {
  var rbMasculino = document.getElementById("rbMasculino");
  var rbFeminino = document.getElementById("rbFeminino");
  var inIdade = document.getElementById("inIdade");
  var inAltura = document.getElementById("inAltura");
  var inPeso = document.getElementById("inPeso");

  var masculino = rbMasculino.checked;
  var feminino = rbFeminino.checked;
  var idade = Number(inIdade.value);
  
  var peso = Number(inPeso.value)

  const altura = parseInt(inAltura.replace(',','.'))

  if (masculino == false && feminino == false) {
    alert("Por favor, selecione o sexo.");
    inIdade.focus();
    return;
  }

  if (
    idade == 0 ||
    altura == 0 ||
    peso == 0 ||
    isNaN(idade) ||
    isNaN(altura) ||
    isNaN(peso)
  ) {
    alert("Por favor, preencha os campos corretamente.");
    inIdade.focus();
    return;
  }

  calc1 = altura * altura;
  calc2 = peso / calc1;

  if (calc2 <= 18.5) {
    outResposta.textContent = "Seu IMC é: " + calc2.toFixed(2) + "." + "\n";
    outDiag.textContent = "Status: Abaixo do Peso.";
  }

  if (calc2 >= 18.6 && calc2 <= 24.9) {
    outResposta.textContent = "Seu IMC é: " + calc2.toFixed(2) + "." + "\n";
    outDiag.textContent = "Status: Peso Normal.";
  }

  if (calc2 >= 25.0 && calc2 <= 20.9) {
    outResposta.textContent = "Seu IMC é: " + calc2.toFixed(2) + "." + "\n";
    outDiag.textContent = "Status: Pré-obesidade.";
  }

  if (calc2 >= 30.0 && calc2 <= 34.9) {
    outResposta.textContent = "Seu IMC é: " + calc2.toFixed(2) + "." + "\n";
    outDiag.textContent = "Status: Obesidade de Grau 1.";
  }

  if (calc2 >= 35.0 && calc2 <= 39.9) {
    outResposta.textContent = "Seu IMC é: " + calc2.toFixed(2) + "." + "\n";
    outDiag.textContent = "Status: Obesidade de Grau 2.";
  }

  if (calc2 >= 40.0) {
    outResposta.textContent = "Seu IMC é: " + calc2.toFixed(2) + "." + "\n";
    outDiag.textContent = "Status: Obesidade de Grau 3.";
  }
}

function clearFields() {

    document.getElementById("inIdade").value = "";
    document.getElementById("inAltura").value = "";
    document.getElementById("inPeso").value = "";
}
