/* EJERCICIO ENTREGABLE – 28/10

Implemente un algoritmo de
ordenamiento con el método Bubble
Sort, para que ordene un arreglo de
longitud N en orden descendente. 

*/

import * as rs from 'readline-sync';


principal();



function principal() {
    // Solicitar al usuario el tamaño del arreglo
    const n: number = parseInt(rs.question("Ingrese el tamaño del arreglo: "));

    // Crear un arreglo aleatorio con números del 1 al 100
    const arregloBurbuja: number[] = generarArregloAleatorio(n);
    console.log("Arreglo original:", arregloBurbuja);

    // Ordenar el arreglo en orden descendente
    const arregloOrdenado = burbuja(arregloBurbuja, n);
    console.log("Arreglo ordenado (descendente):", arregloOrdenado);

    function generarArregloAleatorio(n: number): number[] {
        const arreglo: number[] = [];
        for (let i = 0; i < n; i++) {
            arreglo.push(Math.floor(Math.random() * 100) + 1); // Números aleatorios del 1 al 100
        }
        return arreglo;
    }

}

// Algoritmo Bubble Sort para ordenar en orden descendente
function burbuja(arreglo: number[], cantidad: number): number[] {
    let i: number, j: number;
    for (i = 0; i < cantidad - 1; i++) {
        for (j = 0; j < cantidad - i - 1; j++) {
            if (comparar(arreglo, j, j + 1) == -1) { // Cambiar para orden descendente
                intercambiar(arreglo, j, j + 1);
            }
        }
    }
    return arreglo;
}


function comparar(arreglo: number[], i: number, j:
    number): number {
    let comparacion: number;
    if (arreglo[i] === arreglo[j]) {
        comparacion = 0;
    } else if (arreglo[i] < arreglo[j]) {
        comparacion = -1;
    } else {
        comparacion = 1;
    }
    return comparacion;
}


function intercambiar(arreglo: number[], i: number, j: number) {
    let aux: number;
    aux = arreglo[i];
    arreglo[i] = arreglo[j];
    arreglo[j] = aux;
}

