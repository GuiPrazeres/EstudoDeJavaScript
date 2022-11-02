import modificador from './modificador.js';
import ingredientes from './ingredientes.js';

let ingredientesOrdenados = modificador.ordenar(ingredientes, 'nome');
let conteinerIngredientes = document.getElementById('container-ingredientes');

for(let ingrediente of ingredientesOrdenados){
    let textoHTML =
        `<div class="ingrediente">
            <img src="img/${ingrediente.img}" />
            <p class"nome-ingrediente">${ingrediente.nome}</p>
        </div>`
    ;
    conteinerIngredientes.innerHTML += textoHTML;
}



