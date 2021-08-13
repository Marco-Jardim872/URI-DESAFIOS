var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let num = parseFloat(lines.shift());


if(0 <= num && num <= 25){
    console.log("Intervalo " + "[0,25]" );
}else if(25 < num && num <= 50){
    console.log("Intervalo " + "(25,50]" );
}else if(50 < num && num <= 75){
    console.log("Intervalo " + "(50,75]" );
}else if(75 < num && num <= 100){
    console.log("Intervalo " + "(75,100]" );
}else{
    console.log("Fora de intervalo");
}
