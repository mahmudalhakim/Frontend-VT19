// Arbeta med objekt

// Skapa ett objekt i JS
// 1. Object Literal (objektliteral)
let person = {};
console.log(person);

// 2. Object Constructor (objektkonstruktor)
let today = new Date(); // Inbyggt objekt
console.log(today);

let test = new Object(); 
// resultatet är samma som rad 5 
console.log(test);

// Objekt med några egenskaper
let p = {
    name : "Mahmud Al Hakim",
    age  : 45
}
console.log(p.name);
console.log(p.name + ' är ' + p.age + ' år gammal!');

// Objekt med metoder
let obj = {
    name : 'Kalle',
    age  : 10,
    info : function() {
        return (this.name + ' är ' + this.age + ' år gammal!');
    },
    print : function() {
        console.log(this.name + ' är ' + this.age + ' år gammal!');
    }
}
obj.print();
console.log(obj.info());
document.getElementById('demo').innerHTML = obj.info();

// Ändra egenskaper
obj.name = 'Kajsa';
obj.age--;
obj.print();

// Ta bort egenskaper
delete obj.age;
obj.print();

// Lägg till egenskaper
obj.age = 5;
obj.print();

// Lägg till en metod
obj.fyllerAr = function (){
    this.age++;
}
obj.fyllerAr();
obj.print();

// Skriv ut objektet
console.log(obj);

// Ta bort ett objekt
obj = null;
// obj.info();

// Övning
// Ett objekt som beskriver denna kurs
let kurs = {
    // egenskaper
    kursnamn: "Frontend",
    larare  : "Mahmud",
    skola   : "Nackademin",
    veckor  : 4,
    period  : "VT19",

    info    : function(){
        return(`   // OBS! Backtick, ej " eller '
        Kursnamn:     ${this.kursnamn}  <br>
        Lärare:       ${this.larare}    <br>
        Skola:        ${this.skola}     <br>
        Antal veckor: ${this.veckor}    <br>
        Period:       ${this.period}    <br>
        `);
    }
}

document.getElementById('demo').innerHTML = kurs.info();