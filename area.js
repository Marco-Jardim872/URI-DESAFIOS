var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');


let a = parseFloat(lines.shift());
let b = parseFloat(lines.shift());
let c = parseFloat(lines.shift());


let areaTrian = ((a*c)/2).toFixed(3);
let areaCirc = (3.14159 * Math.pow(c,2)).toFixed(3);
let areaTrap = (((a + b)*c)/2).toFixed(3) ;
let areaQuadra = (b*b).toFixed(3);
let areaRetan = (a*b).toFixed(3);


console.log("TRIANGULO: " + areaTrian);
console.log("CIRCULO: " + areaCirc);
console.log("TRAPEZIO: " + areaTrap);
console.log("QUADRADO: " + areaQuadra);
console.log("RETANGULO: " + areaRetan);