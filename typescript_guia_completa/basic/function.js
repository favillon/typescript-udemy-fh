"use strict";
(() => {
    const hero = 'Flash';
    const powerHero = 'Velocidad';
    function sayHello(msg, namePower, locale = 'tierra') {
        console.log(`Hi,  I am ${msg} mi superpoder ${namePower || 'No tengo'} and life in ${locale}`);
    }
    sayHello(hero, powerHero, 'nacion flash');
    sayHello('Policia en pañales');
    const activateBatiSignal = () => {
        return 'Batiseñal activdad';
    };
    console.log(typeof activateBatiSignal);
    const fullname = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const superman = fullname('Clark', 'Joseph', 'Kent');
    console.log({ superman });
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hi ${name}`;
    const saveTheWorld = () => `Save`;
    let myFunction;
    myFunction = addNumber;
    console.log(myFunction(12, 12));
    let myFunction2;
    myFunction2 = greet;
    console.log(myFunction2('aaa'));
    let myFunction3;
    myFunction3 = saveTheWorld;
    console.log(myFunction3());
})();
//# sourceMappingURL=function.js.map