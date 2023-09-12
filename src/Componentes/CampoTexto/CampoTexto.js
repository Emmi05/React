import "./CampoTexto.css"
//checar los props, hay ua extension de react en google, donde sale componentes y te muestra los objetos dentro de cada campo que esra en el formulario
const CampoTexto= (props) =>{
    console.log("Datos: ", props)
    const placeholderModificado=`${props.placeholder}...`

return <div className="campo-texto"> 
    <label>{props.titulo}</label>
    <input placeholder= {props.placeholder} required= {props.required}/>

</div>

}
//Quiero que sea hijo del formulario 
export default CampoTexto