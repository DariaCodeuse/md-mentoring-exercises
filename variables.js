/* 
  EJERCICIO 1
  1. Crea una variable y almacena tu nombre
  2. Crea una variable y almacena tu apellido paterno
  3. Crea una variable y almacena tu apellido materno
  4. Concatena las tres variables anteriores en una sola que se llame nombreCompleto
*/

var nombre = 'Karla';
var paterno = 'Díaz';
var materno = 'Aguilar';

const nombreCompleto = `${nombre} ${paterno} ${materno}`;

console.log(nombreCompleto);


/*
  EJERCICIO 2
  1. Crea una constante para almacenar un número
  2. Usa condicionales para saber si el número es positivo, negativo o cero
  3. Prueba con diferentes números
*/
const num = 0;
var tipo = '';

if (num > 0) {
  tipo = 'positivo';
} else if (num < 0) {
  tipo = 'negativo';
} else {
  tipo = 'cero';
}

console.log(`El número ${num} es ${tipo}`);

/*
  EJERCICIO 3
  Crea una variable llamada `year` para almacenar un año, luego escribe un programa que verifique si el año es bisiesto o no. Estas son las regla de decisión:

  El número es divisible por 400 o El número es múltiplo de 4 y no es múltiplo de 100
*/

var year = 1504;


if (year%400 == 0 || (year % 4 == 0 && year%100 != 0)) {
  console.log("Sí es año bisiesto");
} else {
  console.log("No es Año bisiesto");
}

/*
  EJERCICIO 4
  Escribe un programa que imprima los números del 1 al 100. Pero:

  1. Para los múltiplos de 3, imprime "Fizz" en lugar del número
  2. Para los múltiplos de 5, imprime "Buzz" en lugar del número y
  3. Para los múltiplos tanto de 3 y de 5, imprime "Fizz-Buzz"
*/

for (var i = 1; i<=100; i++) {
  if (i%3==0 && i%5==0) {
    console.log("Fizz-Buzz");
  } else if (i%5 == 0) {
    console.log("Buzz");
  } else if (i%3 == 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}