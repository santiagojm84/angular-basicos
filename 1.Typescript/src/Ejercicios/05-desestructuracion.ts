/*Interfaces*/
interface Reproductor
{
    volumen:number;
    segundo: number;
    cancion: string;
    detalles: Detalles
}

interface Detalles
{
    autor: string;
    anio: number;
}

const reproductor: Reproductor = 
{
    volumen: 40,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Pedro Perez',
        anio: 2017
    }
}

/*Desestructuracion de objetos*/
const {volumen, segundo, cancion, detalles} = reproductor;
const {autor, anio} = detalles;

console.log(volumen, segundo, cancion, autor, anio);


/*Arreglos*/
const dbz: string[] = ['Mariana','Camila','Daniela'];
const [i1,i2,i3] = dbz;

console.log('Items:', i1, i2, i3);