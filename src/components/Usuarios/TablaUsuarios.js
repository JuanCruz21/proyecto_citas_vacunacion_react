import React from "react";

function TablaUsuario(props) {

    const {usuarios,onDelete,onView,onCreate} = props;

    return(
        <div className="container-xxl flex-grow-1 container-p-y">
            <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Usuario</span></h4>
            <div>
                <a className="btn btn-primary" onClick={()=>{onCreate()}}>Agregar</a>
            </div>
            <br/>
            <div className="card">
                <h5 className="card-header">Listado de Usuarios</h5>
                    <div className="table-responsive text-nowrap">
                        <table className="table">
                            <thead className="table-light">
                                <tr>
                                    <th>Cédula</th>
                                    <th>Nombres</th>
                                    <th>Correo</th>
                                    <th>Telefono</th>
                                    <th>Rol</th>
                                    <th>Detalle</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                        <tbody className="table-border-bottom-0">
                        {usuarios.map((usuario)=>{
                            return(<tr id={usuarios._id}>
                            <td>{usuario.cedula}</td>
                            <td>{usuario.nombre + " " + usuario.apellido }</td>
                            <td>{usuario.correo}</td>
                            <td>{usuario.telefono}</td>
                            <td>{usuario.rol}</td>
                            <td></td>
                            <td>
                                <button className="btn btn-secondary btn-sm" onClick={()=>{onView(usuario)}}>Editar</button>
                                <button className="btn btn-danger btn-sm" onClick={()=>{onDelete(usuario._id)}}>Eliminar</button>
                            </td>
                            </tr>)
                        })}

                        </tbody>
                        </table>
                    </div>
            </div>
        </div>        
    )
}

export default TablaUsuario;