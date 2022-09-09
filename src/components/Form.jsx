import React from "react";


const Form = ({form, setform}) => {

    const handleChange = e => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        if (form.Nombre === '' || form.Cédula === '' || form.Domicilio === '' || form.Ciudad === '' || form.Correo === '' || form.Whatsapp === '' || form.Actividad === '') {
            alert('Ttodos los campos son obligatorios')
        }

        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(form)
        }

        fetch('https://comercioform-api-mysql.herokuapp.com/api', requestInit)
        .then(res => res.json())
        .then(res => console.log(res))

        setform({
            Nombre: '',
            Cédula: '',
            Domicilio: '',
            Ciudad: '',
            Correo: '',
            Whatsapp: '',
            Actividad: ''
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="Nombre" className="form-label">Nombre y apellido</label>
                <input name='Nombre' onChange={handleChange} type='text' id='Nombre' className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="Cédula" className="form-label">Cédula</label>
                <input name='Cédula' onChange={handleChange} type='text' id='Cédula' className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="Domicilio" className="form-label">Domicilio</label>
                <input name='Domicilio' onChange={handleChange} type='text' id='Domicilio' className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="Ciudad" className="form-label">Ciudad</label>
                <input name='Ciudad' onChange={handleChange} type='text' id='Ciudad' className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="Correo" className="form-label">Correo</label>
                <input name='Correo' onChange={handleChange} type='text' id='Correo' className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="Whatsapp" className="form-label">Whatsapp</label>
                <input name='Whatsapp' onChange={handleChange} type='text' id='Whatsapp' className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="Actividad" className="form-label">Actividad economica</label>
                <input name='Actividad' onChange={handleChange} type='text' id='Actividad' className="form-control"/>
            </div>
            <button type="submit" className="btn btn-primary mb-5">Enviar</button>
        </form>
    )
}


export default Form;