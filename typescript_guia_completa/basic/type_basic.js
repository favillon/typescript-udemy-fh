"use strict";
(() => {
    var _a;
    const a = 10;
    let b = 10;
    let msg = 'Andres';
    let msg2 = "Fabio";
    let msg3 = `Fabian`;
    console.log(((_a = msg[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'Sin palabras');
    let isSuperman = true;
    console.log(isSuperman);
    let isBatman = false;
    console.log(isBatman);
    let avenger = 3;
    const villians = 20;
    console.log(avenger);
    if (avenger < villians) {
        console.log('Estamos Perdidos');
    }
    console.log('Estamos Salvados');
    let anyAvenger = 123;
    anyAvenger = 'Dr Strange';
    console.log(anyAvenger.charAt(0));
    anyAvenger = 150.23232;
    console.log(anyAvenger.toFixed(2));
    const numberArray = [1, 2, 3, 4, 5];
    numberArray.push(true);
    const numbers = [1, 2, 3, 4, 5];
    const villiansArray = ['Omega Rojo', 'Dormanmu', 'Duende Verde'];
    numbers.forEach(n => console.log(n.toString()));
    villiansArray.forEach(v => console.log(v.toLowerCase()));
    const hero = ['Dr Strange', 100];
    hero[1] = 123;
    hero[0] = 'asda';
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.max;
    console.log(currentAudio);
    let CurrentAudioLevel;
    (function (CurrentAudioLevel) {
        CurrentAudioLevel[CurrentAudioLevel["min"] = 1] = "min";
        CurrentAudioLevel[CurrentAudioLevel["medium"] = 2] = "medium";
        CurrentAudioLevel[CurrentAudioLevel["max"] = 10] = "max";
    })(CurrentAudioLevel || (CurrentAudioLevel = {}));
    let currentAudio2 = CurrentAudioLevel.max;
    console.log(currentAudio2);
    function callBatman() {
    }
    const c = callBatman();
    console.log(c);
    const callSuperman = () => {
    };
    let isActive = undefined;
    console.log(isActive);
    function sayHello(msg) {
        console.log(msg.toUpperCase());
    }
    sayHello(msg);
    const error = (message) => {
        throw new Error(message);
    };
    error('Help me');
})();
const msg = 'Hello Word';
//# sourceMappingURL=type_basic.js.map