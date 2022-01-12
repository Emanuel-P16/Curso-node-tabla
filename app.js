
const { crearArchivo } = require('./helpers/multiplier')
const colors = require('colors')
const argv = require('./config/yargs')


console.clear()
// console.log(process.argv)
// console.log(argv.b)
// console.log('base: yargs',argv.base)
// const base = 7

crearArchivo(argv.b,argv.l,argv.h)  
    .then( nombreArchivo => console.log(nombreArchivo.rainbow,'creado'))
    .catch(err => console.log(err))