import React, {useState} from "react";
import { useNavigate } from 'react-router-dom'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBBtn,MDBContainer, MDBCard, MDBCardBody,MDBCheckbox,MDBRow,MDBCol,MDBInput} from 'mdb-react-ui-kit';
import { login } from "../../API/UsuariosApi";
import estilos from "../css/style.css";

function Login() {

  const navegar = useNavigate();
  const [usuario,setUsuario] = useState({
    correo : "",
    contrasena : ""
  });

  const handleChange = (e) =>{
    setUsuario({
      ...usuario,[e.target.name] : e.target.value
    });
  }

  const ingresar = (e) => {
    e.preventDefault();
    login(usuario)
      .then((data) => {
        if (data == null) {
          alert("Error al ingresar. El usuario o la contraseña son incorrectos")
        } else {
          localStorage.setItem("usuarioActivo", JSON.stringify(data));
          localStorage.setItem("rolUsuario", data.rol);
          navegar("/")
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <MDBContainer fluid className="body">
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>
              <h2 className="fw-bold mb-2 text-center">Bienvenido</h2>
              <p className="text-white-50 mb-3">Por favor digita tu correo y contraseña!</p>
              <MDBInput wrapperClass='mb-4 w-100' label='Correo Electronico' id='correo' name="correo" type='email' value={usuario.correo} onChange={(e)=>{handleChange(e)}} size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' label='Contraseña' id='contrasena' name="contrasena" value={usuario.contrasena} onChange={(e)=>{handleChange(e)}} type='password' size="lg"/>
              <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Recuerdame' />
              <MDBBtn size='lg' onClick={ingresar}>Iniciar Sesión</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
