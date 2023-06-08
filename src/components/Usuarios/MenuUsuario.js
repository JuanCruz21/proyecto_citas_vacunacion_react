//import {ReactComponent  as Brand} from '../imagenes/ips.svg'
import  Brand from '../imagenes/logo-ips.png';
import { ReactComponent as Hamburger } from '../imagenes/icono.svg'
import React, {useState} from "react";
import { NavLink } from 'react-router-dom'
import '../css/navbar.css';
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

 const [showNavbar, setShowNavbar] = useState(false);
 const navegar = useNavigate();

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  const salir = () =>{
    localStorage.removeItem("usuarioActivo");
    localStorage.removeItem("rolUsuario");
    alert("su sesión ha finalizado")
    navegar("/login");
  }

  return (
    <nav className="navbar body">
      <div className="container">
        <div className="logo">
          <img className='imagen' src={Brand}  />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
        <ul>
          <li><NavLink to="/">Inicio</NavLink></li>
          <li><NavLink to="/admin/usuarios">Usuarios</NavLink></li>
          <li><NavLink to="/admin/vacunas">Vacunas</NavLink></li>
          <li><NavLink to="/admin/citas">Citas</NavLink></li>
          <li>Actualizacion de datos</li>
          <li onClick={salir}>Salir</li>
        </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar