import "./Equipo.css"
import React from 'react'

import Colaborador from "../Colaborador"

const Equipo = (props) => {
    //Destructuracion, estos datos salen de props.datos.colorPrimario pero para no estar escribiendo mucho se abrevio así
    //seria lo mismo que colorPrimario =props.datos.colorPrimario;
    const { colorPrimario, colorSecundario, titulo } = props.datos

    const { colaboradores } = props
    
    //el fondo que se saca del props.datos.colorSecundario
    const obj = {
        backgroundColor: colorSecundario
    }
    console.log(colaboradores.length > 0)

    //darle el color del Border
    const estiloTitulo = { borderColor: colorPrimario }

    return <>
        {//si hay colaboradores entonces se ejecuta este código para que se muestre el colaborador y la sección
            colaboradores.length > 0 &&
            <section className="equipo" style={obj}>
                <h3 style={estiloTitulo} >{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador, index) => <Colaborador
                        //los datos del array colaborador creo que son sacafos de FORMULARIO Manejar envio
                            datos={colaborador}
                            key={index}
                            colorPrimario={colorPrimario}
                        />)
                    }
                </div>
            </section>
        }
    </>
}

export default Equipo