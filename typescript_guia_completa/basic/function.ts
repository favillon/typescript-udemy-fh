(() => {
        
    // Funcion
    const hero:string = 'Flash';
    const powerHero:string = 'Velocidad';
    function sayHello(msg:string, namePower?:string, locale='tierra') {
        console.log(
            `Hi,  I am ${msg} mi superpoder ${namePower  || 'No tengo' } and life in ${locale}`
        );
    }
    sayHello(hero, powerHero, 'nacion flash');
    sayHello('Policia en pañales');
    const activateBatiSignal = ():string => {
        return 'Batiseñal activdad';
    }
    console.log(typeof activateBatiSignal);

    const fullname = (firstName:string, ...restArgs:string[]):string => {
        return `${ firstName } ${ restArgs.join(' ')}`
    }
    const superman = fullname( 'Clark', 'Joseph', 'Kent');
    console.log({ superman });
    
    const addNumber = (a:number, b:number) => a + b;
    const greet = (name:string) => `Hi ${ name }`;
    const saveTheWorld = () => `Save`;

    let myFunction :(z:number, y:number ) => number
    myFunction = addNumber
    console.log(myFunction(12, 12));

    let myFunction2 :(z:string) => string
    myFunction2 = greet
    console.log(myFunction2('aaa'));

    let myFunction3 :() => string
    myFunction3 = saveTheWorld
    console.log(myFunction3());
    
})()