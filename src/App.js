import { useState } from 'react';
import React from 'react'

import './App.css';
import Header from './Componentes/header/Header.js';
import Formulario from './Componentes/Formulario/Formulario';
import MiOrg from './Componentes/MiOrg/index';
import Equipo from './Componentes/Equipo';
import Colaborador from './Componentes/Colaborador';
import  Footer from './Componentes/Footer';


function App() {
  //el state es de HOOK gg de components >extension google 
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  //es un arreglo pero se va vacio para que no tire error en .map  
  const [colaboradores, actualizarColaboradores] = useState([{

  /* PERO tambien puedo poner datos mios para que se mueste pero lo comente XD
     equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor" */
  }])
  //Ternario --> condicion ? seMuestra : noSeMuestra
  // condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar colaborador lo envio a COMPONENTE FORMULARIO 

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)
    //Spread operator ...copia los valores del array y despues le pone el valor o colaborardpr el array?
    actualizarColaboradores([...colaboradores, colaborador])
  }


  //Lista de equipos
  const equipos = [
    {
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ]
  return (
    <div>
      <Header />
      {/* {mostrarFormulario ? <Formulario /> : <></>} */}
      {
        mostrarFormulario && <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
        />
      }

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {
        equipos.map((equipo) => <Equipo
          datos={equipo}
          key={equipo.titulo}
          //filtra el ARREGLO QUE EXISTE ARRIba con que el colaborador este el equipo que permance
          //colaborador en el equipo, para que no se muestren los que estan vaciós se va a equipo
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        />
        )
      }

      <Footer />


    </div>
  );
}

export default App;
