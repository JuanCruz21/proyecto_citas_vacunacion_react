const express = require('express');
const Vacunas = require('../models/vacuna');
const VacunasRouter = express.Router();

//Listar Vacunas
VacunasRouter.get("/", (req,res)=>{
    Vacunas.find()
        .then((datos) => res.json({Vacunas:datos}))
        .catch(error=>res.json({mensaje:error}));
});

//Obtener Vacuna por id
VacunasRouter.get("/:id", (req,res)=>{
    Vacunas.findById({_id: req.params.id})
        .then((datos)=>res.json(datos))
        .catch(error=>res.json({mensaje:error}))
});

//Guardar Vacuna
VacunasRouter.post("/", (req,res)=>{
    const vacuna = new Vacunas(req.body);
    vacuna.save()
    .then(data=> {
        console.log(data)
        res.json(data)})
    .catch(error=>res.json({mensaje:error}));
})

//Modificar Vacuna
VacunasRouter.patch("/", (req,res)=>{
    const vacuna = new Vacunas(req.body);
    Vacunas.updateOne({_id: vacuna._id}, vacuna)
    .then(datos=>res.json(datos))
    .catch(error=>res.json({mensaje:error}))

})

//Eliminar Vacuna
VacunasRouter.delete("/:id", (req,res)=>{
    Vacunas.deleteOne({_id: req.params.id})
        .then(datos=> res.json(datos))
        .catch(error=> res.json({mensaje:error}))
});


module.exports = VacunasRouter;