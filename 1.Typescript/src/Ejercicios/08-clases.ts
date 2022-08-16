class Persona
{
    constructor(public nombre:string, public direccion:string) {
        this.nombre = nombre;
        this.direccion = direccion;
    }
}


class Heroe extends Persona
 {
    constructor(public alterEgo:string, 
                public edad: number,
                public nombre: string,
                public direccion: string)
    {
        super(nombre,direccion);
        this.alterEgo = alterEgo;
        this.edad = edad;
    }
 }

 const IronMan = new Heroe('IronMan',45,'Tony','New York');
 console.log(IronMan.alterEgo);
 console.log(IronMan.nombre);
 console.log(IronMan.edad);
 console.log(IronMan.direccion)