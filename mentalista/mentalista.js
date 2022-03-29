var numeroSecreto = parseInt(Math.random() * 11);

function chutar() {
    var elementoResultado = document.getElementById("resultado")
    var chute = parseInt(document.getElementById("valor").value);
    console.log(chute);
    if (chute == numeroSecreto) {
        elementoResultado.innerHTML = "Parabéns, Você acertou!";
    } else if (chute > 10 || chute < 0) {
        elementoResultado.innerHTML = "Você deve digitar de 0 a 10";
    } else {
        elementoResultado.innerHTML = "Infelizmente, você errou! O número secreto é:" + numeroSecreto;
    }
}

