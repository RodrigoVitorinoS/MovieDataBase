import { checkCabecalho } from "./mostrarFavoritos.js";
import { getPopularMovies } from "./script.js";
import { API_KEY } from "./config.js";

export const pesquisar = document.getElementById('pesquisar-filme');

pesquisar.addEventListener('keypress', async function(event){
    if(event.key === 'Enter'){
        event.preventDefault();
        checkCabecalho.checked = false
        let filmePesquisa = pesquisar.value.trim();
        let API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${filmePesquisa}&language=pt-BR&page=1`;
        getPopularMovies(API_URL);
        pesquisar.value = ''


    }
})