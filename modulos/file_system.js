const fs = require('fs');  // fs viene en node

function leer(ruta, cb) {
    fs.readFile(ruta, (error, data) => {
        cb(data.toString());
    });
}

function escribir(ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, (error) => {
        if(error)
            console.error(error, 'Error al escribir archivo');
        else
            console.log("Archivo escrito correctamente");
    });
}

function borrar(ruta, cb) {
    fs.unlink(ruta, (error) => {
        if(error)
            console.error(error, 'Error al borrar archivo');
        else
            console.log("Archivo borrado correctamente");
    });
}

//leer(__dirname + '/in.txt', console.log);
//escribir(__dirname + '/out.txt', 'Hola mundo\nTengo esto de prueba\nTodo nuevo', console.log);
borrar(__dirname + '/out.txt', console.log);


// EJERCICIO: LISTAR TODOS LOS ARCHIVOS DE UN DIRECTORIO Y ABRIRLOS/LEERLOS/ELIMINARLOS