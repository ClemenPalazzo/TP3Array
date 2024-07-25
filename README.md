# Ejercicios Arrays en JavaScript TP3

## ¿Qué es un Array?
Un array es una estructura de datos que permite almacenar múltiples valores en una sola variable. Los arrays son útiles para almacenar listas de elementos, como números, cadenas de texto u objetos. En JavaScript, un array se puede declarar utilizando la sintaxis de corchetes (`[]`).

### Características de un Array:
- **Indexación**: Los elementos de un array se acceden mediante índices. El primer elemento tiene un índice de 0.
- **Tamaño**: Un array puede tener cualquier cantidad de elementos.
- **Homogeneidad**: En JavaScript, los arrays pueden contener elementos de distintos tipos.

## Ejemplos de Ejercicios

### 1. Información sobre una cadena de texto
Esta función determina si una cadena de texto está formada solo por mayúsculas, solo por minúsculas o por una mezcla de ambas. Utilizamos un array para almacenar y mostrar múltiples resultados.

### git clone https://github.com/tu-usuario/ejemplos-arrays-javascript.git


```javascript
// Array para almacenar los resultados
const resultadosTexto = [];

// Función para determinar el tipo de cadena de texto
function tipoDeCadena(cadena) {
    if (cadena === cadena.toUpperCase()) {
        return 'La cadena está formada solo por mayúsculas';
    } else if (cadena === cadena.toLowerCase()) {
        return 'La cadena está formada solo por minúsculas';
    } else {
        return 'La cadena está formada por una mezcla de mayúsculas y minúsculas';
    }
}

// Ejemplo de uso
const texto = "Hola Mundo";
const resultado = tipoDeCadena(texto);
resultadosTexto.push(resultado);
console.log(resultadosTexto);


