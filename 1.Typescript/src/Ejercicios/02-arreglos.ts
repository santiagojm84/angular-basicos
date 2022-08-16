/*Arreglos*/
//let habilidades:(boolean|string|number)[] = ['Bash','Counter','Healing', true, 10];
let habilidades: string[] = ['Bash','Counter','Healing'];

/*Interface*/
interface Personaje
{
    nombre:string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

/*Objeto*/
const personaje:Personaje = 
{
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash','Counter','Healing'],
    puebloNatal: 'PN 1'
}

console.log(personaje);