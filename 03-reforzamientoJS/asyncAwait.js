const empleados = [
    {
      id: 1,
      nombre: "Eder",
    },
    {
      id: 2,
      nombre: "Linda",
    },
    {
      id: 3,
      nombre: "Karen",
    },
  ];
  
  const salario = [
    {
      id: 1,
      salario: 1000,
    },
    {
      id: 2,
      salario: 1500,
    },
  ];
  
  const getEmpleado = (id) => {
    const empleado = empleados.find((e) => e.id === id)?.nombre;
  
    return new Promise((resolve, reject) => {
      if (empleado) {
        resolve(empleado);
      } else {
        reject(`No existe empleado con id ${id}`);
      }
    });
  };
  
   const getSalario = (id) => {
      //? pregunta si el salrio existe
      const empledoSalario = salario.find((s) => s.id === id)?.salario;
    
      return new Promise((resolve, reject) => {
        if (empledoSalario) {
          resolve(empledoSalario);
        } else {
          reject(`Salario con id ${id} no existe`);
        }
      });
    }; 

//Trans formar la función getSalario
//Para que regrese una promesa

const getInforUsuario = async(id) => {
    
    try{
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);

        return `El  salario del empleado: ${ empleado } es de ${ salario }`;

    } catch (error) {
        throw error;
    }
}

const id=1;

getInforUsuario( id )
  .then( msg =>{
       console.log('TODO BIEN!');
       console.log(msg); 
    })
  .catch( err => {  
      console.log('TODO MAL!');
      console.log( err );
    });
    

 
