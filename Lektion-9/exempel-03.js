// Arbeta med metoden EventListener 

// Hämta en referens till knappen
let demo = document.getElementById('demo');

// Koppla en eventlyssnare
demo.addEventListener('click' , changeColor);

function changeColor(){
    let c = 'pink';
    let b = document.body;
    b.bgColor != c ? b.bgColor=c : b.bgColor='';
}