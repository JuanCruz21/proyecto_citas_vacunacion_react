const mongoose = require('mongoose');

const citaSquema = mongoose.Schema(
    {
        codigo_cita:{
            type:'string',
            required:true
        },
        fecha_cita:{
            type:'Date',
            required:true
        },
        usuario:{
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
            correo:{
                type:'string'
            },
            telefono:{
                type:'string',
                required:true
            }
        },
        vacunador:{
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
            }
        },
        id_vacuna:{
            codigo:{
                type:'string',
                required:true
            },
            nombre:{
                type:'string',
                required:true
            },
            dosis:{
                type:'number',
                required:true
            },
            lote:{
                type:'string',
                required:true
            },
            fabricante:{
                type:'string',
                required:true
            }
        },
        estado:{
            type:'string',
            required:true
        }
    },{
        collection: "Citas",
        versionKey: false
    }
);

module.exports = mongoose.model('Citas',citaSquema);