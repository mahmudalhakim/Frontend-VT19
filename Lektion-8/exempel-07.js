// Arbeta med datum och tid
let today = new Date();
console.log(today);

// Visa år
console.log(today.getFullYear());

// Visa månad
console.log(today.getMonth()); // 0-11

// Visa dag
console.log(today.getDay()); // Sunday is 0, Monday is 1, and so on.

// Visa datum
console.log(today.getDate());  // Aktuellt datum :-)

// Visa timmar
console.log(today.getHours());

// Visa minuter
console.log(today.getMinutes());

// Visa sekunder
console.log(today.getSeconds());

// Visa hela klockan
console.log(today.toLocaleTimeString());

// Visa hela datum
console.log(today.toLocaleDateString());