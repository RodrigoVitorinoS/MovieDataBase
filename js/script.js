import { API_KEY } from "./config.js";
import { adicionarFilmesNaTela } from "./adicionarFilmesNaTela.js";
import { checkCabecalho } from "./mostrarFavoritos.js";
import { pesquisar } from "./pesquisarFilmes.js";
import { titulo } from "./tituloPopulares.js";

export let filmes = document.querySelector('.filmes')
export let filmesPopulares = []


export let API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`;

export async function getPopularMovies(API_URL) {
    try{
        
        const fetchResponse = await fetch(API_URL);
        filmesPopulares = await fetchResponse.json();
        filmesPopulares = filmesPopulares.results;
        adicionarFilmesNaTela(filmesPopulares);
        
    }catch(error){
        console.error("Erro ao buscar os filmes:", error);
    }

}

getPopularMovies(API_URL);





