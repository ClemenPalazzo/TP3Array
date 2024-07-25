
function esParOImpar(numero) {
    if (numero % 2 === 0) {
        return `${numero} es Par`;
    } else {
        return `${numero} es Impar`;
    }
}

const resultados = [];

function verificarParImpar() {
    const numero = parseInt(document.getElementById('numero').value);
    const resultado = esParOImpar(numero);
    

    resultados.push(resultado);


    mostrarResultados();
}


function mostrarResultados() {
    const listaResultados = document.getElementById('resultados');
    listaResultados.innerHTML = '';
    resultados.forEach(resultado => {
        const li = document.createElement('li');
        li.textContent = resultado;
        listaResultados.appendChild(li);
    });
}
