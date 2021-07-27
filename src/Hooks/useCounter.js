import { useState } from "react"

export const useCounter = (initialState=10) => {
    
    const [state, setstate] = useState(initialState);

    const incrementa = (factor=1)=>{
        setstate(state+factor);
    }

    const decrementa = (factor=1)=>{
        setstate(state-factor);
    }
    
    const reinicia = ()=>{
        setstate(initialState);
    }
    return {state,incrementa,decrementa,reinicia}      
       
}
