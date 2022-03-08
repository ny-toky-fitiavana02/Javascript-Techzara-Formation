// Exercice 1
console.log("Majeur et mineur:");

let age = 10;
    if (age >= 18){ 
        console.log('tu es majeur!')
    } 
    else if  (age <= 18) { 
        console.log('tu es mineur')
    } 
    else { 
        console.log('erreur')
    };

console.log(age >= 18? 'tu es majeur!':'tu es mineur');

console.log("\n");

// Exercice 2
console.log("Nombre de 1 à 10 :");

for(let i=1; i<=10; i++) {
        console.log(i);
}

console.log("\n");

// Exercice 3
console.log("Nombre de 1 à 5 :");

for(let i = 1; i<11; i++){ 
    if (i<= 5) 
        console.log(i)};

console.log("\n");

// Exercice 4

console.log("Nombre divisible par 2 (pair) entre 0 et 10 :");

for(let i=0; i<=10; i++) {
    if(i - 2 * parseInt(i / 2) === 0){
        console.log(i);
    }   
}

console.log("\n");

// Atao console.log ny nombre factoriel depuis 5
// Exercice 5

console.log("Factoriel de 5 :");

let x=1;
for(let i=5; i>1; i--) {
    x=x*i;  
}
        console.log(x);
