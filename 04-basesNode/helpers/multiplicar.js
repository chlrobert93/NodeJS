const fs = require('fs');
const color = require('colors');

const crearArchivo = async (base = 5, listar = false) => {
  try {


    let salida = "";

    for (let i = 1; i <= 10; i++) {
      let r = base * i;
      /* console.log(`${base} X ${i} = ${r}`); */
      salida += `${color.yellow(base)} ${ 'X'.magenta} ${color.yellow(i)} ${'='.magenta} ${color.red(r)}\n`;
    }
    
    if( listar ){
      console.log('================='.green);
      console.log('Tabla del: ', color.blue(base));
      console.log('================='.green);  
      
      console.log(salida);
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
