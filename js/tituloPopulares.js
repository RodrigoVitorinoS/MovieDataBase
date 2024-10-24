import { getPopularMovies, API_URL } from "./script.js"
import { checkCabecalho } from "./mostrarFavoritos.js"


export const titulo = document.querySelector('.titulo')

titulo.addEventListener('click', ()=>{
    checkCabecalho.checked = false
    getPopularMovies(API_URL)

})