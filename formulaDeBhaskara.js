var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

let a = parseFloat(lines.shift());
let b = parseFloat(lines.shift());
let c = parseFloat(lines.shift());


let delta = (b*b - (4*a*c));
let raizdelta = Math.sqrt(b*b - (4*a*c));

let r1 = (((-b + raizdelta))/(2*a)).toFixed(5);
let r2 = (((-b - raizdelta))/(2*a)).toFixed(5);
if((2*a === 0) || (delta < 0)){
    console.log("Impossivel calcular");
}else{
    console.log("R1 = " + r1);
    console.log("R2 = " + r2);
   
}
