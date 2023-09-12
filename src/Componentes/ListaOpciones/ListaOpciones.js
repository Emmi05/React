import "./ListaOpciones.css";
const ListaOpciones = () =>{

//Metoodo map ->arrelgo.map ( (equipo, index)=> {
    //return <option></option>
//}))
   const equipos=[
    "Programación",
    "Front End",
    "Data Science",
    "Devops",
    "UX y Diseño",
    "Móvil",
    "Innovación y Gestión"
   ] 

return <div className="lista-opciones">
    <label>Equipos</label>
    <select>
       
        {  //recorre el arreglo, el equipo hace referencia a cada uno de los valores
        equipos.map( (equipo,index) =>{
           return <option key={index}>{equipo}</option>
    })}

    </select>
</div> 


}

export default ListaOpciones;
