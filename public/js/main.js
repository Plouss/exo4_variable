// method string

let phrase = "j'aime les cactus bien vert qui piquent"
// compter le nombre de carctère dans un string
console.log(phrase.length);
phrase = phrase.trim() //supprimer les espaces au début au début et à la fin  d'un string (trimEnd) pour uniquement supprimer les espaces à la fin et (trimStart) les espaces au début
console.log(phrase);
console.log(phrase.lenght); 

// substr
let prenom = "Oussama";
console.log(prénom.substring(4));
console.log(prénom.substring(2,4));

// ca remplace cactus par piment
console.log(phrase.replace('cactus', 'piment'));

// charAt
console.log(prenom.charAt(0)) // le 0 représente le premier élement contrairement au substring qui représente 

// concat le concat il va venir mettre deux element cote a cote contrairement au + qui lui dans le cas ou j'ai deux integer il va venir les additionner
console.log(phrase.concat(" ", prenom));