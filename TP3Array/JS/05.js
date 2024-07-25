
const resultados = [];

function tipoDeCadena(cadena) {
    if (cadena === cadena.toUpperCase()) {
        return 'La cadena está formada solo por mayúsculas';
    } else if (cadena === cadena.toLowerCase()) {
        return 'La cadena está formada solo por minúsculas';
    } else {
        return 'La cadena está formada por una mezcla de mayúsculas y minúsculas';
    }
}

function mostrarInformacion() {
    const texto = document.getElementById('texto').value;
    const resultado = tipoDeCadena(texto);
    
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
