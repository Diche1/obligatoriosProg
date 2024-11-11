
const paragraph: string = "Urania. Qué nombre. A la gente le gusta, le parece sonoro, original, raro. A ella también, aunque le evoca sólo cosas tristes. Todo le evoca cosas tristes, ahora que ha vuelto. Pero ¿cuándo no, desde que se fue de esta ciudad, a la que creía no volvería nunca? ¿Y cómo era posible que alguien se llamara así en una familia de dominicanos católicos, que adoraban a la Virgen del Rosario y a la Virgen de Altagracia? Su padre le contó que su madre era quien escogió su nombre. Urania: la Musa de la astronomía. Nadie se atrevió a contradecirla. A él le parecía bien, se lo dijo como si la elección del nombre hubiera sido cosa de poca importancia. En aquellos días no había problemas en la casa. Las cosas cambiaron después, claro. Cambiaron tanto.";

const searchTerm = "urania";
const cantidad = howManyTextInPara(paragraph, searchTerm);

console.log(`La palabra "${searchTerm}" aparece ${cantidad} veces en el texto.`);

//devuelve true si searchTerm se encuentra en fullText
function isTextInPara(fullText: string, searchTerm: string): boolean {
  return fullText.toLowerCase().includes(searchTerm.toLowerCase());
}

//completar la funcion para que devuelva la cantidad de veces que searchTerm aparece dentro de fullText 
function howManyTextInPara(fullText: string, searchTerm: string): number {
  // Convertimos ambos a minúsculas para hacer la búsqueda insensible a mayúsculas
  const lowerFullText = fullText.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();

  // RegExp hace referencia a una expresion regular ( que la aclaremos dentro del parentesis, la letra 'g' como parametro tiene significado global)
  /* \\b es utilizado para delimitar la palabra que buscamos ( sino tambien va a contar palabras compuestas con la que nosotros buscamos ) */
  const matches = lowerFullText.match(new RegExp(`\\b${lowerSearchTerm}\\b`, "g"));

  // Si no hay coincidencias, matches será null, entonces devolvemos 0
  return matches ? matches.length : 0;
}