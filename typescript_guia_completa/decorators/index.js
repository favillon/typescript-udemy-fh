"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
(() => {
    function printToConsole(constructor) {
        console.log(constructor);
    }
    let Pokemon = class Pokemon {
        constructor(name) {
            this.name = name;
            this.publicApi = 'https://pokeapi.co';
        }
    };
    Pokemon = __decorate([
        printToConsole
    ], Pokemon);
    const onePokemon = new Pokemon('Charmander');
    console.log(onePokemon);
    const printToConsoleConditional = (print = false) => {
        if (print) {
            return printToConsole;
        }
        else {
            return () => { };
        }
    };
    const bloquearTipo = function (constructor) {
        Object.seal(constructor);
        Object.seal(constructor.prototype);
    };
    function checkValidPokemonId() {
        return function (target, propertyKey, descriptor) {
            const originalMethod = descriptor.value;
            descriptor.value = (id) => {
                if (id < 1 || id > 900) {
                    return console.error('El pokemon no existe');
                }
                else {
                    return originalMethod(id);
                }
            };
        };
    }
    function readonlyProperty(isWritable = true) {
        return function (target, propertyKey) {
            const descriptor = {
                get() {
                    return 'Fernando';
                },
                set(val) {
                    Object.defineProperty(this, propertyKey, {
                        value: val,
                        writable: !isWritable,
                        enumerable: false
                    });
                }
            };
            return descriptor;
        };
    }
    let PokemonConditional = class PokemonConditional {
        constructor(name) {
            this.name = name;
            this.publicApi = 'https://pokeapi.co';
            this.publicApiPrivate = 'https://pokeapiprivate.co';
        }
        savePokemonToDB(id) {
            console.log(`Save  pokemon ${id}`);
        }
    };
    __decorate([
        readonlyProperty()
    ], PokemonConditional.prototype, "publicApiPrivate", void 0);
    __decorate([
        checkValidPokemonId()
    ], PokemonConditional.prototype, "savePokemonToDB", null);
    PokemonConditional = __decorate([
        bloquearTipo,
        printToConsoleConditional(false)
    ], PokemonConditional);
    const twoPokemon = new PokemonConditional('Pikachu');
    console.log(twoPokemon);
    twoPokemon.savePokemonToDB(5000);
})();
//# sourceMappingURL=index.js.map