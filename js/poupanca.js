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

    outResposta.textContent = "Total Investido: " + valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    outResposta2.textContent = "Total Rendimento: " + calc4.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    outResposta3.textContent = "Valor Total: " + calc3.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function clearFields() {

    document.getElementById("inValor").value = "";
    document.getElementById("inPeriodo").value = "";
}