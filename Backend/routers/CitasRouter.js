const express = require('express');
const Citas = require('../models/cita');
const CitasRouter = express.Router();

//Listar Citas
CitasRouter.get("/", (req,res)=>{
    Citas.find()
        .then((datos) => res.json({Citas:datos}))
        .catch(error=>res.json({mensaje:error}));
});

//Obtener Cita por id
CitasRouter.get("/:id", (req,res)=>{
    Citas.findById({_id: req.params.id})
        .then((datos)=>res.json(datos))
        .catch(error=>res.json({mensaje:error}))
});

//Guardar Cita
CitasRouter.post("/", (req,res)=>{
    const cita = new Citas(req.body);
    cita.save()
    .then(data=> {
        console.log(data)
        res.json(data)})
    .catch(error=>res.json({mensaje:error}));
})

//Modificar Cita
CitasRouter.patch("/", (req,res)=>{
    const cita = new Citas(req.body);
    Citas.updateOne({_id: cita._id}, cita)
    .then(datos=>res.json(datos))
    .catch(error=>res.json({mensaje:error}))

})

//Eliminar Cita
CitasRouter.delete("/:id", (req,res)=>{
    Citas.deleteOne({_id: req.params.id})
        .then(datos=> res.json(datos))
        .catch(error=> res.json({mensaje:error}))
});


module.exports = CitasRouter;