// Arbeta med objektet String i JavaScript
let namn = '           Mahmud Al Hakim         ';
// Rensa blanka tecken i början och slutet av strängen
namn = namn.trim(); 

// Konvetera till versaler
namn = namn.toUpperCase();
console.log(namn);

// Konvertera till gemener
namn = namn.toLowerCase();
console.log(namn);

// Hämta förnamnet
console.log(namn.substring(0,6));

// Hämta första mellanslag
let space = namn.indexOf(' ');
console.log(space);
console.log(namn.substring(0,space));

// Hämta efternamnet
console.log(namn.substring(space+1));

// Konvertera en sträng till en array
let arr = namn.split(' ');
console.log(arr);

// Antal tecken
console.log(namn.length);