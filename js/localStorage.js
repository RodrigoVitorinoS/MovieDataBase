export let filmesCurtidos = JSON.parse(localStorage.getItem('curtidos')) || []

export function atualizarCurtidos(){
    localStorage.setItem('curtidos', JSON.stringify(filmesCurtidos))

}