import { filmes } from "./script.js";
import { filmesCurtidos, atualizarCurtidos } from "./localStorage.js";

export function adicionarFilmesNaTela(filmesPopulares){
    
    filmes.innerHTML = '' 
    filmesPopulares.forEach(filme => {
        filmes.innerHTML +=
        `
        <div class="movie">
            <div class="container__foto_nome">
                <img src=https://image.tmdb.org/t/p/w500${filme.poster_path} alt="foto do filme ${filme.title}" class="movie-img">
                <div class="container-filme">
                    <span class="nome-filme">${filme.title}  (${new Date(filme.release_date).getFullYear()})</span>
                    <div class="icones-filme">
                        <div class="container-icone">
                            <i class="bi bi-star-fill star" ></i> ${filme.vote_average.toFixed(2)}
                        </div>
                        <div class="container-icone">
                            <label>
                                <input type="checkbox" class="checkbox-filme" id = "${filme.id}">
                                <i class="bi bi-suit-heart heart-uncheck"></i>
                                <i class="bi bi-suit-heart-fill heart-check"></i>
                            </label>
                            Favoritar
                        </div>
                    </div>
                </div>
            </div>
        <p class="filme-descricao">${filme.overview}</p>
        </div> 
        `
        
    });
    
    let checkboxes = document.querySelectorAll(".checkbox-filme");

    
    checkboxes.forEach(checkbox =>{

        filmesCurtidos.forEach(filme=>{            
                if (checkbox.id ===`${filme.id}`){
                    checkbox.checked = true
                }
                
        })
        
        
        checkbox.addEventListener('click', function(){
            if (checkbox.checked){
                filmesCurtidos.push(filmesPopulares.find(filme => filme.id === Number(checkbox.id)))
                atualizarCurtidos(filmesCurtidos)
            } else {
                let novosFilmesCurtidos = filmesCurtidos.filter(filme => filme.id !== Number(checkbox.id))
                atualizarCurtidos(novosFilmesCurtidos)
            }
            
            
            

        })
    })
    

    
}