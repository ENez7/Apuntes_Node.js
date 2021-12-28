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

function hablar(callbackHablar){
    setTimeout(() => {
        console.log('Bla bla bla');
        callbackHablar();
    }, 1000);
}

function conversacion(nombre, veces, callback) {
    if (veces > 0) {
        hablar(() => {
            conversacion(nombre, veces - 1, callback);
        });
    } else {
        adios(nombre, callback);
    }
}
    

// ---------------------------

console.log('Inicio');
var nombre = process.env.NOMBRE;

hola(nombre, () => {
    conversacion(nombre, 3, ()=>{
        console.log('Fin');
    });
});

// hola(nombre, function() {
//     hablar(function () {
//         hablar(function () {
//             hablar(function () {
//                 adios(nombre, function() {
//                     console.log('Fin');
//                 });
//             });
//         });
//     });
// });

