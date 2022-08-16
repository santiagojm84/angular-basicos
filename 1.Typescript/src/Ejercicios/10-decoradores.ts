function classDecorator<T extends {new (...args: any[]): {}}>(constructor: T)
{
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    }
}


@classDecorator
class SuperClase
{
    public nombre: string = '';

    imprimir()
    {
        console.log('Hello');
    }
}