(() =>{
    const name = 'Andres';
    const ObjetoNoCambiante = {
        a : 'a',
        b :  'b'
    };
    // ObjetoNoCambiante = {c:'c'};
    const getName = () => {
        console.log('Old getName');        
    }

    // Dsestructuracion 
    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        active: boolean;
        power: number;
    }
    const avengers:Avengers = {
        nick: 'Samuel L. jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        active : true,
        power : 1500.123
    }
    const {power, vision } = avengers;
    console.log(power.toFixed(2), vision.toLocaleUpperCase());

    const printAvenger = ( { nick, vision, ironman, ...resto }:Avengers ) => {
        console.log(nick, vision, ironman, resto.power);
    }

    printAvenger( avengers );

    const avengersArr: [string, string, string, boolean, number] = [ 'Cap America', 'Ironman', 'Hulk', true, 123];
    const [, iron, _, valueBoolean] = avengersArr;
    console.log({iron, valueBoolean});

    type AvengersWeapon = {
        name : string;
        weapon : string;
    }
    const ironmanW :AvengersWeapon = {
        name: "Iron",
        weapon: "Armorsuit"
    }
    const capW :AvengersWeapon = {
        name: "cap",
        weapon: "Shield"
    }
    const thorW :AvengersWeapon = {
        name: "Thor",
        weapon: "Mjolnir"
    }
    const avengersArrPrint:AvengersWeapon[] = [ ironmanW, capW, thorW]
    for (const avenger of avengersArrPrint) {
        console.log(avenger.name);
        //console.log(avenger.name, avenger.otraCosa); // Permitido en js pero error en tsc
    }

    // Class JS
    class AvengerClass {
        name:string;
        power:number;
        constructor(name:string, power:number){
            this.name = name;
            this.power = power;
        }
    }

    class FlyingAvenger extends AvengerClass {
        flying;

        constructor(name:string, power:number) {
            super(name, power)
            this.flying = true;
        }
    }
    const hulk = new AvengerClass('Hulk', 10)
    console.log(hulk);
    const falcon = new FlyingAvenger('Falcon', 2);
    console.log(falcon);

    // Class TS
    class TeamAvenger {
        static avgAge:number = 35

        static getAvgAge() {
            return this.name;
        }
        constructor(
            public nick:string, 
            public power:number,
            public team:string,
            public realName:string,
            private numberSafe?:number
        ){}

        bio() {
            return `${this.nick} (${this.team})`;
        }
        protected getFullname() {
            return `${ this.nick} :  (${this.realName})`;
        }
        private getFullName2() {
            return `${ this.nick} :  (${this.realName})`;
        }
    }

    const antman:TeamAvenger = new TeamAvenger('Antman', 50, 'Capitan', 'Scott');
    console.log(antman);
    console.log(antman.bio());
    console.log(TeamAvenger.avgAge);
    console.log(TeamAvenger.getAvgAge());
    
    class Xmen extends TeamAvenger{
        constructor(
            nick:string,
            power:number,
            team:string,
            realName:string,
            numberSafe:number,
            public isMutant:boolean
        ){
            super(nick, power, team, realName, numberSafe)
        }
        get fullName() {
            return `${ this.nick} :  (${this.realName})`;
        }
        set fullName(realName:string) {
            this.realName = realName.toLocaleUpperCase();
        }
        getFullNameXmen() {
            console.log(super.getFullname());
            // console.log(super.getFullname2()); No es accesible por el metodo privado del super
        }
    }

    const wolverine = new Xmen('Wolverine', 500, 'X-men', 'Logan', 12456348, true)
    console.log(wolverine);
    wolverine.getFullNameXmen();
    wolverine.fullName = 'Logan desde el set';
    console.log(wolverine.fullName);

    abstract class Mutante {
        constructor(
            public nick:string,
            public realName:string
        ) {}
    }
    class Xmenn extends Mutante {
        saveWorld(){
            return `${this.nick} Salvo al mundo`
        }
    }
    class Villian extends Mutante {
        captureWorld(){
            return `${this.nick} Conquisto al mundo`
        }
    }
    const wol = new Xmenn('Wolverine', 'Logan')
    const mag = new Villian('Magneto', 'Magnus')
    console.log(wol.saveWorld());
    console.log(mag.captureWorld());

    const printName = (character:Mutante) => {
        console.log(character.realName);
    }
    printName(wol);
    printName(wolverine);

    // Singleton
    class Apocalypse {
        static intance:Apocalypse;

        private constructor(public name:string){}

        static callApocalypse():Apocalypse {
            if ( !Apocalypse.intance ) {
                Apocalypse.intance = new Apocalypse('Unica Instancia de Apocalysec')
            }
            return Apocalypse.intance;
        }
        changeName(newName:string):void{
            this.name = newName;
        }
    }
    const apocalipsis = Apocalypse.callApocalypse();
    const apocalipsis2 = Apocalypse.callApocalypse();
    apocalipsis.changeName('Nombre a');
    console.log({apocalipsis, apocalipsis2});
    
})()    