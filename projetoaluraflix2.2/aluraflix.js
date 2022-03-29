function adicionarFilme() {
    var filmeFavorito = document.getElementById("filme").value;
    if (filmeFavorito.endsWith(".jpg")) {
        listarFilmeNaTela(filmeFavorito)
    } else {
        console.error("Endereço de filme invalido")
    }
    document.getElementById("filme").value ="";
}

function listarFilmeNaTela(filme) {
    var elementoFilmeFavorito = "<img src=" + filme + ">"
    var elementolistaFilmes = document.getElementById("listaFilmes")
    elementolistaFilmes.innerHTML = elementolistaFilmes.innerHTML + elementoFilmeFavorito;

}