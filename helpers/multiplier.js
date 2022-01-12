const fs = require('fs')
const color =require('colors')
const crearArchivo = async(base = 5,lista,hasta=10) => {


    try{
        let salida=''

        if (lista){
            console.clear()
            console.log('==========='.green)
            console.log(`Tabla del: ${base}`)
            console.log('===========')
        }

        for (i=1;i <= hasta;i++){

            salida += `${base} x ${i} = ${ base * i }\n`
        }
        if (lista) {console.log(salida)}
        fs.writeFileSync(`./salida/tabla ${base}.txt`,salida, (err)=>{
            if (err) throw err
            console.log('Archivo creado con exito')
        })

        return `tabla-${base}.txt`
    } catch(err){
        throw err
    }
}
module.exports ={
    crearArchivo
}