const fs = require('fs');

let archivoTareas = {
    archivo : 'tareas.json',
    leer: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
    escribirJSON: function (array){
      const tareaNueva = JSON.stringify(array, null, 4);
      fs.writeFileSync('./tareas.json', tareaNueva);   
    },
    guardarTarea: function (objeto){
      const db = archivoTareas.leer();
      console.log(objeto);
      const tareaNueva = JSON.stringify(objeto, null, 4);
      console.log(tareaNueva);
      archivoTareas.escribirJSON(db.push(tareaNueva)) 
    }
    
}

module.exports = archivoTareas;  