import React,{ useEffect, useState } from "react";
import MenuUsuario  from '../Usuarios/MenuUsuario';
import TablaVacunas from './TablaVacunas';
import FormVacuna from "./FormVacuna";
import { getListaVacunas,eliminarVacuna,agregarVacuna,editarVacuna } from '../../API/VacunasApi'
import { useNavigate } from "react-router-dom";


function Vacuna() {
    const navegar = useNavigate();
    const [usuarioActivo, setUsuarioActivo] = useState(null);

    useEffect(()=>{
        setUsuarioActivo(localStorage.getItem("usuarioActivo"));
        if(localStorage.getItem("usuarioActivo") === null){
            navegar("/login");
        }
    },[navegar,usuarioActivo])

    const [vacunas,setVacunas] = useState([]);
    const [vacuna,setVacuna] = useState([]);
    const [mostrarLista,setmostrarLista] = useState(true);

    const listar=()=>{
        getListaVacunas().then((data)=>{setVacunas(data)}).catch((err)=>{console.log(err)});
    }

    if(vacunas.length === 0){
        listar();
    }

    const eliminar = (id) => {
        eliminarVacuna(id).then((data)=> {
          if(data.deletedCount === 1)
          alert("La vacuna ha sido eliminado exitosamente")
          listar();
        }).catch((err) => {console.log(err)})
      }

    const ver = (vacuna) =>{
        setVacuna(vacuna);
        setmostrarLista(false);
    }

    const agregar = () =>{
        setVacuna();
        setmostrarLista(false);
    }

    const cancelar = () =>{
        setmostrarLista(true);
    }

    const guardar = (vacuna) =>{
        if(vacuna._id === null){
            agregarVacuna(vacuna).then((data)=>{listar();alert("La vacuna ha sido agregado exitosamente")}).catch((err)=>{console.log(err)});
        }else{
            editarVacuna(vacuna).then((data)=>{listar(); alert("La vacuna ha sido modificado exitosamente")}).catch((err)=>{console.log(err)});
        }
    }

   return(
    <div>
        <MenuUsuario/>
        {!mostrarLista && <div>
            <FormVacuna setVacuna={vacuna} onView={cancelar} onSave={guardar}/>
        </div>}
        {mostrarLista && <TablaVacunas vacunas ={vacunas} onDelete={eliminar} onView={ver} onCreate={agregar}/>}
    </div>
   )
}

export default Vacuna;