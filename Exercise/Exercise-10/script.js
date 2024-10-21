let Businessname = prompt('Enter your name:');

let adjectives = {1:"Crazy", 2: "Amazing", 3: "Fire"};
let Shop = {1:"Engine", 2: "Food", 3: "Garments"};
let word = {1:"Bors", 2: "Limited", 3: "Hub"};


var random1 = Math.floor(Math.random() * 3 + 1);
var random2 = Math.floor(Math.random() * 3 + 1);
var random3 = Math.floor(Math.random() * 3 + 1);


alert(`${Businessname} ${adjectives[random2]} ${Shop[random2]} ${word[random3]}`)