const url = "http://localhost:5000/citas/";

export async function getListaCitas(){
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    return data.Citas;
}

export async function getListaCitaId(id){
    const res = await fetch(url +`${id}`);
    const data = await res.json();
    return data;
}

export async function agregarCita(cita){
    const res = await fetch(url,{
        method: 'POST',
        headers:{'content-type': 'application/json'},
        body: JSON.stringify(cita)
    });
    const data = await res.json();
    return data;
}

export async function editarCita(cita){
    const res = await fetch(url,{
        method: 'PATCH',
        headers:{'content-type': 'application/json'},
        body: JSON.stringify(cita)
    });
    const data = await res.json();
    return data;
}

export async function eliminarCita(id){
    const res = await fetch(url+`${id}`,{
        method: 'DELETE',
        headers:{'content-type': 'application/json'},
        
    });
    const data = await res.json();
    return data;
}
