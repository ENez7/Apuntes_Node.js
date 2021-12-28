// Los procesos en node.js
// son procesados por un solo hilo

console.log('Hola mundo');

let i = 0;

let a = setInterval(() => {
    console.log(i);
    i++;

    if (i === 5) {
        clearInterval(a);  // detiene el intervalo, funciona como break
    }
}, 1000);

console.log('Fin');