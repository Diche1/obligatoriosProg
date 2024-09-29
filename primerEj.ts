 import * as rs from 'readline-sync';

 /* 1) Crear un arreglo de letras e imprimirlo 
    2) Dado un arrat con nombre de tamaño 5 pedir al usuario 
    que ingrese un nombre y verificar si esta en el arreglo. 
    Imprimir el arreglo y si está o no en él

 */

    let arrayLetras:string []= new Array (5);


    let num:number=0;
    arrayLetras[0]='a';
    arrayLetras[1]='e';
    arrayLetras[2]='i';
    arrayLetras[3]='o';
    arrayLetras[4]='u';
    
    while(num<5){
        console.log("La letra en la posición "+ num + " es " + arrayLetras[num]);
        num++;
    }