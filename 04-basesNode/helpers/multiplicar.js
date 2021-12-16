const fs = require('fs');
const color = require('colors');

const crearArchivo = async (base = 5, listar = false, f = 10) => {
  try {


    let salida = "";
    let consola = "";

    for (let i = 1; i <= f; i++) {
      let r = base * i;
      /* console.log(`${base} X ${i} = ${r}`); */
      salida += `${ base } X ${ i } = ${ (r) }\n`;
      consola += `${ color.yellow(base) } ${ 'X'.magenta } ${ color.yellow(i) } ${ '='.magenta } ${ color.red(r) }\n`;
    }
    
    if( listar){
      console.log('================='.green);
      console.log('Tabla del: ', color.blue(base));
      console.log('================='.green);  
      
      console.log(consola);
     }
    

    fs.writeFileSync(`tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
