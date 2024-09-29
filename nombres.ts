/* 2) Dado un array con nombres de tamaño 5, pedir
al usuario que ingrese un nombre y verificar si está
en el arreglo. Imprimir el arreglo y si está o no en
él. */

import * as rs from 'readline-sync';
let nombres: string[] = new Array(5);

/* let pedir:string=rs.question("Ingrese un nombre.");
let contador:number=0;
while(contador<5){
    nombre[contador]=pedir;
    console.log("El nombre ubicado en la posicion" + contador + "del arreglo es"+ nombre[contador] );
    contador++;
} */

nombres[0] = "franco";
nombres[1] = "pepe";
nombres[2] = "luciana";
nombres[3] = "franco";
nombres[4] = "henrique";
let existe: boolean = false
let pedir: string = rs.question("Ingrese un nombre: ")
let repetido: string = 'No se repite en el arreglo';
while (!existe) {
    let contador = 0;
    for (let i: number = 0; i < nombres.length; i++) {
        console.log("El nombre situado en la posición " + i + " del arreglo es :" + nombres[i]);
        if (pedir === nombres[i]) {
            contador++;
            repetido = "El nombre ingresado ya esta en el arreglo "+ contador+" veces";
        }
    }
    existe = true;
}
console.log("El nombre ingresado por el usuario fue : " + pedir);
console.log(repetido);
