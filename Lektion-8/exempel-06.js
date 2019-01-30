// Arbeta med objektet Math
let pi = Math.PI;
console.log(pi);

// Beräkna 2^3
console.log(Math.pow(2,3));

// Avrunda till närmaste heltal
console.log(Math.round(3.7));   // 4
console.log(Math.round(-3.4));  // -3

// Roten ur
console.log(Math.sqrt(9));  // 3

// Max av flera tal
console.log(Math.max(5,1));       // 5
console.log(Math.max(5,8,1));     // 8
console.log(Math.max(5,8,1,10));  // 10

// Min av flera tal
console.log(Math.min(5,1));        // 1
console.log(Math.min(5,-8,1));     // -8
console.log(Math.min(5,8,10));     // 5

// Slumpmässigt tal
console.log(Math.random());       // 0-1
console.log(Math.random()*10);    // 0-9
console.log(Math.random()*10+1);  // 1-10

// Ta bort alla decimaler 
let rand = Math.random()*10 ;
rand = Math.ceil(rand);  
// Om 0.1 => 1 
// Om 9.1 => 10
console.log(rand); 
 
// Arbeta med objeket Number
// Visa 2 decimaler
console.log(pi.toFixed(2));