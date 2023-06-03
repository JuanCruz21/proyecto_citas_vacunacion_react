
import Login from '../Usuarios/Login'
import Home from '../generales/Home'
import Admin from '../Usuarios/MenuUsuario'
import Usuarios from '../Usuarios/Usuarios'
import FormUsuario from '../Usuarios/FormUsuario'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function Router() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/admin' element={<Admin/>}></Route>
          <Route path='/admin/usuarios' element={<Usuarios/>}></Route>
          <Route path='/admin/createUser' element={<FormUsuario/>}></Route>
          <Route path='/user'></Route>
          <Route path='/paciente'></Route>
          <Route path='*' element={<div>Page Not Found!</div>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default Router;
