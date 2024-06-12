"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar Tiempo']
    };
    flash = {
        name: 'Clark kent',
        age: 60,
        powers: ['Super poderes'],
        getName() {
            return this.name;
        }
    };
    console.log(flash);
    let superman = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar Tiempo']
    };
    let batman = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar Tiempo']
    };
    console.log(superman);
    console.log(batman);
    let myCustomVar = 'Fernando';
    myCustomVar = 20;
    console.log(typeof myCustomVar);
    myCustomVar = {
        name: 'Name',
        powers: ['a', 'b']
    };
})();
//# sourceMappingURL=object.js.map