import React, {useState,useEffect} from 'react';
import MenuUsuario from '../Usuarios/MenuUsuario';
import { useNavigate } from 'react-router-dom';

function Home(){

    const navegar = useNavigate();
    const [usuarioActivo, setUsuarioActivo] = useState(null);

    useEffect(()=>{
        setUsuarioActivo(localStorage.getItem("usuarioActivo"));
        if(localStorage.getItem("usuarioActivo") === null){
            navegar("/login");
        }
    },[navegar,usuarioActivo])

    return(
        <MenuUsuario/>
    )

}

export default Home;