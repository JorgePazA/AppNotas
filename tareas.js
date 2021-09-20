const fs = require('fs');

let archivoTareas = {
    archivo : 'tareas.json',
    leer: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
    escribirJSON: function (arNew){
      let arrayToString = JSON.stringify(arNew, null, 4)
      fs.writeFileSync(this.archivo, arrayToString)
    },
    guardarTarea: function (objeto){
      let db = this.leer();
      db.push(objeto);
      this.escribirJSON(db);
    },
    filtrarPorEstado: function (estado){
      let db = archivoTareas.leer(); 
      return db.filter(item => item.estado == estado)
    }
}

module.exports = archivoTareas;  