

const deadpol = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre() {
        return `${ this.nombre } ${ this.apellido} ${this.poder}`
    }
} 
/* 
const nombre = deadpol.nombre;
const apellido = deadpol.apellido;
const poder = deadpol.poder;
 */

//console.log(nombre, apellido, poder);
//console.log( deadpol.getNombre() );

/* const { nombre, apellido, poder, edad } = deadpol;

console.log(nombre, apellido, poder, edad); */


function imprimeHeroe({ nombre, apellido, poder, edad = 0 }) {

    //const { nombre, apellido, poder, edad = 0 } = heroe;
    console.log(nombre, apellido, poder, edad);
}

//imprimeHeroe( deadpol );

const heroes = ['Deadpool', 'Superman', 'Batman'];

/* const h1 = heroes[0];
const h2 = heroes[1];
const h3 = heroes[2]; */

//const [ h1, h2, h3] = heroes;
const [ , , h3] = heroes;


console.log( h3);

