(() => {

    // Definicion en linea - Problemas cuando son muchos objetos
    let flash:{
        name     :string,
        age?     :number,
        powers   :string[],
        getName? :() => string
    } = {
        name : 'Barry Allen',
        age : 24,
        powers : ['Super Velocidad', 'Viajar Tiempo']
    }
    flash = {
        name : 'Clark kent',
        age : 60,
        powers : ['Super poderes'],
        getName(){
            return this.name;
        }
    }
    console.log(flash);

    // type no extensible
    type Hero = {
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

    // Union type
    let myCustomVar : (string|number|Hero) = 'Fernando';
    myCustomVar = 20;
    console.log(typeof myCustomVar);

    myCustomVar = {
        name : 'Name',
        powers : ['a', 'b']
    }
    
})()