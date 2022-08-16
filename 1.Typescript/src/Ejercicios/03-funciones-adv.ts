/*Interface*/
interface PersonajeLOR
{
    nombre:string;
    pv:number;
    mostrarHP():void;
}

/*Funcion con argumentos*/
function subirPV(personaje: PersonajeLOR, pv:number)
{
    personaje.pv += pv;
    console.log(personaje);
}

/*Constante tipo objeto*/
const p1: PersonajeLOR = 
{
    nombre: 'Ironman',
    pv: 200,
    mostrarHP()
    {
        console.log('Puntos de vida', this.pv);
    }
}

/*Llamado función*/
subirPV(p1, 20);
p1.mostrarHP();