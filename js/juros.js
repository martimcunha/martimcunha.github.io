function calcJuros(){
    var inValor = document.getElementById("inValor");
    var inTaxa = document.getElementById("inTaxa");
    var inPeriodo = document.getElementById("inPeriodo");

    var valor = Number(inValor.value);
    var taxa = Number(inTaxa.value);
    var periodo = Number(inPeriodo.value);

    if (valor == 0 || taxa == 0 || periodo == 0 || isNaN(valor) || isNaN(taxa) || isNaN(periodo)){
        alert("Por favor, preencha corretamnete.");
        inValor.focus();
        return;
    }

    calc1 = valor * (taxa/100);
    calc2 = (calc1 * periodo) + valor;

    outResposta.textContent = "Valor Total: " + calc2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function clearFields() {

    document.getElementById("inValor").value = "";
    document.getElementById("inPeriodo").value = "";
    document.getElementById("inTaxa").value = "";
}