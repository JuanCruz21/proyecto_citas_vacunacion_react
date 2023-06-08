import React from "react";

function TablaVacuna(props) {

    const {vacunas,onDelete,onView,onCreate} = props;

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

    return(
        <div className="container-xxl flex-grow-1 container-p-y">
            <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Vacunas</span></h4>
            <div>
                <a className="btn btn-primary" onClick={()=>{onCreate()}}>Agregar</a>
            </div>
            <br/>
            <div className="card">
                <h5 className="card-header">Listado de Vacunas</h5>
                    <div className="table-responsive text-nowrap">
                        <table className="table">
                            <thead className="table-light">
                                <tr>
                                    <th>Código</th>
                                    <th>Nombre</th>
                                    <th>Fecha Vencimiento</th>
                                    <th>Dosis</th>
                                    <th>Lote</th>
                                    <th>Fabricante</th>
                                    <th>Estado</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                        <tbody className="table-border-bottom-0">
                        {vacunas.map((vacuna)=>{
                            return(<tr id={vacunas._id}>
                            <td>{vacuna.codigo}</td>
                            <td>{vacuna.nombre }</td>
                            <td>{formatDate(new Date(vacuna.fecha_vencimiento))}</td>
                            <td>{vacuna.dosis}</td>
                            <td>{vacuna.lote}</td>
                            <td>{vacuna.fabricante}</td>
                            <td>{vacuna.estado}</td>
                            <td>
                                <button className="btn btn-secondary btn-sm" onClick={()=>{onView(vacuna)}}>Editar</button>
                                <button className="btn btn-danger btn-sm" onClick={()=>{onDelete(vacuna._id)}}>Eliminar</button>
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

export default TablaVacuna;