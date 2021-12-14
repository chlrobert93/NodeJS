//const { option } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
  })
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    demandOption: true,
    default: false
  })
  .check((argv, options) => {
    /* console.log('yargs', argv  ) */
    if (isNaN(argv.b)) {
      throw 'La base tiene que ser un número';
    }
    //Si no hay error regresa un true
    return true; 
  }).argv;







console.clear();

/* console.log(process.argv); */
console.log(argv);

/* console.log('base: yargs', argv.base); */

/* console.log(process.argv); */
/* const [ , , arg3 = 'base5' ] = process.argv;
const [ , base = 5 ] = arg3.split('=');
console.log( base ); */

/* const base = 20; */

crearArchivo(argv.b, argv.l)
  .then((nombreArchivo) => console.log(nombreArchivo, "creado"))
  .catch((err) => console.log(err));
