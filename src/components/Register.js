import React, {useRef, useState} from 'react';
import {useAuth} from "../contexts/AuthContext";
import HomeNavigation from "./HomeNavigation";
import {useNavigate} from "react-router-dom";

const Register = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { register } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Podane hasła są różne')
        }

        try {
            setError('')
            setLoading(true)
            await register(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError('Nie udało się utworzyć konta')
        }
        setLoading(false)
    }

    const redirect = e => {
        e.preventDefault()
        navigate('/logowanie')
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
                        <div className='form__field'>
                            <label className='form__label form__label-last'>Powtórz hasło</label>
                            <input className='form__input' type="password" name="passwordConfirm" ref={passwordConfirmRef}/>
                        </div>
                    </div>
                    <div className='form__links'>
                        <button className='btn btn__login' onClick={redirect}>Zaloguj się</button>
                        <button className='btn btn__login' disabled={loading} type="submit">Załóż konto</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;