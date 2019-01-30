// Funktioner i JavaScript

// Grundläggande syntax
// Deklarera en funktion
function name1(){    // En parameterlös funktion
    alert("Hej från en funktion i JS");
}


// Övning
function meddelande(){
    console.log("Jag har anropats!");
}
// Anropa funktionen 3 gånger!
meddelande();
meddelande();
meddelande();

// Parametrar
// msg är en parameter
function hej(msg){
    console.log(msg);
}
// Argument
// Anropa funktionen hej()
hej("Hej från en funktion!");
hej("Hello from a function!");
// Strängen som skickas till funktionen 
// kallas för ett argument

// Vad händer om vi anropar funkioten hej() utan några args?
hej(); // undefined

// Förvald/default parameter
function hello(msg = "Welcome"){
    console.log(msg);
}
hello();  // => "Welcome"

// Funktion med två parametrar
function fullname(firstName , lastName){
    console.log(firstName + ' ' + lastName);
}

// Anrop med två argument
fullname('Mahmud' , 'Al Hakim');
fullname('Kalle' , 'Anka');

// Vad händer om...
fullname(); // undefined undefined

// Funktion med flera parametrar
function manyThings(...things){
    console.log(things);
}
manyThings();      // [] = en tom array
manyThings(1);     // [1]
manyThings(1,2);   // [1,2]
manyThings(1,2,3); // [1,2,3]
manyThings('Mahmud', 'Al', 'Hakim');
manyThings('Mahmud', 45, 90);

// Return-satsen 
function myName(firstName , lastName){
    return firstName + ' ' + lastName;
}
let kalle = myName('Kalle','Anka');
console.log(kalle);
console.log(myName('Mahmud','Al Hakim'));

console.log("----------------------");

// Övningar
// Beräkna medelvärdet av två tal
function medel2(x1 , x2){
    return (x1+x2)/2;
}
console.log(medel2(2,3));
console.log(medel2(5,10));

// Beräkna medevärdet av tre tal
function medel3(a,b,c){
    return (a+b+c)/3;
}
console.log(medel3(1,2,3));
console.log(medel3(10,15,20));
let test = medel3(2,4,6);
console.log(test);