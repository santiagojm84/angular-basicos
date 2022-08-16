/*Funciones*/
function sumar(a:number, b:number){ return a + b;}
const sumarFlecha = (a:number,b:number):number => { return a +b }

function multiplicar(numero:number, base:number, otroNumero?:number)
{
    return numero * base;
}

let resultadoS = sumar(2,3);
let resultadoM = multiplicar(10,20);

console.log(resultadoM);
console.log(resultadoS);