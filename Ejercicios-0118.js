/* Ejercicio 1:
 Implementar la función restArray: a partir de un array en el cual cada posición puede ser un único
 número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
 El array será recibido por parámetro.
 Ejemplo:
    const array = [3, [7, [5,6]], [9,6], 4];
    restArray(array); --> Debería devolver 40 y al resultado lo restas por la cantidad de arrays, sin contar al padre.
 Ejemplo:
      40-3 = 37
 Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
 [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray] */
var restArray = function(array){
  // Tu código acá
  var suma = 0;
  var contArray = 0;
  for (var i=0; i<array.length; i++){
    if(Array.isArray(array[i]) && array[i].length > 0){
        contArray = contArray + 1;
        suma = suma + restArray(array[i])
    }
    else
    suma = suma + array[i];
  }
  if (suma > 0) return suma - contArray;
  return - 1;
}
 
/* Ejercicio 2:
 Implementar la función mayorMenorOIgual que recibe un parámetro
 (numFijo) y que debe retornar otra función con otro (parametro)
 En caso de que la suma de ambos parámetros sea menor a 10 retorna un string --> "la suma es menor a 10",
 en caso de que sea mayor a 10 retorna un string --> "la suma es mayor a 10"
 en caso de que sea igual a 10 retorna 10
 y si el parametro numFijo es igual a null o undefined debe retornar un arreglo vacio. */

function mayorMenorOIgual(numFijo) {
  // Tu código aca:
  return function (otro){
    if (numFijo === null || numFijo === undefined)  return [];
    if (numFijo+otro < 10) return "la suma es menor a 10";
    if (numFijo+otro > 10) return "la suma es mayor a 10";
    if (numFijo+otro === 10) return 10;
  }
}

