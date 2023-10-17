const express = require('express');
const Usuarios = require('../models/usuario');
const UsuariosRouter = express.Router();

//Listar Usuarios
UsuariosRouter.get("/", (req,res)=>{
    Usuarios.find()
        .then((datos) => res.json({Usuarios:datos}))
        .catch(error=>res.json({mensaje:error}));
});

//Obtener Usuario por id
UsuariosRouter.get("/:id", (req,res)=>{
    Usuarios.findById({_id: req.params.id})
        .then((datos)=>res.json(datos))
        .catch(error=>res.json({mensaje:error}))
});

//Guardar Usuario
UsuariosRouter.post("/", (req,res)=>{
    const usuario = new Usuarios(req.body);
    usuario.save()
    .then(data=> {
        console.log(data)
        res.json(data)})
    .catch(error=>res.json({mensaje:error}));
})

//Modificar Usuario
UsuariosRouter.patch("/", (req,res)=>{
    const usuario = new Usuarios(req.body);
    Usuarios.updateOne({_id: usuario._id}, usuario)
    .then(datos=>res.json(datos))
    .catch(error=>res.json({mensaje:error}))

})

//Eliminar Usuario
UsuariosRouter.delete("/:id", (req,res)=>{
    Usuarios.deleteOne({_id: req.params.id})
        .then(datos=> res.json(datos))
        .catch(error=> res.json({mensaje:error}))
});

//Login Usuario
UsuariosRouter.post("/login", async(req,res)=>{
    const usuario = await Usuarios.findOne({ correo: req.body.correo , contrasena: req.body.contrasena })
    .then(datos=> res.json(datos))
    .catch(error=> res.json({mensaje:error}));
})

module.exports = UsuariosRouter;