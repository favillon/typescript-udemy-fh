(() => {
    // String | Numbers
    const a:number = 10;
    let b = 10;
    let msg:string =  'Andres'; 
    let msg2:string = "Fabio"; 
    let msg3:string = `Fabian`; 

    console.log(msg[10]?.toUpperCase() || 'Sin palabras');
    
    // Boolean
    let isSuperman = true;
    console.log(isSuperman);
    let isBatman:boolean = false;
    console.log(isBatman);
    
    let avenger = 3;
    const villians:number = 20;
    console.log(avenger);
    if (avenger < villians) {
        console.log('Estamos Perdidos');
    }   
    console.log('Estamos Salvados');
   
    // Any
    let anyAvenger:any = 123;
    anyAvenger = 'Dr Strange'
    console.log((anyAvenger as string).charAt(0));
    
    anyAvenger = 150.23232;
    console.log( (<number>anyAvenger).toFixed(2));
    
    // Arrays
    const numberArray:(string|number|boolean)[]= [1,2,3,4,5];
    numberArray.push(true)

    const numbers:number[] = [1,2,3,4,5];
    const villiansArray:string[] = ['Omega Rojo',  'Dormanmu', 'Duende Verde'];
    numbers.forEach( n => console.log(n.toString()))
    villiansArray.forEach( v => console.log(v.toLowerCase()))


    // Tuplas
    const hero: [string, number] = ['Dr Strange', 100];
    hero[1] = 123;
    hero[0] = 'asda';

    //Enum
    enum AudioLevel {
        min,
        medium,
        max
    }
    let currentAudio = AudioLevel.max;
    console.log(currentAudio);    

    enum CurrentAudioLevel {
        min =1,
        medium,
        max = 10
    }
    let currentAudio2 = CurrentAudioLevel.max;
    console.log(currentAudio2);

    // Void
    function callBatman():void {

    }
    const c = callBatman();
    console.log(c);

    const callSuperman = (): void => {

    };
    
    // Undefined  
    // tsconfig - strictNullChecks para asignar directamente el undefined
    let isActive: (boolean|undefined) = undefined;
    console.log(isActive);
        
    // Function
    function sayHello(msg:string) {
        console.log(msg.toUpperCase());
    }

    sayHello(msg);

    // Never
    const error = (message:string):never => {
        throw new Error(message);
    }
    
    error('Help me');
})()

const msg:string = 'Hello Word'
