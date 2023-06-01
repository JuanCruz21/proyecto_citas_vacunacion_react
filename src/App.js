
import './App.css';
import Login from './components/Usuarios/Login'
import Home from './components/Usuarios/Home'
import Admin from './components/Usuarios/MenuUsuario'
import Usuarios from './components/Usuarios/Usuarios'
import FormUsuario from './components/Usuarios/FormUsuario'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Usuarios/MenuUsuario'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/admin' element={<Admin/>}></Route>
          <Route path='/admin/servicios' element={<Usuarios/>}></Route>
          <Route path='/admin/createUser' element={<FormUsuario/>}></Route>
          <Route path='/user'></Route>
          <Route path='/paciente'></Route>
          <Route path='*' element={<div>Page Not Found!</div>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
