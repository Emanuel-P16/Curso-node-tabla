const argv = require('yargs')
                    .option('b',{
                        alias:'base',
                        type:'number',
                        demandOption: true,
                        describe: 'Es la base de la tabla de multiplicar'
                    })
                    .option('l',{
                        alias:'lista',
                        type:'boolean',
                        demandOption: false,
                        default:false,
                        describe: 'Muestra la tabla en consola'
                    })
                    .option('h',{
                        alias:'hasta',
                        type:'number',
                        demandOption:'false',
                        default:10,
                        describe:'Asigna El valor Hasta de la tabla'
                    })
                    .check( (argv,options) => {
                        if(isNaN(argv.b)){
                            throw('la base tiene que ser un numero')
                        } return true;
                        if(isNaN(argv.h)){
                            throw('El hasta tiene que ser un numero')
                        } return true;
                    })
                    
                    .argv

module.exports = argv