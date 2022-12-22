// Code testé sur le terminal avec la commande : nodejs app.js


// Définition de variables

let nom = "john";
console.log(nom);

nom = "Jane";
console.log(nom);

// Boucles 

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// console.log()

console.log("Bonjour tout le monde!");
console.log(3 + 4);
console.log(nom);

// Concaténation de chaînes de caractères

let firstName = "John";
let lastName = "Doe";
console.log(`${firstName} ${lastName}`);

// Conditions

let age = (Math.floor(Math.random() * 100))
console.log(age)
if (age >= 18) {
    console.log("Vous êtes majeur");
} else {
    console.log("Vous êtes mineur");
};

// Avancé

// Créations et parcours d'un tableau

let couleurs = ["rouge", "vert", "bleu", "jaune", "orange"];

for (let couleur = 0; couleur < couleurs.length; couleur++) {
    console.log(couleurs[couleur]);
};

// Utilisation de Array.push() et Array.pop()

let numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers)
numbers.pop()
console.log(numbers)

// Fontions

// 1.

function defaut(divisible) {
    if (divisible % 2 == 0) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}

defaut(Math.floor(Math.random() * 100))

// 2.


// 3.

function reverse(string) {
    return Array.from(string).reverse().join("");
}

console.log(reverse("Bonjour"))