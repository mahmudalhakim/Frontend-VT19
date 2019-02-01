// Arbeta med DOM

// DOM Queries

// Metoder som hittar ett enda element
// 1. getElementById
let h1 = document.getElementById('one');  // Caching
console.log(h1);
h1.innerHTML = 'Välkommen till DOM';

// Övning - Ändra h1 till versaler med DOM
let txt = h1.innerText;
// OBS! Strings är immutable
txt = txt.toUpperCase(); 
// console.log(txt);
h1.innerText = txt;
// Eller 
h1.innerText = h1.innerText.toUpperCase();

// Ändra färg med CSS och DOM
h1.style.color = 'gold';
// Ändra teckenstorlek
h1.style.fontSize = '3em';

// Övning - Ändra h2 till versaler med CSS och DOM
let h2 = document.getElementById('two');
console.log(h2);
h2.style.textTransform = 'uppercase';

// Dölja innehåll med DOM och CSS
let lorem = document.getElementById('lorem');
lorem.style.display = 'none';


// Ändra sidans bakgrundsfärg med egenskapen body
document.body.style.backgroundColor = '#AAA';

// Skapa en referens till body
let b = document.body;
console.log(b);

// 2. querySelector (hämtar det första elementet som hittas)
let one = document.querySelector('#one');
console.log(one);

let demo = document.querySelector('.demo');
console.log(demo); 
// OBS! Vi får den första taggen som har klassen demo



// Metoder som hittar flera element
// 1. Metoden querySelectorAll
let demoAll = document.querySelectorAll('.demo');
console.log(demoAll); 
// OBS! Vi får alla taggar som har klassen demo

// 2. Metoden getElementsByTagName
let allPTags = document.getElementsByTagName('p');
console.log(allPTags);

// 3. Metoden getElementByClassName
let allDemo = document.getElementsByClassName('demo');
console.log(allDemo);

// Övning: Hämta alla b-taggar och alla i-taggar
let test1 = document.querySelectorAll('b,i');
console.log(test1);

// Övning: Ta bort understreck på a-taggar som finns i listan
let test2 = document.querySelectorAll('li a');
console.log(test2);
for (let i = 0; i < test2.length; i++) {
   console.log(test2[i]);
   test2[i].style.textDecoration = 'none';
}

// En enklare syntax med for...of
for (let i of test2) {
    i.innerText = i.innerText + ' (extern länk) ' ;
    i.className = 'link';
    i
}

// Övning
// Skapa en klass som heter snygg med valfri formatering
// Lägg till klassen snygg till alla p-taggar
let snygg = document.querySelectorAll('p');
console.log(snygg);
for (let p of snygg) {
    p.className = 'snygg';
}
// Övning 
// a) Lägg till lite luft (padding/margin) efter alla divar
// b) Lägg till en nedre kantlinje 
let allDivs = document.getElementsByTagName('div');
for(let div of allDivs){
    div.style.paddingBottom = '1em';
    div.style.marginBottom = '1em';
    div.style.borderBottom = '1px solid red';
}