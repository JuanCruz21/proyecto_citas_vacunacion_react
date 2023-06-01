import React,{ useState } from "react";
import MenuUsuario  from './MenuUsuario';
import TablaUsuarios from './TablaUsuarios';
import { getListaUsuarios } from '../../API/UsuariosApi'
import { eliminarUsuario } from '../../API/UsuariosApi'
import { agregarUsuario } from '../../API/UsuariosApi'


function Usuario() {

    const [usuarios,SetUsuarios] = useState([]);

    const listar=()=>{
        getListaUsuarios().then((data)=>{SetUsuarios(data)}).catch((err)=>{console.log(err)});
    }

    if(usuarios.length === 0){
        listar();
    }

    const eliminar = (id) => {
        eliminarUsuario(id).then((data)=> {
          if(data.deletedCount === 1)
          listar();
        }).catch((err) => {console.log(err)})
      }

    /*const onClickGuardar = (e)=>{
        e.preventDefault();
        //agregarUsuario(user);
        //limpiar();
    };*/

   return(
    <div>
        <MenuUsuario/>
        <TablaUsuarios usuarios ={usuarios} onDelete={eliminar}/>
    </div>
   )
}

export default Usuario;