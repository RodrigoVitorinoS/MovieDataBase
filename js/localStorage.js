export let filmesCurtidos = JSON.parse(localStorage.getItem('curtidos')) || []

export function atualizarCurtidos(novosFilmes){
    filmesCurtidos = novosFilmes
    localStorage.setItem('curtidos', JSON.stringify(filmesCurtidos))

}