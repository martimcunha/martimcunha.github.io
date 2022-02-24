function gordura() {
  var rbMasculino = document.getElementById("rbMasculino");
  var rbFeminino = document.getElementById("rbFeminino");
  var inImc = document.getElementById("inImc");
  var inIdade = document.getElementById("inIdade");

  var masculino = rbMasculino.checked;
  var feminino = rbFeminino.checked;
  var imc = (inImc.value);
  var idade = Number(inIdade.value);

  var imc1 = parseFloat(imc.replace("," , "."));

  if (masculino == false && feminino == false) {
    alert("Por favor, selecione o sexo.");
    inIdade.focus();
    return;
  }

  if (idade == 0 || imc == 0 || isNaN(idade)) {
    alert("Por favor, preencha os campos corretamente.");
    inImc.focus();
    return;
  }

  if (masculino == true && feminino == false) {
    sexo = 1;
  }

  if (masculino == false && feminino == true) {
    sexo = 0;
  }

  calc1 = 1.2 * imc1;
  calc2 = 0.23 * idade;
  calc3 = 10.8 * sexo;
  calc4 = calc1 + calc2 - calc3 - 5.4;

  outResposta.textContent = calc4.toFixed(2) + "%";
}

function clearFields() {
    document.getElementById("inIdade").value = "";
    document.getElementById("inImc").value = "";
    document.getElementById("inPeso").value = "";
  }
