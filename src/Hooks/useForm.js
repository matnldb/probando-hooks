import { useState } from "react"

export const useForm = (initialState={}) => {
    
    const [values, setValues] = useState(initialState)
    
    const Cambio = ({target})=> {
        setValues({
                ...values,
                [target.name]:target.value
            })
        }

    return [values, Cambio];
}
