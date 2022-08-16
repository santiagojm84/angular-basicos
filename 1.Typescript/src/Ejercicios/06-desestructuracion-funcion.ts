export interface Producto
{
    desc:string;
    precio:number;
}

const telefono: Producto = 
{
    desc: 'Nokia A1',
    precio: 150
}

const tableta: Producto = 
{
    desc: 'Samsung C3',
    precio: 350
}


export function calculaISV(productos: Producto[]): [number, number]
{
    let total = 0;
    productos.forEach((producto: Producto) => 
    {
        total += producto.precio;
    });
    return [total, total * 0.15]
}


const articulos = [telefono, tableta];
const [total, totalISV] = calculaISV(articulos);