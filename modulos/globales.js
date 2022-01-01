//console.log(global);  // Esto no debe hacerse en produccion

let i = 0;
let interval = setInterval(() => {
    console.log('Hola');
    if(i === 3){
        clearInterval(interval);
    }
    i++;    
} , 1000);

setImmediate(() => {
    console.log('Adios');
});

console.log(process);
console.log(__dirname);
console.log(__filename);

global.miVariableGlobal = 'valor de prueba';
console.log(global.miVariableGlobal);  // Funciona de ambas maneras
console.log(miVariableGlobal);  // al ser global, puedo acceder a ella de cualquier parte