/*
 *
 * Ejercicio 1: Implemente una funcion que retorne la suma de todos los elementos en el arreglo.
 *
 * Autor: Santiago Rivera Escobar Cod.1664066
 * Fecha: 14/09/2018
 *
 */
 
var arraySum = function(array) {
 
 var suma=0;

   for (var i = array.length-1;i>=0; i--) {
   	
       suma += array[i];

   }

  return suma;
  
};

// Prueba (No modificar)

var a = [7, 6, 5, 4, 3];
var b = [-3, -4, -5, -6, -7];
var c = [33];

if (arraySum(a) === 25 &&
    arraySum(b) === -25 &&
    arraySum(c) === 33) {
  console.log('Ejercicio 1 paso la prueba!');
 
} else {
  console.log('Ejercicio 1 no paso la prueba!');
}
