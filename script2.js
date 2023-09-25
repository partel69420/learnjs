console.log(window, {document});
let title = document.getElementById('title');
console.log({title});

setTimeout(() => {
    title.innerText = 'goodbye Js';

}, 5000);
let r, g, b;
setinterval(() => {
    r = Math.round(Math.random() * 255)
    g = Math.round(Math.random() * 255)
    b = Math.round(Math.random() * 255)
    document.body.style.background = 'rgb(${r}, ${g}, ${b})';
}, 1000); 

let textinput = document.queryselection('textinut');
textinput.addEventlistener ('chang' evt => {
    console.log(evt);
    title.innerText = textinput.valve.split('').reverse().join('');
});