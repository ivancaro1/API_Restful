const fs = require('fs')      
const Math = require('mathjs')                                  // import file system module
// Star of class Contenedor
module.exports = class ContenedorArchivo {

    constructor(nombreArchivo){
        this.nombreArchivo = nombreArchivo;
    }

    async save(producto){   
        let contenidoArchivo;                                   // creates contenidoArchivo variable
        contenidoArchivo = await this.getAll();
        producto.id = await this.generateID();
        contenidoArchivo.push(producto) ;
        await this.writeFile(contenidoArchivo);
        return producto
    }

    async getById(id_producto){
        let contenidoArchivo;                                   // creates contenidoArchivo variable

        function encontroId(objeto) {                           // declares a function to find the id_producto selected
            return objeto.id === id_producto;
        }
        
        contenidoArchivo = await this.getAll();

        let resultado = contenidoArchivo.find(encontroId);  // callback encontroId function to extract the object with the id selected
            if(resultado === undefined){                        // if does not find a value returns null
                resultado = {error: 'producto no encontrado'};
            }   
        return resultado;
    }

    async getAll(){
        let contenidoArchivo;                                   // creates contenidoArchivo variable
            try{
                contenidoArchivo = await fs.promises.readFile(this.nombreArchivo,'utf-8')
                return JSON.parse(contenidoArchivo) 
            }catch(err){
                throw err;
            }
    }
    
    async deleteById(id_producto){                                    
        let contenidoArchivo;                                   // creates contenidoArchivo variable

        function encontroId(objeto) {                           // starts of leerArchivo async function to read products in the file
            return objeto.id === id_producto;
        }

        contenidoArchivo = await this.getAll()
            let resultado = contenidoArchivo.find(encontroId);  // callback encontroId function to extract the object with the id selected
                if(resultado === undefined){                        // if does not find a value returns null
                    throw error;
                    // resultado = {error: 'producto no encontrado'};
                }else{ 
                    resultado = {estado: 'eliminado'};
                    let indice = contenidoArchivo.indexOf(resultado);    // finds the index in the array of the id selected
                    contenidoArchivo.splice(indice,1)
                }   
        await this.writeFile(contenidoArchivo);
        return resultado
    }

    async deleteAll(){
        let contenidoArchivo;                                   // creates contenidoArchivo variable
        contenidoArchivo = await this.getAll()
        contenidoArchivo = [];
        await this.writeFile(contenidoArchivo);
    }

    async writeFile(objeto){
        try{
            await fs.promises.writeFile(this.nombreArchivo,JSON.stringify(objeto,null,2))
        }catch(err){
            throw err;              // if there is an error print a error message
        }
    }

    async getRandom(){
        let contenidoArchivo;
        contenidoArchivo = await this.getAll() 
        let keys = Object.keys(contenidoArchivo);
        return contenidoArchivo[keys[ keys.length * Math.random() << 0]];
    }

    async generateID(){
        let contenidoArchivo;
        contenidoArchivo = await this.getAll()
        let max = 0;
        contenidoArchivo.forEach(contenidoArchivo => {
            if (contenidoArchivo.id > max) {
                max = contenidoArchivo.id;
            }
        }) 
        if (max == 0){
            return 1
        } else{
            return max + 1
        }      
    }

    async replaceProduct (id_producto,datos){
        let contenidoArchivo;

        contenidoArchivo = await this.getAll();

        const foundIndex = contenidoArchivo.findIndex(p => p.id  === id_producto);

        if (foundIndex === -1) {
            const error = new Error('no existe una persona con ese id')
            error.tipo = 'db not found'
            throw error
        }

        const product = datos
        product.id = id_producto
        contenidoArchivo[foundIndex] = product
        await this.writeFile(contenidoArchivo);
        return product
    }
 }