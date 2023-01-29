import React from 'react'

const lista = (props) => {
    const {lista}=props
  

return (
    <div>
        
            {lista.map((personaje) =>
            <>
            <p className='mt-3 parrafo' id="parrafo">{personaje.nombre} </p> 
            </>
            )}
            
    
    </div>
)
}

export default lista
