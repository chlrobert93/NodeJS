const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'
  })
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    demandOption: true,
    default: false,
    describe: 'Muestra la tabla en consola'
  })
  .option('f', {
    alias: 'limite',
    type: 'number',
    demandOption: false,
    describe: 'Ete es el número hasta donde quieres la tabla'

  })
  .check((argv, options) => {
    /* console.log('yargs', argv  ) */
    if (isNaN(argv.b)) {
      throw 'La base tiene que ser un número';
    }
    //Si no hay error regresa un true
    return true; 
  }).argv;

  module.exports = argv;