
namespace Validations {
    export const validateText  = ( text:string) => {
       return (text.length >3) ? true : false
    }
    export const validateDate = (myDate:Date):boolean => {
        return (isNaN(myDate.valueOf()) ? false : true )
    }
}
// Generico
function printObject<T>(argument:T):T {
    return argument;
}
const printObjectArrow = <T> (argument:T) =>  argument;

console.log(Validations.validateText('An'));
console.log(Validations.validateDate(new Date()))

console.log(printObject(3.1416).toFixed(2));
console.log(printObject('Hola Mundo').toUpperCase());
console.log(printObject(new Date()).getDate());

console.log(printObjectArrow(3.1416).toFixed(2));
console.log(printObjectArrow('Hola Mundo').toUpperCase());
console.log(printObjectArrow(new Date()).getDate());

interface Hero {
    nick : string;
    realName : string;
}
interface Villian {
    nick : string;
    dangerLevel : number;
}
const deadpool = {
    nick : 'deadpool',
    realName : 'Wilson',
    dangerLevel : 2
}

console.log(printObjectArrow<Hero>(deadpool).nick);