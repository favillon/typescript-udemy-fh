"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const name = 'Andres';
    const ObjetoNoCambiante = {
        a: 'a',
        b: 'b'
    };
    const getName = () => {
        console.log('Old getName');
    };
    const avengers = {
        nick: 'Samuel L. jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        active: true,
        power: 1500.123
    };
    const { power, vision } = avengers;
    console.log(power.toFixed(2), vision.toLocaleUpperCase());
    const printAvenger = (_a) => {
        var { nick, vision, ironman } = _a, resto = __rest(_a, ["nick", "vision", "ironman"]);
        console.log(nick, vision, ironman, resto.power);
    };
    printAvenger(avengers);
    const avengersArr = ['Cap America', 'Ironman', 'Hulk', true, 123];
    const [, iron, _, valueBoolean] = avengersArr;
    console.log({ iron, valueBoolean });
    const ironmanW = {
        name: "Iron",
        weapon: "Armorsuit"
    };
    const capW = {
        name: "cap",
        weapon: "Shield"
    };
    const thorW = {
        name: "Thor",
        weapon: "Mjolnir"
    };
    const avengersArrPrint = [ironmanW, capW, thorW];
    for (const avenger of avengersArrPrint) {
        console.log(avenger.name);
    }
    class AvengerClass {
        constructor(name, power) {
            this.name = name;
            this.power = power;
        }
    }
    class FlyingAvenger extends AvengerClass {
        constructor(name, power) {
            super(name, power);
            this.flying = true;
        }
    }
    const hulk = new AvengerClass('Hulk', 10);
    console.log(hulk);
    const falcon = new FlyingAvenger('Falcon', 2);
    console.log(falcon);
    class TeamAvenger {
        static getAvgAge() {
            return this.name;
        }
        constructor(nick, power, team, realName, numberSafe) {
            this.nick = nick;
            this.power = power;
            this.team = team;
            this.realName = realName;
            this.numberSafe = numberSafe;
        }
        bio() {
            return `${this.nick} (${this.team})`;
        }
        getFullname() {
            return `${this.nick} :  (${this.realName})`;
        }
        getFullName2() {
            return `${this.nick} :  (${this.realName})`;
        }
    }
    TeamAvenger.avgAge = 35;
    const antman = new TeamAvenger('Antman', 50, 'Capitan', 'Scott');
    console.log(antman);
    console.log(antman.bio());
    console.log(TeamAvenger.avgAge);
    console.log(TeamAvenger.getAvgAge());
    class Xmen extends TeamAvenger {
        constructor(nick, power, team, realName, numberSafe, isMutant) {
            super(nick, power, team, realName, numberSafe);
            this.isMutant = isMutant;
        }
        get fullName() {
            return `${this.nick} :  (${this.realName})`;
        }
        set fullName(realName) {
            this.realName = realName.toLocaleUpperCase();
        }
        getFullNameXmen() {
            console.log(super.getFullname());
        }
    }
    const wolverine = new Xmen('Wolverine', 500, 'X-men', 'Logan', 12456348, true);
    console.log(wolverine);
    wolverine.getFullNameXmen();
    wolverine.fullName = 'Logan desde el set';
    console.log(wolverine.fullName);
    class Mutante {
        constructor(nick, realName) {
            this.nick = nick;
            this.realName = realName;
        }
    }
    class Xmenn extends Mutante {
        saveWorld() {
            return `${this.nick} Salvo al mundo`;
        }
    }
    class Villian extends Mutante {
        captureWorld() {
            return `${this.nick} Conquisto al mundo`;
        }
    }
    const wol = new Xmenn('Wolverine', 'Logan');
    const mag = new Villian('Magneto', 'Magnus');
    console.log(wol.saveWorld());
    console.log(mag.captureWorld());
    const printName = (character) => {
        console.log(character.realName);
    };
    printName(wol);
    printName(wolverine);
    class Apocalypse {
        constructor(name) {
            this.name = name;
        }
        static callApocalypse() {
            if (!Apocalypse.intance) {
                Apocalypse.intance = new Apocalypse('Unica Instancia de Apocalysec');
            }
            return Apocalypse.intance;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    const apocalipsis = Apocalypse.callApocalypse();
    const apocalipsis2 = Apocalypse.callApocalypse();
    apocalipsis.changeName('Nombre a');
    console.log({ apocalipsis, apocalipsis2 });
})();
//# sourceMappingURL=features.js.map