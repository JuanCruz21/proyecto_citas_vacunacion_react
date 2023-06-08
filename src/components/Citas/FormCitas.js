import React,{useEffect, useState} from "react";

function FormCita(props) {

    console.log("props ------------>",props);
  const {getCita,setCita,vacunas,vacunadores,onView,onSave, registrar=false} = props;
  const [vacuna,setVacuna] = useState(vacunas);
  const [cit,setCit] = useState({
        _id : null,
        codigo_cita: "",
        fecha_cita: "",
        usuario: {
            cedula:"",
            nombre:"",
            apellido:"",
            correo:"",
            telefono:""
        },
        vacunador: {
            cedula:"",
            nombre:"",
            apellido:""
        },
        id_vacuna:{
            codigo: "",
            nombre: "",
            dosis: "",
            lote: "",
            fabricante: "",
        },
        dosis: "",
        lote: "",
        fabricante: "",
        estado: ""
    });

    const limpiar = () =>{
      setCit({
        _id : null,
        codigo_cita: "",
        fecha_cita: "",
        usuario: {
            cedula:"",
            nombre:"",
            apellido:"",
            correo:"",
            telefono:""
        },
        vacunador: {
            cedula:"",
            nombre:"",
            apellido:""
        },
        id_vacuna:{
            codigo: "",
            nombre: "",
            dosis: "",
            lote: "",
            fabricante: "",
        },
        dosis: "",
        lote: "",
        fabricante: "",
        estado: ""
      })
    }

    if(cit === null){
      limpiar();
    }

    useEffect(()=>{
      if(setCita){
        setCit(setCita)
      }
    },[setCita])


    const handleChange = (e) =>{
        setCit({
          ...cit, [e.target.name] : e.target.value
        });
    };

    const onClickGuardar = (e) =>{
      e.preventDefault();
      console.log("cit --------------->",cit);
      //onSave(cit);
      limpiar();
    }

    return(
        <div>
            <div className="col-xxl" id="agregarCita" >
                <div className="card mb-4">
                    <div className="card-header d-flex align-items-center justify-content-between">
                      <h5 className="mb-0">Agregar Cita</h5>
                    </div>
                    <div className="card-body">
                      <form>
                        <div class="row">

                            <div class="form-group col-lg-6">
                                <label className="col-sm-2 col-form-label">Código</label>
                                <input type="text" className="form-control" id="codigo" name="codigo" placeholder="Digite el código de la Cita" value={cit.codigo} onChange={(e)=>{handleChange(e)}} />
                            </div>

                            <div class="form-group col-lg-6">
                                <label className="col-sm-4 col-form-label">Fecha y Hora</label>
                                <input type="datetime-local" className="form-control" id="fecha_vencimiento" name="fecha_vencimiento" placeholder="Digite la fecha de nacimiento la Cita" value={cit.fecha_vencimiento} onChange={(e)=>{handleChange(e)}} />
                            
                            </div>

                            <div class="form-group col-lg-6">
                                <label className="col-sm-4 col-form-label">Nombre Vacuna</label>
                                <select className="form-select" id="vacuna" name="vacuna" value={cit.id_vacuna["_id"]}>
                                <option selected="">Seleccionar Opción</option>
                                {vacunas.map((vacuna,index)=>{
                                    return(<option value={vacuna._id} value_1={index} >{vacuna.nombre}</option>)})}
                                </select>
                            </div>

                            <div class="form-group col-lg-6">
                                <label className="col-sm-4 col-form-label">Vacunador</label>
                                <select className="form-select" id="vacunador" name="vacunador" value={cit.vacunador}>
                                <option selected="">Seleccionar Opción</option>
                                {vacunadores.map((vacunador)=>{
                                    return(<option value={JSON.stringify(vacunador)}>{vacunador.nombre + " " + vacunador.apellido}</option>)})}
                                </select>
                            </div>

                            <div class="form-group col-lg-6">
                                <label className="col-sm-4 col-form-label">Estado</label>
                                <select className="form-select" id="estado" name="estado" value={cit.estado} onChange={(e)=>{handleChange(e)}}>
                                    <option selected="">Seleccionar Opción</option>
                                    <option value="activo">Activo</option>
                                    <option value="inactivo">Inactivo</option>
                                </select>
                            </div>

                            <div className="row justify-content-end">
                                <div className="col-sm-12" style={{textAlign: 'center' , marginTop:"20px"}}>
                                    <button type="button" className="btn btn-primary" onClick={onClickGuardar}>Guardar</button>
                                    <button className="btn btn-danger" onClick={()=>{onView()}}>Cancelar</button>
                                </div>
                            </div>
                        </div>
                      </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormCita;
