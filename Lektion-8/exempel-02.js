// Selektioner

// if-satsen
let villkor = true;
if(villkor){
    // Kör detta om villkoret är sant
}

// Exempel
let score = prompt("Ange poäng: ");
console.log(score);

if(score >= 50){  // OBS! Skriv inte => (Arrow-operator)
    congratulate();
}
else{
    encourage();
}


function congratulate(){
    let msg = "Grattis! <br>";
    msg += 'Fortsätt till nästa steg...';
    console.log(msg);
    // Visa msg i body (ej i console)
    document.getElementById('demo').innerHTML = msg;
}
function encourage(){
    let msg = 'Lycka till nästa gång!';
    console.log(msg);
    document.getElementById('demo').innerHTML = msg;
}

// Ternary-operator
// Används istället för if-else-satsen
// console.log( (score >= 50) ? "YES" : "NO" );

(score >= 50) ? congratulate() : encourage() ;


function promptAge(){
    let age = prompt("Hur gammal är du?");
    // Prompt skickar ett värde eller null vid avbryt
    /*
    if(age == null){
        alert("Hejdå");
    }
    if(age == ''){
        alert("OBS! En tom sträng");
    }
    */
    // Använd logiska operatorer (&& || !) för att göra flera tester  
    if(age == null || age == ''){
        console.error("Användaren avslutar med Avbryt eller klickar på OK utan att ange ett svar!");
        // Avsluta funktionen
        return;
    }
                              // Ternary-operatorn
    let votable = (age <= 18) ? "Du får inte rösta!"
                              : "Välkommen. Du får rösta"; 
    console.log(votable); 

}
promptAge();