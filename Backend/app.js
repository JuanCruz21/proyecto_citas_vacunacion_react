const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const UsuariosRouter = require('./routers/usuariosRouter');
const VacunasRouter = require('./routers/vacunasRouter');
const CitasRouter = require('./routers/CitasRouter');
const app= express();

app.use(cors());
app.use(bodyParser.json());

//Usuarios
app.use("/usuarios", UsuariosRouter);

//Vacunas
app.use("/vacunas", VacunasRouter);

//Citas
app.use("/citas", CitasRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT);