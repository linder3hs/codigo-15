/**
¿ES UN ANAGRAMA?
Enunciado: Escribe una función que reciba dos palabras (String) y 
retorne verdadero o falso (Bool) según sean o no anagramas.
Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.
NO hace falta comprobar que ambas palabras existan.

Dos palabras exactamente iguales no son anagrama.
*/

// 1 toLowerCase() => RomA : roma
// 2 split("") => roma: ['r', 'o', 'm', 'a']
// 3 sort() => ['r', 'o', 'm', 'a'] : ['a', 'm', 'o', 'r']
// 4 join("") => ['a', 'm', 'o', 'r'] : 'amor'

const sortText = (word) => word.toLowerCase().split("").sort().join("");

function isAnagram(text1, text2) {
  if (text1.toLowerCase() === text2.toLowerCase()) return false;

  return sortText(text1) === sortText(text2);
}

console.log(isAnagram("Hola", "hola")); // false
console.log(isAnagram("RomA", "orma")); // true
/**
 * roma => amor
 * orma => amor
 *
 * Si despues de ordenar ambas palabras estan son iguales entonces es un anagrama
 */
console.log(isAnagram("rome", "orma")); // false
