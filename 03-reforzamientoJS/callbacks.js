setTimeout ( () => {
    console.log('Hola Mundo');
}, 1000);

const getUsuarioByID = ( id, callback ) => {

    const user = {
        //id: id
        id,
        nombre: 'Eder'
    }

    setTimeout( () => {
        callback(user)
    },  1500 )
}

//Usuario el nombre de su preferencia
getUsuarioByID( 10, ( usuario ) =>{
    console.log( usuario.id);
    console.log( usuario.nombre.toUpperCase());
} );