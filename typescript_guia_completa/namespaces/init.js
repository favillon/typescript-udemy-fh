"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = (text) => {
        return (text.length > 3) ? true : false;
    };
    Validations.validateDate = (myDate) => {
        return (isNaN(myDate.valueOf()) ? false : true);
    };
})(Validations || (Validations = {}));
function printObject(argument) {
    return argument;
}
const printObjectArrow = (argument) => argument;
console.log(Validations.validateText('An'));
console.log(Validations.validateDate(new Date()));
console.log(printObject(3.1416).toFixed(2));
console.log(printObject('Hola Mundo').toUpperCase());
console.log(printObject(new Date()).getDate());
console.log(printObjectArrow(3.1416).toFixed(2));
console.log(printObjectArrow('Hola Mundo').toUpperCase());
console.log(printObjectArrow(new Date()).getDate());
const deadpool = {
    nick: 'deadpool',
    realName: 'Wilson',
    dangerLevel: 2
};
console.log(printObjectArrow(deadpool).nick);
//# sourceMappingURL=init.js.map