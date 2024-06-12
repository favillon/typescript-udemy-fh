(()=>{
    // La interfas si son extenxibles
    interface Hero {
        name     :string,
        age?     :number,
        powers   :string[],
        getName? :() => string
    }
    let superman: Hero = {
        name : 'Barry Allen',
        age : 24,
        powers : ['Super Velocidad', 'Viajar Tiempo']
    }
    let batman: Hero = {
        name : 'Barry Allen',
        age : 24,
        powers : ['Super Velocidad', 'Viajar Tiempo']
    }
    console.log(superman);
    console.log(batman);

    // Estructuras complejas

    interface Client {
        name: string;
        age?: number;
        address: Address,
        getFullAddress(id:number):string;
    }
    interface Address {
        id:number;
        zip:string;
        city:string;
    }
    const client:Client  = {
        name: 'Paco',
        age: 50,
        address: {
            id : 123,
            zip : 'ky asdad',
            city : 'Espana'
        },
        getFullAddress(id) {
            return `${this.address.zip} - ${this.address.city} (${id})`
        },
    }
    console.log(client);
    

    interface Xmen {
        name:string;
        realName:string;
        mutantPower (id:number):string
    }

    interface Human {
        age:number;
    }
    class Mutant implements Xmen, Human {
        public age!: number;
        public name!: string;
        public realName!: string;
        mutantPower(id: number): string {
            return ` ${this.name}  (${this.realName}) => power`;
        }
    }

    // Interface para funciones
     interface AddTwoNumbers {
        (a:number, b:number):number;
     }

     let AddTwoNumbersFunction: AddTwoNumbers;
     AddTwoNumbersFunction = (a:number, b:number) => {
        return a+b;
     }

     interface Carro{
        llantas:number;
        modelo:string;
      }
       
      interface Volvo extends Carro{
        seguro:boolean;
      }
       
      var volvo:Volvo = {
        llantas: 4,
        modelo:"sedan",
        seguro:true
        
      }
      console.log(volvo);
      
})()