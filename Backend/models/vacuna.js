const mongoose = require('mongoose');

const vacunaSquema = mongoose.Schema(
    {
        codigo:{
            type:'string',
            required:true
        },
        nombre:{
            type:'string',
            required:true
        },
        fecha_vencimiento:{
            type:'Date',
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
        },
        estado:{
            type:'string',
            required:true
        }
    },{
        collection: "Vacunas",
        versionKey: false
    }
);

module.exports = mongoose.model('Vacunas',vacunaSquema);