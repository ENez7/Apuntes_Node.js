function hola(nombre, myCallback) {
    setTimeout(() => {
        console.log('Hola ' + nombre);
        myCallback();
    }, 1000);
}

function adios(nombre, otroCallback) {
    setTimeout(() => {
        console.log('Adios ' + nombre);
        otroCallback();
    }, 1000);
}

console.log('Inicio');

hola(process.env.NOMBRE, function() {
    adios(process.env.NOMBRE, function() {
        console.log('Fin');
    });
});
