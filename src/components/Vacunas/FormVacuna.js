import React,{useEffect, useState} from "react";

function FormVacuna(props) {

  const {getVacuna,setVacuna,onView,onSave, registrar=false} = props;
  const [vacun,setVacun] = useState({
        _id : null,
        codigo: "",
        nombre: "",
        fecha_vencimiento: "",
        dosis: "",
        lote: "",
        fabricante: "",
        estado: ""
    });

    const limpiar = () =>{
      setVacun({
        _id : null,
        codigo: "",
        nombre: "",
        fecha_vencimiento: "",
        dosis: "",
        lote: "",
        fabricante: "",
        estado: ""
      })
    }

    if(vacun === null){
      limpiar();
    }

    useEffect(()=>{
      if(setVacuna){
        setVacun(setVacuna)
      }
    },[setVacuna])


    const handleChange = (e) =>{
        setVacun({
          ...vacun, [e.target.name] : e.target.value
        });
    };

    const onClickGuardar = (e) =>{
      e.preventDefault();
      onSave(vacun);
      limpiar();
    }

    return(
        <div>
            <div className="col-xxl" id="agregarVacuna" >
                <div className="card mb-4">
                    <div className="card-header d-flex align-items-center justify-content-between">
                      <h5 className="mb-0">Agregar Vacuna</h5>
                    </div>
                    <div className="card-body">
                      <form>
                        <div class="row">

                            <div class="form-group col-lg-6">
                                <label className="col-sm-2 col-form-label">Código</label>
                                <input type="text" className="form-control" id="codigo" name="codigo" placeholder="Digite el código de la Vacuna" value={vacun.codigo} onChange={(e)=>{handleChange(e)}} />
                            </div>

                            <div class="form-group col-lg-6">
                            <label className="col-sm-2 col-form-label">Nombre</label>
                                <input type="text" className="form-control" id="nombre" name="nombre" placeholder="Digite el nombre de la Vacuna" value={vacun.nombre} onChange={(e)=>{handleChange(e)}} />
                            </div>

                            <div class="form-group col-lg-6">
                                <label className="col-sm-4 col-form-label">Fecha de Nacimiento</label>
                                <input type="date" className="form-control" id="fecha_vencimiento" name="fecha_vencimiento" placeholder="Digite la fecha de nacimiento la Vacuna" value={vacun.fecha_vencimiento} onChange={(e)=>{handleChange(e)}} />
                            
                            </div>

                            <div class="form-group col-lg-6">
                                <label className="col-sm-4 col-form-label">Dosis</label>
                                <input type="number" className="form-control" id="dosis" name="dosis" placeholder="Digite la dosis de la Vacuna" value={vacun.dosis} onChange={(e)=>{handleChange(e)}} />
                            </div>

                            <div class="form-group col-lg-6">
                                <label className="col-sm-4 col-form-label">Lote</label>
                                <input type="text" className="form-control" id="lote" name="lote" placeholder="Digite el lote de la Vacuna" value={vacun.lote} onChange={(e)=>{handleChange(e)}} />
                            </div>

                            <div class="form-group col-lg-6">
                                <label className="col-sm-4 col-form-label">Fabricante</label>
                                <input type="text" className="form-control" id="fabricante" name="fabricante" placeholder="Digite el fabricante de la Vacuna" value={vacun.fabricante} onChange={(e)=>{handleChange(e)}} />
                            </div>

                            <div class="form-group col-lg-6">
                                <label className="col-sm-4 col-form-label">Estado</label>
                                <select className="form-select" id="estado" name="estado" value={vacun.estado} onChange={(e)=>{handleChange(e)}}>
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

export default FormVacuna;
