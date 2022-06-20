var botaoCalcula = document.querySelector("#calcula-imc");
var resultadoSpan = document.getElementById("resultado");
var resultadoStatus = document.getElementById("resultado-status");

botaoCalcula.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-imc");

    var altura = form.altura.value;
    var peso = form.peso.value;

    if (altura > 0 && peso > 0) {
        displayResultado = document.getElementById("campo-resultado");
        displayResultado.classList.remove("esconder");

        var imc = calculaImc(altura, peso);
        var resultado = retornaMensagem(imc);

        if (resultadoSpan && resultadoStatus) {
            resultadoSpan.textContent = '';
            resultadoStatus.textContent = '';
        }

        resultadoSpan.textContent += imc;
        resultadoStatus.textContent += resultado;
    }

});

function calculaImc(altura, peso) {
    return (peso / (altura * altura)).toFixed(2);
}

function retornaMensagem(imc) {
    if (imc < 18.5) {
        return "Abaixo do Peso";
    } else if (imc < 24.9) {
        return "Peso Normal";
    } else if (imc < 29.9) {
        return "Sobrepeso";
    } else if (imc < 34.9) {
        return "Obesidade Grau I";
    } else if (imc < 39.9) {
        return "Obesidade Grau II";
    } else if (imc > 39.9) {
        return "Obesidade Grau III";
    }
}