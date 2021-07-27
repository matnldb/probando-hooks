import React from 'react'
import { useCounter } from '../../Hooks/useCounter'
import './Counter.css'

export const CouterWithCustomHook = () => {
    const {state,incrementa,decrementa,reinicia} = useCounter();

    return (
        <>
            <h1>Couter With Custom Hook {state}</h1>
            <hr/>
            <button 
                className="btn btn-success"
                onClick={()=>incrementa(3)}
            >+1</button>
            <button 
                className="btn btn-warning"
                onClick={reinicia}
            >reset</button>
            <button 
                className="btn btn-warning"
                onClick={()=>decrementa(2)}
            >-1</button>

        </>
    )
}

