import React, {useRef, useState} from 'react';
import {useAuth} from "../contexts/AuthContext";
import {useNavigate} from "react-router-dom";
import HomeNavigation from "./HomeNavigation";

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const resetLoginErrors = () => {
        return {
            email: '',
            passwordLength: '',
            userNotFound: ''
        }
    }

    const [error, setError] = useState(resetLoginErrors)

    const isEmailValid = (email) => {
        const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
    }

    const validateEmailForm = (email, password) => {
        let errorsTemp = {...error};
        errorsTemp.email = !isEmailValid(email) ? "Podany email jest nieprawidłowy" : "";
        errorsTemp.passwordLength = password.length < 6 ? "Podane hasło jest za krótkie!" : "";
        errorsTemp.userNotFound = "";
        setError({...errorsTemp});
        return Object.values(errorsTemp).every(x => x === "");
    }

    const renderEmailError = () => error.email && <p className='field-error'>{error.email}</p>
    const renderPasswordError = () => error.passwordLength && <p className='field-error'>{error.passwordLength}</p>
    const renderAPIError = () => error.userNotFound && <p className='field-error'>{error.userNotFound}</p>

    async function handleSubmit(e) {
        e.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        if (validateEmailForm(email, password)) {
            try {
                resetLoginErrors()
                setLoading(true)
                await login(email, password)
                navigate('/')
            } catch {
                setError(prevState => ({...prevState, userNotFound: 'Niepoprawny email lub hasło'}));
            }
            setLoading(false)
        }
    }

    const redirectToRegister = e => {
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

                <form className='form' onSubmit={handleSubmit} id='login-form'>
                    <div className='form__fields'>
                        <div className='form__field'>
                            <label className='form__label'>Email</label>
                            <input
                                className={error.email ? 'form__input error' : 'form__input'}
                                type="mail"
                                ref={emailRef}
                                required/>
                            {renderEmailError()}
                        </div>
                        <div className='form__field'>
                            <label className='form__label form__label-last'>Hasło</label>
                            <input
                                className={error.passwordLength ? 'form__input error' : 'form__input'}
                                type="password"
                                ref={passwordRef}
                                required
                            />
                            {renderPasswordError()}
                        </div>
                    </div>

                    <div className='form__links'>
                        <button className='btn btn__login' onClick={redirectToRegister}> Załóż konto</button>
                        <button
                            className='btn btn__login'
                            disabled={loading}
                            type="submit"
                            form='login-form'
                        >
                            Zaloguj się</button>
                    </div>
                </form>
                {renderAPIError()}
            </div>
        </div>
    );
};
