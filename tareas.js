const fs = require('fs');

let archivoTareas = {
    archivo : 'tareas.json',
    leer: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
    guardarTarea: function (objeto){
      let db = archivoTareas.leer();
      db.push(objeto);
      fs.writeFileSync('./tareas.json', JSON.stringify(db), null, 4); 
    },
    filtrarPorEstado: function (estado){
      let db = archivoTareas.leer(); 
      return db.filter(item => item.estado == estado)
    }
}

module.exports = archivoTareas;  