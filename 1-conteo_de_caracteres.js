// Conteo de caracteres:
// Dada una cadena de texto y luego muestra el número de caracteres que contiene esa cadena.

// Función contar caracteres. Retorna la longitud de la cadena de texto
function contarCaracteres(texto) {
    return texto.length;
}

// Cadena de texto a utilizar
const cadena = "Hola, Mundo!";
// Numero de cantidad de caracteres
const cantidadCaracteres = contarCaracteres(cadena);

// Mostrar resultado en consola
console.log(`La cadena "${cadena}" tiene ${cantidadCaracteres} caracteres.`);
