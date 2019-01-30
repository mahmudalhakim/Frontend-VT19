// Iterationer

// for-satsen
for(let i = 0 ; i <= 10 ; i++) {
   // console.log(i);
}
// Övning: Skriv ut alla jämna tal mellan 1 och 20
for (let i = 2; i <= 20; i=i+2) {
   // console.log(i);
}

// While-satsen
let i = 1;
while (i <= 10) {
    console.log(i + ' x 5 = ' + i*5);
    i++;
}

// Break-satsen och continue
while (true) {   // En oändlig loop
    let name = prompt("Vad heter du?");
    if(name === null) 
        break;    // Avsluta while
    if(name === '')
        continue; // Gå till början
  
    alert("Hej " + name);
} // Hit kommer vi vid break

// En oändlig loop med for-satsen
for(;;){
    break;
}

/*
På en arbetsplats erbjuds man följande lön.
Första dagen tjänar man en krona 
och sedan fördubblas lönen varje dag.
Skriv ett program som räknar ut hur länge man
behöver arbeta för att tjäna ihop 
minst 10 miljoner kronor.
*/
let lon, dag = 0;
let total = 0 ;
for(lon = 1 ; total<10000000 ; lon=lon*2){
    dag++;
    console.log("Dag: " + dag);
    console.log("Dagens lön: " + lon);
    
    total += lon;
    console.log("Totalt hit: " + total);
}
console.log("Du behöver jobba " + dag + " dagar!");