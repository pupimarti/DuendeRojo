import {Component} from 'react';

const url ="https://backend-duenderojo.herokuapp.com/apiColonia/";

const urlInsertInscripto="/addColono/Colono";
const urlGetConfigs="/getConfigs";

class ApiController extends Component
{
    getConfigs(okBusqueda, setState)
    {
        setState("cargando");
        const endpoint = `${url}${urlGetConfigs}`;
       fetch(endpoint)
       .then ((response) => {
            return response.json();
        }).then (responseData => {
                okBusqueda(responseData);
                setState("cargado");
        })
        .catch((err) => {
            setState("error");
            console.log(err);
        });
    }

    insertInscripto(data, {handleChangeInfoInscripcion})
    {   
        handleChangeInfoInscripcion("cargando");
        const endpoint = `${url}${urlInsertInscripto}`;
            fetch (endpoint,{
            method:'POST',
            mode:"cors",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(data)
        })
        .then ((response) => {
            return response.json();
        })
        .then(info => {
            handleChangeInfoInscripcion(info);
        })
        .catch((err) => {
            console.log(err);
            handleChangeInfoInscripcion("error");
        })
        
    }


}
export default new ApiController();