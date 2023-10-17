const mongoose = require('../db/conectionDB');

const usuarioSquema = mongoose.Schema(
    {
        cedula:{
            type: 'string',
            required:true,
        },
        nombre:{
            type:'string',
            required:true
        },
        apellido:{
            type:'string',
            required:true
        },
        direccion:{
            type:'string',
            required:true
        },
        correo:{
            type:'string'
        },
        telefono:{
            type:'string',
            required:true
        },
        genero:{
            type:'string',
            required:true
        },
        fecha_nacimiento:{
            type:'Date',
            required:true
        },
        contrasena:{
            type:'string',
            required:true
        },
        estado:{
            type:'string',
            required:true
        },
        rol:{
            type:'string',
            required:true
        }
        
    },{
        collection: "Usuarios",
        versionKey: false
    }
);

module.exports = mongoose.model('Usuarios',usuarioSquema);