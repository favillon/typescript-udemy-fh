(()=>{
    // Decoradores de Clase
    // Funccion que se ejecuta al momento de la transpilacion
    function printToConsole(constructor:Function) {
        console.log(constructor);
        
    }
    @printToConsole
    class Pokemon {
        public publicApi:string = 'https://pokeapi.co'
        constructor(
            public name:string
        ) { }
    }
    const onePokemon = new Pokemon('Charmander')
    console.log(onePokemon);
    
    // Factory decorator
    const printToConsoleConditional = (print:boolean = false): Function => {
        if (print) {
            return printToConsole;
        } else {
            return  () => {}
        }
    }

    const bloquearTipo = function ( constructor: Function) {
        Object.seal(constructor);
        Object.seal(constructor.prototype);
    }
    
    function checkValidPokemonId() {
        return function(target: any, propertyKey:string, descriptor:PropertyDescriptor) {
            // console.log({target, propertyKey, descriptor});
            const originalMethod = descriptor.value;
            descriptor.value = (id:number) => {
                if (id < 1 || id > 900) {
                    return console.error('El pokemon no existe');
                } else {
                    return originalMethod(id);
                }
            }
        }
    }

    // Decorador de propiedad
    function readonlyProperty(isWritable:boolean = true):Function {
        return function (target: any, propertyKey:string) {
            const descriptor:PropertyDescriptor = {
                get(){
                    return 'Fernando'
                },
                set(this, val) {
                    //console.log(this, val);
                    Object.defineProperty(this, propertyKey, {
                        value: val,
                        writable : !isWritable,
                        enumerable : false
                    })
                }
            }
            return descriptor;
        }
        
    }

    @bloquearTipo
    @printToConsoleConditional(false)
    class PokemonConditional {
        public publicApi:string = 'https://pokeapi.co';

        @readonlyProperty()
        private publicApiPrivate:string = 'https://pokeapiprivate.co';
        constructor(
            public name:string
        ) { }

        @checkValidPokemonId()
        savePokemonToDB( id:number) {
            console.log(`Save  pokemon ${id}`);
            
        }
    }
    const twoPokemon = new PokemonConditional('Pikachu');
    //(PokemonConditional.prototype as any).customName = 'Mi ratica'; // Para bloquear la extension de las clases
    console.log(twoPokemon);
    twoPokemon.savePokemonToDB(5000);

})()
