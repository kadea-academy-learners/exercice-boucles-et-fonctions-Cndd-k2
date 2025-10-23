[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/KsQG_EsW)
[![Button labeled Review Assignment Due Date in white text on a blue background with a calendar icon, conveying a sense of urgency and importance, surrounded by a clean digital interface](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/AnY7U9-M)[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/AnY7U9-M)


⚡️ JavaScript — Loops & Functions Exercises

Welcome to this JavaScript practice project 💻
Here you’ll find 10 small exercises designed to strengthen your logic, loops, and function-writing skills.
Each file is an independent challenge you can run, test, and improve.

📁 Project Structure
📦 projet-javascript-boucles-fonctions/
├── 01-direBonjour.js
├── 02-saluer.js
├── 03-multiplication.js
├── 04-estImpair.js
├── 05-max.js
├── 06-maxDeTrois.js
├── 07-compteARebours.js
├── 08-somme.js
├── 09-factorielle.js
├── 10-nombreDeVoyelle.js
├── utils/
├── tests/
├── package.json
├── yarn.lock
├── .gitignore

🧩 Exercises Overview
🟢 1. direBonjour()

Goal:
Display “Bonjour le monde” in the console.

Signature:

function direBonjour() -> void


Example:

direBonjour(); // Bonjour le monde

🟢 2. saluer(nom)

Goal:
Display a personalized greeting.

Rules:

If nom is provided → "Bonjour, [nom]"

If not → "Bonjour, inconnu"

Example:

saluer("Candie"); // Bonjour, Candie
saluer(); // Bonjour, inconnu

🧮 3. multiplication(a, b)

Goal:
Return the result of a * b.

Rules:

If arguments are missing or not numbers → return undefined.

Example:

multiplication(3, 4); // 12
multiplication("a", 5); // undefined

⚖️ 4. estImpair(n)

Goal:
Check if a number is odd.

Rules:

Return true if n is odd.

Return false if n is even.

Return null if input is invalid or not a number.

Example:

estImpair(5); // true  
estImpair(8); // false  
estImpair("x"); // null

🔢 5. max(a, b)

Goal:
Return the larger of two numbers.

Rules:

Return null if one argument isn’t a number.

Return "Les deux nombres sont égaux" if both are the same.

Otherwise, return the larger number.

Example:

max(4, 7); // 7  
max(5, 5); // "Les deux nombres sont égaux"  
max("a", 2); // null

🧮 6. maxDeTrois(a, b, c)

Goal:
Return the largest of three numbers.

Rules:

If all three are equal → "Les trois nombres sont égaux".

If one isn’t a number → return null.

Otherwise, return Math.max(a, b, c).

Example:

maxDeTrois(3, 9, 5); // 9  
maxDeTrois(4, 4, 4); // "Les trois nombres sont égaux"  
maxDeTrois(1, "a", 2); // null

⏳ 7. compteARebours()

Goal:
Display a countdown from 10 to 1 in the console.

Signature:

function compteARebours() -> void


Example output:

10
9
8
7
6
5
4
3
2
1

➕ 8. somme(n)

Goal:
Return the sum of all integers from 1 to n.

Rules:

If n is negative or invalid → return 0.

Example:

somme(4); // 10  (1 + 2 + 3 + 4)
somme(-2); // 0

✳️ 9. factorielle(n)

Goal:
Return the factorial of n.

Rules:

If n is invalid or negative → return 0.

Example: factorielle(5) → 120.

Example:

factorielle(5); // 120  
factorielle(-1); // 0

💬 10. nombreDeVoyelles(phrase)

Goal:
Count the number of vowels (a, e, i, o, u, y) in a given string.
The function should be case-insensitive.

Example:

nombreDeVoyelles("bonjour"); // 3  
nombreDeVoyelles("Hello World"); // 3  
nombreDeVoyelles("SKY"); // 1

⚙️ How to Run

Clone the repo

git clone <repository_url>
cd projet-javascript-boucles-fonctions


Install dependencies

yarn install


or

npm install


Run individual files

node 01-direBonjour.js
node 05-max.js
node 09-factorielle.js


Run all tests

yarn test


or

npm test

💡 Pro Tips

Always validate your inputs.

Avoid hard-coding outputs — use logic.

Use loops (for, while) where it makes sense.

Clean, readable code > messy code that just works.

If a test fails, read the error message. It’s basically telling you what’s wrong.

🏁 Goal

By completing these 10 exercises, you’ll master:

Writing reusable functions 🧠

Using loops and conditionals effectively 🔁

Validating and manipulating data types 🔍

Building logic step by step 💪