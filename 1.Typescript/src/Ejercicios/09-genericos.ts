function queTipoSoy<T>(argumento: T)
{
    return argumento;
}

let soyString = queTipoSoy('Prueba String');
let soyNumero = queTipoSoy(100);
let soyArreglo = queTipoSoy([1,2,3,4,5]);
let soyNumeroExplicito = queTipoSoy<number>(100);