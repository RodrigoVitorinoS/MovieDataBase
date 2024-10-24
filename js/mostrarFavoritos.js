import { adicionarFilmesNaTela } from "./adicionarFilmesNaTela.js"
import { getPopularMovies, API_URL } from "./script.js"
import { filmesCurtidos } from "./localStorage.js"

export const checkCabecalho = document.getElementById("mostrar-favoritos")

checkCabecalho.addEventListener('click', function(){
    if(checkCabecalho.checked){
        adicionarFilmesNaTela(filmesCurtidos)
    } else {
        getPopularMovies(API_URL)
    }
})