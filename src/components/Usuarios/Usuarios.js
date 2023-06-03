import React,{ useEffect, useState } from "react";
import MenuUsuario  from './MenuUsuario';
import TablaUsuarios from './TablaUsuarios';
import { getListaUsuarios } from '../../API/UsuariosApi'
import { eliminarUsuario } from '../../API/UsuariosApi'
import { agregarUsuario } from '../../API/UsuariosApi'
import { editarUsuario } from '../../API/UsuariosApi'
import FormUsuario from "./FormUsuario";
import { useNavigate } from "react-router-dom";


function Usuario() {
    const navegar = useNavigate();
    const [usuarioActivo, setUsuarioActivo] = useState(null);

    useEffect(()=>{
        setUsuarioActivo(localStorage.getItem("usuarioActivo"));
        if(localStorage.getItem("usuarioActivo") === null){
            navegar("/login");
        }
    },[navegar,usuarioActivo])

    const [usuarios,setUsuarios] = useState([]);
    const [usuario,setUsuario] = useState([]);
    const [mostrarLista,setmostrarLista] = useState(true);

    const listar=()=>{
        getListaUsuarios().then((data)=>{setUsuarios(data)}).catch((err)=>{console.log(err)});
    }

    if(usuarios.length === 0){
        listar();
    }

    const eliminar = (id) => {
        eliminarUsuario(id).then((data)=> {
          if(data.deletedCount === 1)
          alert("El usuario ha sido eliminado exitosamente")
          listar();
        }).catch((err) => {console.log(err)})
      }

    const ver = (usuario) =>{
        setUsuario(usuario);
        setmostrarLista(false);
    }

    const agregar = () =>{
        setUsuario();
        setmostrarLista(false);
    }

    const cancelar = () =>{
        setmostrarLista(true);
    }

    const guardar = (usuario) =>{
        if(usuario._id === null){
            agregarUsuario(usuario).then((data)=>{listar();alert("El usuario ha sido agregado exitosamente")}).catch((err)=>{console.log(err)});
        }else{
            editarUsuario(usuario).then((data)=>{listar(); alert("El usuario ha sido modificado exitosamente")}).catch((err)=>{console.log(err)});
        }
    }

   return(
    <div>
        <MenuUsuario/>
        {!mostrarLista && <div>
            <FormUsuario setUsuario={usuario} onView={cancelar} onSave={guardar}/>
        </div>}
        {mostrarLista && <TablaUsuarios usuarios ={usuarios} onDelete={eliminar} onView={ver} onCreate={agregar}/>}
    </div>
   )
}

export default Usuario;