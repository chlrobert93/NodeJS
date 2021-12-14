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
  const empleado = empleados.find((e) => e.id === id);

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

const id = 1;
/* 
  getEmpleado(id)
    .then((empleado) => console.log(empleado))
    .catch((err) => console.log(err));
    
    getSalario(id)
        .then((salario) => console.log(salario))
        .catch((err) => console.log(err));
    */

let nombre;

getEmpleado(id)
  .then((empleado) => {
    nombre = empleado;
    return getSalario( id );
  })
  .then((salario) => console.log(`El empleado:`, nombre, `tiene un salario de:`, salario));
