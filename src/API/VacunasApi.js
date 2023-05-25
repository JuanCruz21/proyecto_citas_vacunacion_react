const url = "http://localhost:5000/vacunas/";

export async function getListaVacunas(){
    const res = await fetch(url);
    const data = await res.json();
    return data.Vacunas;
}

export async function getListaVacunaId(id){
    const res = await fetch(url +`${id}`);
    const data = await res.json();
    return data;
}

export async function agregarVacuna(vacuna){
    const res = await fetch(url,{
        method: 'POST',
        headers:{'content-type': 'application/json'},
        body: JSON.stringify(vacuna)
    });
    const data = await res.json();
    return data;
}

export async function editarVacuna(vacuna){
    const res = await fetch(url,{
        method: 'PATCH',
        headers:{'content-type': 'application/json'},
        body: JSON.stringify(vacuna)
    });
    const data = await res.json();
    return data;
}

export async function eliminarVacuna(id){
    const res = await fetch(url+`${id}`,{
        method: 'DELETE',
        headers:{'content-type': 'application/json'},
        
    });
    const data = await res.json();
    return data;
}
