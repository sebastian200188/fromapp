import React from "react";


const FormList = ({list}) => {
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>Nombre y apellido</th>
                    <th>Ciudad</th>
                    <th>Whatsapp</th>
                </tr>
            </thead>
            <tbody>
                {list.map(list => (
                    <tr key={list.id}>
                        <th>{list.Nombre}</th>
                        <th>{list.Ciudad}</th>
                        <th>{list.Whatsapp}</th>
                    </tr>
                ))}   
            </tbody>
        </table>
    );
}

export default FormList;