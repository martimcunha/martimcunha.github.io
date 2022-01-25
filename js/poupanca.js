const TAXA = 0.004586

function poupanca() {
    var inValor = document.getElementById("inValor");
    var inPeriodo = document.getElementById("inPeriodo");

    var valor = inValor.value;
    var periodo = Number(inPeriodo.value);

    var valor1 = parseFloat(valor.replace(",", "."));

    if (valor == 0){
        alert("Por favor, insira os dados corretamente.");
        inValor.focus();
        return;
    }

    var calc1 =  (valor1 * TAXA) * periodo;
    var calc2 = valor1 + calc1;
    var calc3 = valor1 + (calc2 * TAXA) * periodo;
    var calc4 = (valor1 - calc3)* (-1);

    for (var i = 0; i > periodo; i++) {
        periodo += calc1
    }

    outResposta.textContent = valor1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    outResposta2.textContent = calc4.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    outResposta3.textContent = calc3.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function clearFields() {

    //document.getElementById("inValor").value = "";
    //document.getElementById("inPeriodo").value = "";
}