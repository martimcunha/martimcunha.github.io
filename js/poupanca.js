const TAXA = 0.004586

function poupanca() {
    var inValor = document.getElementById("inValor");
    var inPeriodo = document.getElementById("inPeriodo");

    var valor = Number(inValor.value);
    var periodo = Number(inPeriodo.value);

    if (valor == 0 || isNaN(valor)){
        alert("Por favor, insira os dados corretamente.");
        inValor.focus();
        return;
    }

    var calc1 =  (valor * TAXA) * periodo;
    var calc2 = valor + calc1;
    var calc3 = valor + (calc2 * TAXA) * periodo;
    var calc4 = (valor - calc3)* (-1);

    for (var i = 0; i > periodo; i++) {
        periodo += calc1
    }

    outResposta.textContent = "Total Investido R$: " + valor.toFixed(2);
    outResposta2.textContent = "Total Rendimento R$: " + calc4.toFixed(2);
    outResposta3.textContent = "Valor Total R$: " + calc3.toFixed(2);
}

function clearFields() {

    document.getElementById("inValor").value = "";
    document.getElementById("inPeriodo").value = "";
}