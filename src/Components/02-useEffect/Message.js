import React, { useEffect } from 'react'

export const Message = () => {
    
    useEffect(() => {
        console.log('Componente montado')
        return () => {
            console.log('Componente desmontado')
        }
    }, [])
    
    return (
        <div>
            <h3>Eres Genial</h3>
        </div>
    )
}
