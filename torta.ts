/* ### ¡Gran Concurso de Tortas de Tres Arroyos! 🎂

Te toca ser jurado de un concurso de tortas, y el número de participantes puede variar. 
Tu tarea es pedir al usuario cuántos concursantes habrá y luego solicitar las puntuaciones de `Sabor`, `Presentación` y `Dificultad` para cada torta. 
Al final, debes determinar qué torta tiene el mayor puntaje. Y si hay empate? 🤔 En ese caso, informaremos que se produjo un empate (no es necesario indicar si
 fueron dos o mas empates ni entre que tortas es el empate, solo basta con indicar que se produjo empate si al menos existe uno).

## Funciones a implementar:
calcularPuntaje(sabor, presentacion, dificultad):
Recibe tres números entre 1 y 5 que representan las puntuaciones de una torta y devuelve la suma de esos números (el puntaje total del pastel).

determinarGanador():
Utiliza la librería readline-sync para pedir al usuario el número de participantes, luego solicita las puntuaciones de cada uno de ellos y usa la función
 calcularPuntaje para determinar la torta con el mayor puntaje.

*Si lo consideran necesario, pueden implementar funciones extra. */

import * as rs from 'readline-sync';


/* La funcion devuelve la sumatoria de las 3 puntuaciones de cada torta */
function calcularPuntaje(sabor: number, presentacion: number, dificultad: number) {
    return sabor + presentacion + dificultad;
}

function determinarGanador() {
    let participantes: number = rs.questionInt("Por favor, ingresa el numero de participantes: ");

    /* Variable para el puntaje mayor, una variable ganador para guardar cual participante fue y un booleano para cuando hay un empate*/
    let maxPuntaje: number = 0;
    let ganador: number = -1; /* Como inicializo la variable "i" dentro del for en 0, el ganador debe ser -1 ( para poder pisarla en caso de que el primer participante haya sido el mejor) */
    let hayEmpate: boolean = false;


    /* Repite tantas veces como participantes existentes */
    for (let i: number = 1; i <= participantes; i++) {

        let sabor: number = 0;
        let presentacion: number = 0;
        let dificultad: number = 0;

        while (sabor < 1 || sabor > 5) {
            console.log('participante n°: '+i)
            sabor = rs.questionInt('Ingrese un numero entre 1 y 5 para calificar el sabor: ' );
            if (sabor < 1 || sabor > 5) {
                console.log("El numero es incorrecto, va de nuevo...")
            }
        }
        while (presentacion < 1 || presentacion > 5) {
            presentacion = rs.questionInt('Ingrese un numero entre 1 y 5 para calificar la presentacion : ');
            if (presentacion < 1 || presentacion > 5) {
                console.log("El numero es incorrecto, va de nuevo...")
            }
        }
        while (dificultad < 1 || dificultad > 5) {
            dificultad = rs.questionInt('Ingrese un numero entre 1 y 5 para calificar la dificultad : ');
            if (dificultad < 1 || dificultad > 5) {
                console.log("El numero es incorrecto, va de nuevo...")
            }
        }



        /* Creamos una variable a la cual se le da el valor del retorno de calcularPuntaje */
        let puntajeTotal: number = calcularPuntaje(sabor, presentacion, dificultad);


        if (puntajeTotal > maxPuntaje) {
            maxPuntaje = puntajeTotal; // puntaje Ganador hasta el momento
            ganador = i;               // Ganador hasta el momento
            hayEmpate = false;
        } else if (puntajeTotal === maxPuntaje) {
            hayEmpate = true;
        }
    }
    if (hayEmpate) {
        console.log("Hay uno o mas empates de puntuación.")
    } else {
        console.log("La torta ganadora es la del participante " + ganador + " de " + maxPuntaje + " puntos");
    }

}

determinarGanador();

