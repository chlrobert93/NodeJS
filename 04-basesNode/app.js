const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');


console.clear();

/* console.log(process.argv); */

 


crearArchivo(argv.b, argv.l, argv.f)
  .then((nombreArchivo) => console.log(nombreArchivo.rainbow, "creado"))
  .catch((err) => console.log(err));
