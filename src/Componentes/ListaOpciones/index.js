import "./ListaOpciones.css"

//le estamos pasando props para que agarre la información de el arreglo equipo
const ListaOpciones = (props) => {

    //Metodo map -> arreglo.map( (equipo, index) => { 
    //    return <option></option>
    // })

    const manejarCambio = (e) => {
        console.log("cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {/* {//aqui se agrega lo de MAP de equipos que sale desde el arreglo equipos de APP para jalar el titulo} */}
            {props.equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>)}
        </select>
    </div>
}

export default ListaOpciones