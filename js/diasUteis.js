function calculoDias() {
    var D1 = document.getElementById("D1");
    var D2 = document.getElementById("D2");

    var data1 = D1.value;
    var data2 = D2.value;

    var inicial = new Date();
    var final = new Date();

    var partes = data1.split("-");
    final.setDate(Number(partes[2]));
    final.setMonth(Number(partes[1]) - 1);
    final.setFullYear(Number(partes[0]));

    var partes2 = data2.split("-");
    inicial.setDate(Number(partes2[2]));
    inicial.setMonth(Number(partes2[1]) - 1);
    inicial.setFullYear(Number(partes2[0]));

    var dias = final - inicial;

    if (dias > 0) {
        var diasCorridos = Math.round(dias / 86400000);
    }

    outResposta.textContent = -1*(dias / 86400000);

}


var novaData = new Date(dataBase.valueOf());
var diasUteisRemanescente;
var direcao;

// Remove decimais 
if (dias !== parseInt(dias, 10)) {
    throw new TypeError('AdicionaDiaUtil utiliza apenas dias uteis.');
}

// Se zero dias, não realiza mudança 
if (dias === 0) { return dataBase; }

//Decide soma ou subtração 
direcao = dias > 0 ? 1 : -1;

//decide numero de iterações
diasUteisRemanescente = Math.abs(dias);

// Chamada recursiva
novaData = calculaNovaData(novaData, diasUteisRemanescente, direcao);

//


function calculaNovaData(data, dias, direcao) {
    if (dias == 0) {
        return data;
    }

    var isFimDeSemana;

    // adiciona/subtrai um dia 
    data.setDate(data.getDate() + direcao);
    //Verifica se o dia é util
    if (isSabadoUtil) {
        isFimDeSemana = data.getDay() in { 0: 'Sunday' };
    }
    else {
        isFimDeSemana = data.getDay() in { 0: 'Sunday', 6: 'Saturday' };
    }
    //Se for util remove um dia 
    if (!isFimDeSemana) { dias--; }

    return calculaNovaData(data, dias, direcao);
}

//

public static int GetDifDias(DateTime initialDate, DateTime finalDate)
        {
            var days = 0;
            var daysCount = 0;
            days = initialDate.Subtract(finalDate).Days;

            if (days < 0)
                days = days * -1;

            for (int i = 1; i <= days; i++)
            {
                initialDate = initialDate.AddDays(1);

                if (initialDate.DayOfWeek != DayOfWeek.Sunday &&
                    initialDate.DayOfWeek != DayOfWeek.Saturday)
                    daysCount++;
            }
            return daysCount;
        }