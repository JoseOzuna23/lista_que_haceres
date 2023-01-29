import React, {useState} from 'react'

const Form = ({lista, setLista}) => {

    const [nombre, setNombre] = useState("");


    const crear=(evento)=>{
        evento.preventDefault();
        const nuevoPersonaje = {
            nombre        
        }
        setLista([...lista, nuevoPersonaje])
        
    }

return (
    <div className='mt-3'>        
        <form className='form' onSubmit={crear}>
            <div className='m-2'>
                <label className='form-label' htmlFor=''>Agregar</label>
                <input type="text" onChange={(evento) => setNombre(evento.target.value)}/>               
            </div>            
            <button className='btn btn-success'> Crear </button>
        </form> 
        
    </div>
)
}

export default Form
