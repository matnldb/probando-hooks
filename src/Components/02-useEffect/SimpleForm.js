import React, { useEffect, useState } from 'react'
import './effect.css';
import { Message } from './Message';

export const SimpleForm = () => {
    
    const [formState, setFormState] = useState({
        name:'',email:''
    })

    const {name,email} = formState;

    useEffect(()=>{console.log('hey!!!')},[])
    useEffect(()=>{console.log('Form State')},[formState])

    const Cambio = ({target})=> {
        setFormState({...formState,[target.name]:target.value})
    }

    return (
        <>
            <h1>Effect</h1>
            <hr/>
            <div className = 'form-group'>
                <input
                 type='text'
                 name = 'name'
                 className = 'form-control'
                 placeholder = 'tu nombre'
                 autoComplete = 'off'
                 value = {name}
                 onChange ={Cambio}
                />                
            </div>

            <div className = 'form-group'>
                <input
                 type='text'
                 name = 'email'
                 className = 'form-control'
                 placeholder = 'email@ejemplo.com'
                 autoComplete = 'off'
                 value = {email}
                 onChange ={Cambio}
                />                
            </div>

            {(name === '123' && <Message/>)}
        </>
    )
}
