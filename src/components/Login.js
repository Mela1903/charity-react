import React, {useRef, useState} from 'react';
import {useAuth} from "../contexts/AuthContext";
import {useNavigate} from "react-router-dom";
import HomeNavigation from "./HomeNavigation";

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            navigate('/')
        } catch {
            setError('Nie udało się zalogować')
        }
        setLoading(false)
    }

    const redirect = e => {
        e.preventDefault()
        navigate('/rejestracja')
    }

    return (
        <div className='login'>
            <div className='login__container'>
                <HomeNavigation />
            </div>
            <div className='login__form'>
                <h2 className='headers_text'>Zaloguj się</h2>
                <img src={require('../assets/Decoration.svg').default} alt='Decoration'/>

                <form className='form' onSubmit={handleSubmit}>
                    <div className='form__fields'>
                        <div className='form__field'>
                            <label className='form__label'>Email</label>
                            <input className='form__input' type="mail" name="name" ref={emailRef}/>
                        </div>
                        <div className='form__field'>
                            <label className='form__label form__label-last'>Hasło</label>
                            <input className='form__input' type="password" name="password" ref={passwordRef}/>
                        </div>
                    </div>

                    <div className='form__links'>
                        <button className='btn btn__login' onClick={redirect}> Załóż konto</button>
                        <button className='btn btn__login' disabled={loading} type="submit">Zaloguj się</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
