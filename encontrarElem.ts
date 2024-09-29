/*
Estructuras de Datos

Encontrar el elemento más grande del arreglo

Dado el siguiente arreglo
[4,7,9,3,1,45,67,23,29,78,11,16]
- Crear un programa que encuentre cuál es el número
más grande del arreglo e imprimirlo por consola
- Almacenar el número más grande en una variable
global y pasarlo a una función para determinar si el
número es par o impar */

import * as rs from 'readline-sync';

/* let array = new Array();/* 
 */
let array = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16];
let maxNum: number = 0;
let posicion:number=0;

maxNumero(array, maxNum, posicion);



/* Funcion para descubrir el numero Max del arreglo e imprimirlo por consola */

function maxNumero(array:number[], maxNum:number, posicion:number) {
    for (let i: number = 0; i < array.length; i++) {
        if (maxNum < array[i]) {
            maxNum = array[i];
            posicion=i;
        }
    }
    console.log("El numero mas grande del arreglo es : "+array[posicion]+ " en la posición : "+posicion);
    esPar(maxNum);
}

/* Funcion para saber si es Par o Impar */
function esPar(maxNum:number) {
    let par=maxNum/2;
    if(par===0){
        console.log(maxNum +" es un número Par. ");
    }else{
        console.log(maxNum +" es un número impar. ");
    }
}
