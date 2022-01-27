const TAXA = 0.006371;

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

    var taxa1 = 0.000530916666666667 + 0.005;
    var calc1 =  valor1 * taxa1;
    var calc5 = periodo * calc1;
    var calc2 = valor1 + calc5;

    for (var i = 0; i > periodo; i++) {
        periodo += calc1
    }

    outValorInvestido.textContent = valor1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    outRendimento.textContent = calc5.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    outResposta3.textContent = calc2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function clearFields() {

    function clearFields() {

        document.getElementById("inValor").value = "";
        document.getElementById("inPeriodo").value = "";
    }
}