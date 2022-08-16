/*Tarea 1*/
interface Direccion
{
    calle: string,
    pais: string,
    ciudad: string
}

interface SuperHeroe
{
    nombre: string,
    edad: number,
    direccion: Direccion,
    mostrarDireccion:() => string
}

const superHeroe: SuperHeroe = {
    nombre: 'SpiderMan',
    edad: 30,
    direccion: 
    {
        calle: 'Principal',
        pais: 'CO',
        ciudad: 'CALI'
    },
    mostrarDireccion()
    {
        return this.nombre + ',' + this.direccion.ciudad  + ',' + this.direccion.pais;
    }
}

console.log(superHeroe.mostrarDireccion());
