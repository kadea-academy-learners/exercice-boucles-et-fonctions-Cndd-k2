/*
  Énoncé :
  Écrire une fonction `somme(n)` qui retourne la somme des entiers de 1 à n inclus.
  - Exemple : somme(4) => 10
  - Si n est négatif ou invalide, la fonction doit retourner 0

  Signature attendue :
    function somme(n) -> number

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function somme(n) {
  if (typeof n !== 'number' || n < 0) {
    return 0;
  }

  let total = 0;
  let i = 1;

  while (i <= n) {
    total = total + i;
    i++;
  }

  return total;
}

console.log(somme(10));

// Ne pas modifier la ligne ci-dessous
module.exports = { somme }
