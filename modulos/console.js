console.log('Ver algo en la consola');
console.info('Ver algo en la consola');
console.error('Error');
console.warn('Advertencia');

var tabla = [
    {
        nombre: 'Juan',
        edad: 23
    },
    {   
        nombre: 'Pedro',
        edad: 25
    },
];
console.table(tabla);

console.group('Conversacion');
console.log('Hola');
console.log('Como estas?');
console.log('Bien');
console.group('Chat');
console.log('Bla bla bla');
console.log('Bla bla bla');
console.log('Bla bla bla');
console.groupEnd('Chat');
console.groupEnd('Conversacion');
console.log('Otras cosas');