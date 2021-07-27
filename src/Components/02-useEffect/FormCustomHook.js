import React from 'react'
import { useForm } from '../../Hooks/useForm';
import './effect.css';

export const FormCustomHook = () => {
    
    const [formState, Cambio] = useForm({
        name:'',email:'', password:''
    })

    const {name,email,password} = formState;
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formState)                 
    }
    return (
        <form name = 'miform' onSubmit = {handleSubmit}>
            <h1>FormCustomHook</h1>
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
                 required                
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
                 required
                />                
            </div>

            <div className = 'form-group'>
                <input
                 type='password'
                 name = 'password'
                 className = 'form-control'
                 placeholder = '******'
                 value = {password}
                 onChange ={Cambio}
                 required
                />                
            </div>

            <button type = 'submit' className = 'btn btn-primary'>Enviar</button>
           
        </form>
    )
}