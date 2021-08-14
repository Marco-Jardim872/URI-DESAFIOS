var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let p1 = lines[0];
let x1y1 = p1.split(" ");
let p2 = lines[1];
let x2y2 = p2.split(" ");

let x1 = x1y1.shift();
let y1 = x1y1.shift();

let x2 = x2y2.shift();
let y2 = x2y2.shift();

let dis = Math.sqrt((Math.pow((x2-x1),2))+(Math.pow((y2-y1),2))).toFixed(4);

console.log(dis);
