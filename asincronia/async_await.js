async function hola(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Hola ' + nombre);
            resolve(nombre);
        }, 1000);
    });
}

async function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Adios ' + nombre);
            resolve(nombre);
        }, 1000);
    });
}

async function hablar(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Bla bla bla');
            resolve(nombre);
            //reject(nombre);  // if must resolve or reject
        }, 1000);
    });
}

// --------------------------------------------------
async function main() {
    await hola('Juan');
    for(var i=0; i<3; i++){
        await hablar();
    }
    await adios('Juan');
    console.log('Terminado el proceso');
}


// Trying async/await with promises
console.log('Iniciando el proceso');
main();