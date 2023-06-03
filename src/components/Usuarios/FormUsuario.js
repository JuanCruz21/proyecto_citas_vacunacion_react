import React,{useEffect, useState} from "react";

function FormUsuario(props) {

  const {getUsuario,setUsuario,onView,onSave, registrar=false} = props;
  const [user,setUser] = useState({
        _id : null,
        cedula: "",
        nombre: "",
        apellido: "",
        direccion: "",
        correo: "",
        telefono: "",
        genero: "",
        fecha_nacimiento: "",
        contrasena: "",
        estado: "",
        rol: ""
    });

    const limpiar = () =>{
      setUser({
        _id : null,
        cedula: "",
        nombre: "",
        apellido: "",
        direccion: "",
        correo: "",
        telefono: "",
        genero: "",
        fecha_nacimiento: "",
        contrasena: "",
        estado: "",
        rol: ""
      })
    }

    if(user === null){
      limpiar();
    }

    useEffect(()=>{
      if(setUsuario){
        setUser(setUsuario)
      }
    },[setUsuario])


    const handleChange = (e) =>{
        setUser({
          ...user, [e.target.name] : e.target.value
        });
        //getUsuario(user);
    };

    const onClickGuardar = (e) =>{
      e.preventDefault();
      onSave(user);
      limpiar();
    }

    return(
        <div>
        <div className="col-xxl" id="agregarUsuario" >
                  <div className="card mb-4">
                    <div className="card-header d-flex align-items-center justify-content-between">
                      <h5 className="mb-0">Agregar Usuario</h5>
                    </div>
                    <div className="card-body">
                      <form>
                      <div className="row mb-3">
                          <label className="col-sm-2 col-form-label">Cedula</label>
                          <div className="col-sm-10">
                            <input type="text" className="form-control" id="cedula" name="cedula" placeholder="Digite la cedula del Usuario" value={user.cedula} onChange={(e)=>{handleChange(e)}} />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-2 col-form-label">Nombre</label>
                          <div className="col-sm-10">
                            <input type="text" className="form-control" id="nomUsuario" name="nombre" placeholder="Digite el nombre del Usuario" value={user.nombre} onChange={(e)=>{handleChange(e)}} />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-2 col-form-label">Apellidos</label>
                          <div className="col-sm-10">
                            <input type="text" className="form-control" id="apellido" name="apellido" placeholder="Digite el apellido del Usuario" value={user.apellido} onChange={(e)=>{handleChange(e)}} />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-2 col-form-label">Fecha de nacimiento</label>
                          <div className="col-sm-10">
                            <input type="date" className="form-control" id="fecha_nacimiento" name="fecha_nacimiento" placeholder="Digite la fecha de nacimiento del Usuario" value={user.fecha_nacimiento} onChange={(e)=>{handleChange(e)}} />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-2 col-form-label">Dirección</label>
                          <div className="col-sm-10">
                            <input type="text" className="form-control" id="direccion" name="direccion" placeholder="Digite la dirección del Usuario" value={user.direccion} onChange={(e)=>{handleChange(e)}} />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-2 col-form-label">Correo</label>
                          <div className="col-sm-10">
                            <input type="text" className="form-control" id="correo" name="correo" placeholder="Digite el correo del Usuario" value={user.correo} onChange={(e)=>{handleChange(e)}} />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-2 col-form-label">Telefono</label>
                          <div className="col-sm-10">
                            <input type="text" className="form-control" id="telefono" name="telefono" placeholder="Digite el telefono del Usuario" value={user.telefono} onChange={(e)=>{handleChange(e)}} />
                          </div>
                        </div>
                        <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Genero</label>
                        <div className="col-sm-10">
                        <select className="form-select" id="genero" name="genero" value={user.genero} onChange={(e)=>{handleChange(e)}}>
                          <option selected="">Seleccionar Opción</option>
                          <option value="Femenino">Femenino</option>
                          <option value="Masculino">Masculino</option>
                        </select>
                        </div>
                      </div>
                      <div className="row mb-3">
                          <label className="col-sm-2 col-form-label">Contraseña</label>
                          <div className="col-sm-10">
                            <input type="password" className="form-control" id="contrasena" name="contrasena" placeholder="Digite la contraseña del Usuario" value={user.contrasena} onChange={(e)=>{handleChange(e)}} />
                          </div>
                        </div>
                        <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Rol</label>
                        <div className="col-sm-10">
                        <select className="form-select" id="rol" name="rol" value={user.rol} onChange={(e)=>{handleChange(e)}}>
                          <option selected="">Seleccionar Opción</option>
                          <option value="administrador">Administrador</option>
                          <option value="personal">Personal</option>
                          <option value="paciente">Paciente</option>
                        </select>
                        </div>
                      </div>
                        <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Estado</label>
                        <div className="col-sm-10">
                        <select className="form-select" id="estado" name="estado" value={user.estado} onChange={(e)=>{handleChange(e)}}>
                          <option selected="">Seleccionar Opción</option>
                          <option value="activo">Activo</option>
                          <option value="inactivo">Inactivo</option>
                        </select>
                        </div>
                      </div>
                        <div className="row justify-content-end">
                          <div className="col-sm-10">
                            <button type="button" className="btn btn-primary" onClick={onClickGuardar}>Guardar</button>
                            <button className="btn btn-danger" onClick={()=>{onView()}}>Cancelar</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
            </div>
        </div>
    )
}

export default FormUsuario;
