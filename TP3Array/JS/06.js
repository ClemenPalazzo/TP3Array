
const resultadosTexto = [];


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
    
 
    resultadosTexto.push(resultado);

    mostrarResultadosTexto();
}

function mostrarResultadosTexto() {
    const listaResultados = document.getElementById('resultadosTexto');
    listaResultados.innerHTML = '';
    resultadosTexto.forEach(resultado => {
        const li = document.createElement('li');
        li.textContent = resultado;
        listaResultados.appendChild(li);
    });
}

function calcularPerimetro() {
    const ladoA = parseFloat(document.getElementById('ladoA').value);
    const ladoB = parseFloat(document.getElementById('ladoB').value);
    const perimetro = 2 * (ladoA + ladoB);
    
  
    const resultadoPerimetro = document.getElementById('resultadoPerimetro');
    resultadoPerimetro.textContent = `El perímetro del rectángulo es: ${perimetro}`;
}
