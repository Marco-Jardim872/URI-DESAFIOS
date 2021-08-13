var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let tempo = parseInt(lines.shift());
let ano =  parseInt(tempo/365);
let mes = parseInt((tempo%365) / 30);
let dia = parseInt(tempo%365) % 30;


console.log(ano + " ano(s)");
console.log(mes + " mes(es)");
console.log(dia + " dia(s)");