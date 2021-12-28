function hola(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Hola ' + nombre);
            resolve(nombre);
        }, 1000);
    });
}

function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Adios ' + nombre);
            resolve(nombre);
        }, 1000);
    });
}

function hablar(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Bla bla bla');
            //resolve(nombre);
            reject(nombre);
        }, 1000);
    });
}

// --------------------------------------------------
console.log('Iniciando el proceso');
hola('Juan')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('Terminado el proceso');
    })
    .catch((error) => {
        console.log('Error en el proceso');
        console.error(error);
    });