function calcJuros(){
    var inValor = document.getElementById("inValor");
    var inTaxa = document.getElementById("inTaxa");
    var inPeriodo = document.getElementById("inPeriodo");

    var valor = inValor.value;
    var taxa = inTaxa.value;
    var periodo = Number(inPeriodo.value);

    var valor1 = parseFloat(valor.replace(",", "."));
    var taxa1 = parseFloat(taxa.replace(",", "."));

    if (valor == 0 || taxa == 0 || periodo == 0 || isNaN(periodo)){
        alert("Por favor, preencha corretamente.");
        inValor.focus();
        return;
    }

    calc1 = valor1 * (taxa1/100);
    calc2 = (calc1 * periodo) + valor1;

    outResposta.textContent = "Valor Total: " + calc2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function clearFields() {

    document.getElementById("inValor").value = "";
    document.getElementById("inPeriodo").value = "";
    document.getElementById("inTaxa").value = "";
}