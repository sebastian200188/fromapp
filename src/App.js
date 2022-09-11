import React, {Fragment, useState, useEffect} from "react";
import Navbar from "./components/Navbar";
import FormList from "./components/FormList";
import Form from "./components/Form";



function App() {

  const [heroku_9dab5d1d4fe89e1, setform] = useState({
    Nombre: '',
    Cédula: '',
    Domicilio: '',
    Ciudad: '',
    Correo: '',
    Whatsapp: '',
    Actividad: ''
  })

  const [list, setlist] = useState([])

  useEffect(()=>{
    const getList = () =>{
      fetch('https://comercioform-api-mysql.herokuapp.com/api')
      .then(res => res.json())
      .then(res => setlist(res))
    }
    getList()
  }, [])

  return (
    <Fragment>
      <Navbar brand='App Comercio Colaborativo' />
      <div className="container">
        <div className="row">
          <div>
            <h2 className="mb-3" style={{textAlign: 'center'}}>FORMULARIO REGISTRO</h2>
            <Form form={heroku_9dab5d1d4fe89e1} setform={setform} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
