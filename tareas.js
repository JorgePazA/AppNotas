const fs = require('fs');

let archivoTareas = {
    archivo : 'tareas.json',
    leer: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
    escribirJSON: function (array){
      console.log(array);
      //fs.writeFileSync('./tareas.json', tareaNueva, {encoding: 'utf8'});   
    },
    guardarTarea: function (objeto){
      const db = archivoTareas.leer();
      this.escribirJSON(db.push(objeto));
      console.log(db)
    }
    
}

module.exports = archivoTareas;  