import React,{ useEffect, useState } from "react";
import MenuUsuario  from '../Usuarios/MenuUsuario';
import TablaCitas from './TablaCitas';
import FormCitas from "./FormCitas";
import { getListaCitas,eliminarCita,agregarCita,editarCita } from '../../API/CitasApi'
import { getListaVacunas } from '../../API/VacunasApi';
import { getListaUsuarios } from '../../API/UsuariosApi';
import { useNavigate } from "react-router-dom";


function Cita() {
    const navegar = useNavigate();
    const [usuarioActivo, setUsuarioActivo] = useState(null);

    useEffect(()=>{
        setUsuarioActivo(localStorage.getItem("usuarioActivo"));
        if(localStorage.getItem("usuarioActivo") === null){
            navegar("/login");
        }
    },[navegar,usuarioActivo])

    const [citas,setCitas] = useState([]);
    const [vacunas,setVacunas] = useState([]);
    const [vacunadores,setVacunadores] = useState([]);
    const [cita,setCita] = useState([]);
    const [mostrarLista,setmostrarLista] = useState(true);

    const listar=()=>{
        getListaCitas().then((data)=>{setCitas(data)}).catch((err)=>{console.log(err)});
    }

    const listaDatos = () =>{
        getListaVacunas().then((data)=>{setVacunas(data)}).catch((err)=>{console.log(err)});
        getListaUsuarios().then((data)=>{setVacunadores(data)}).catch((err)=>{console.log(err)});
    }

    if(citas.length === 0){
        listar();
        listaDatos();
    }

    const eliminar = (id) => {
        eliminarCita(id).then((data)=> {
          if(data.deletedCount === 1)
          alert("La cita ha sido eliminado exitosamente")
          listar();
        }).catch((err) => {console.log(err)})
      }

    const ver = (cita) =>{
        setCita(cita);
        setmostrarLista(false);
    }

    const agregar = () =>{
        setCita();
        setmostrarLista(false);
    }

    const cancelar = () =>{
        setmostrarLista(true);
    }

    const guardar = (cita) =>{
        if(cita._id === null){
            agregarCita(cita).then((data)=>{listar();alert("La cita ha sido agregado exitosamente")}).catch((err)=>{console.log(err)});
        }else{
            editarCita(cita).then((data)=>{listar(); alert("La cita ha sido modificado exitosamente")}).catch((err)=>{console.log(err)});
        }
    }

   return(
    <div>
        <MenuUsuario/>
        {!mostrarLista && <div>
            <FormCitas setCita={cita} vacunas={vacunas} vacunadores={vacunadores} onView={cancelar} onSave={guardar}/>
        </div>}
        {mostrarLista && <TablaCitas citas ={citas} onDelete={eliminar} onView={ver} onCreate={agregar}/>}
    </div>
   )
}

export default Cita;