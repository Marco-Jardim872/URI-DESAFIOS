var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var piece1 = lines.shift();
var p1 = piece1.split(" ")
var piece2 = lines.shift();
var p2 = piece2.split(" ")
var numPiece1 = parseInt(p1[1]);
var numPiece2 = parseInt(p2[1]);
var valorP1 = parseFloat(p1[2]);
var valorP2 = parseFloat(p2[2]);
var total = (numPiece1 * valorP1 + numPiece2 * valorP2).toFixed(2);

console.log(`VALOR A PAGAR: R$ ${total}`)