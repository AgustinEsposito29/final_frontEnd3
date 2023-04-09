import React from 'react'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/formulario.css';

// Importamos Context
import ThemeConext from '../context/ThemeContext.js';

export default function Form() {

    const navigate = useNavigate();

    const {theme} = useContext(ThemeConext);


    const INITIAL_USER = {
        name: '',
        email: ''
    };

    const [user, setUser] = useState(INITIAL_USER);
    const [error, setError] = useState(false);
    const [showMessage, setShowMessage] = useState(false)


    const handleName = (e)=>{
        console.log(e.target.value);
        setUser(prev => ({...prev, name : e.target.value}))
        console.log(user);
    }

    const handleEmail = (e)=>{
        console.log(e.target.value);
        setUser(prev => ({...prev, email : e.target.value}))
    }

    const hanldeForm = (e)=>{
        e.preventDefault();
        //Valdiacion
        if(!isValidName){
            setError(true)
            setShowMessage(false)
        }else{
            setError(false)
            setShowMessage(true)
            setTimeout(()=>{
                navigate('/home')
            }, 1500)
        }
    }

    //Validaciones
    const isValidName = user.name.length > 4


    return (
        <div className='form-conatiner' style = {{background: theme.background}}>
            <form onSubmit={hanldeForm}>
                <label htmlFor="name">Name</label>
                <input type="text" name='name' id='name' placeholder='Ingrese su nombre...' onChange={handleName}/>
                    <br />
                    <br />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder='Ingrese su email...' onChange={handleEmail}/>
                    <br />
                    <br />
                <input id='btn' type="submit" value="Enviar Fomulario" />
            </form>
            {
                showMessage ? <div className='welcome-message'>Bienvenido <b>{user.name}</b>! ya nos comuicaremos contigo via emial ...</div> : error ? <div className="error-message"> Hay errores...</div> : null
            }
        </div>
    )
}



