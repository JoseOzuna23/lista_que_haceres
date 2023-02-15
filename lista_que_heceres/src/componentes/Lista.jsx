import React from 'react'

const lista = ({ lista, setLista }) => {
    //const {lista}=props
    const eliminarDatos = (datosNombre) => {
        const eliminarPersonnaje = lista.filter((personaje) => {
            return personaje.nombre !== datosNombre
        })
        return setLista(eliminarPersonnaje)
    }
    return (
        <div>
            {lista.map((personaje) =>
                <>
                    <p className='mt-3 parrafo' id="parrafo">{personaje.nombre} </p>
                    <button className='btn btn-danger' onClick={() => eliminarDatos(personaje.nombre)}> Eliminar {personaje.nombre}</button>
                </>
            )}

        </div>
    )
}

export default lista
