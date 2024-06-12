"use strict";
(() => {
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
    const client = {
        name: 'Paco',
        age: 50,
        address: {
            id: 123,
            zip: 'ky asdad',
            city: 'Espana'
        },
        getFullAddress(id) {
            return `${this.address.zip} - ${this.address.city} (${id})`;
        },
    };
    console.log(client);
    class Mutant {
        mutantPower(id) {
            return ` ${this.name}  (${this.realName}) => power`;
        }
    }
    let AddTwoNumbersFunction;
    AddTwoNumbersFunction = (a, b) => {
        return a + b;
    };
    var volvo = {
        llantas: 4,
        modelo: "sedan",
        seguro: true
    };
    console.log(volvo);
})();
//# sourceMappingURL=basic.js.map