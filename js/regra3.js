function calculoRegra(){
    var inValor1 = document.getElementById("inValor1");
    var inValor2 = document.getElementById("inValor2");
    var inValor3 = document.getElementById("inValor3");

    var valor1 = Number(inValor1.value);
    var valor2 = Number(inValor2.value);
    var valor3 = Number(inValor3.value);

    if (valor1 == 0 || isNaN(valor1) || valor2 == 0 | isNaN(valor2) || valor3 == 0 | isNaN(valor3)){
        alert("Por favor, preencha os dados corretamente.");
        inValor1.focus();
        return;
    }

    var calc1 = (valor2*valor3);
    var calc2 = calc1/valor1;

    outResposta.textContent = "Valor de 'X' é: " + calc2.toFixed(2);
}

function clearFields() {

    document.getElementById("inValor1").value = "";
    document.getElementById("inValor2").value = "";
    document.getElementById("inValor3").value = "";
    document.getElementById("outResposta").value = "";
}