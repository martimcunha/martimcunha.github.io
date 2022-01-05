function calculoRegra(){
    var inValor1 = document.getElementById("inValor1");
    var inValor2 = document.getElementById("inValor2");
    var inValor3 = document.getElementById("inValor3");

    var valor1 = inValor1.value;
    var valor2 = inValor2.value;
    var valor3 = inValor3.value;

    var valor1a = parseFloat(valor1.replace(",", "."));
    var valor2a = parseFloat(valor2.replace(",", "."));
    var valor3a = parseFloat(valor3.replace(",", "."));

    if (valor1 == 0 || valor2 == 0 || valor3 == 0){
        alert("Por favor, preencha os dados corretamente.");
        inValor1.focus();
        return;
    }

    var calc1 = (valor2a*valor3a);
    var calc2 = calc1/valor1a;

    outResposta.textContent = "Valor de 'X' é: " + calc2.toFixed(2);
}

function clearFields() {

    document.getElementById("inValor1").value = "";
    document.getElementById("inValor2").value = "";
    document.getElementById("inValor3").value = "";
    document.getElementById("outResposta").value = "";
}