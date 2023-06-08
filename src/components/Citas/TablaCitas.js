import React from "react";

function TablaCita(props) {

    const {citas,onDelete,onView,onCreate} = props;

    const formatDate = (date) =>{
        let year = date.getFullYear();
        let month = date.getMonth()+1;
        let day = date.getDate()+1;
        if (day < 10) {
          day = '0' + day;
        }
        if (month < 10) {
          month = '0' + month;
        }
        return day+'/'+month+'/'+year;
    }

    const formatHora = (date) =>{
        let hora = date.getHours();
        let minuto = date.getMinutes();
        return hora+':'+minuto;
    }

    return(
        <div className="container-xxl flex-grow-1 container-p-y">
            <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Citas</span></h4>
            <div>
                <a className="btn btn-primary" onClick={()=>{onCreate()}}>Agregar</a>
            </div>
            <br/>
            <div className="card">
                <h5 className="card-header">Listado de Citas</h5>
                    <div className="table-responsive text-nowrap">
                        <table className="table">
                            <thead className="table-light">
                                <tr>
                                    <th>Código</th>
                                    <th>Fecha</th>
                                    <th>Hora</th>
                                    <th>Vacunador</th>
                                    <th>Vacuna</th>
                                    <th>Estado</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                        <tbody className="table-border-bottom-0">
                        {citas.map((cita)=>{
                            return(<tr id={citas._id}>
                                <td>{cita.codigo_cita}</td>
                                <td>{formatDate(new Date(cita.fecha_cita))}</td>
                                <td>{formatHora(new Date(cita.fecha_cita)) }</td>
                                <td>{cita.vacunador["nombre"] + " " + cita.vacunador["apellido"]}</td>
                                <td>{cita.id_vacuna["nombre"]}</td>
                                <td>{cita.estado}</td>
                                <td>
                                    <button className="btn btn-secondary btn-sm" onClick={()=>{onView(cita)}}>Editar</button>
                                    <button className="btn btn-danger btn-sm" onClick={()=>{onDelete(cita._id)}}>Eliminar</button>
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

export default TablaCita;