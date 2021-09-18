let archivoTareas = require('./tareas');
let accion = process.argv[2];
 

switch(accion){
    case 'listar':
        console.log('Listado de tareas');
        let tareas = archivoTareas.leer();
        tareas.forEach(function (item) { console.log(item)});
        break;

    case 'crear':
        let ingreso = {
            titulo : process.argv[3],
            estado : 'pendiente',
        }
        archivoTareas.guardarTarea(ingreso);
        console.log('Realizado...');
        break;

    case undefined:
        console.log('Tenés que pasarme una acción');
        break;
    
    default:
        console.log('No entiendo que me estás pidiendo');
        console.log('Las acciones permitidas son: listar');
        break;
}