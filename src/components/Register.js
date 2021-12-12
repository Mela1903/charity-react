import React, {useRef, useState} from 'react';
import {useAuth} from "../contexts/AuthContext";
import HomeNavigation from "./HomeNavigation";
import {useNavigate} from "react-router-dom";

const Register = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { register } = useAuth()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const resetRegistrationErrors = () => {
        return {
            email: '',
            passwordMatch: '',
            passwordLength: '',
            cannotCreateAccount: ''
        }
    }

    const [error, setError] = useState(resetRegistrationErrors);

    const isEmailValid = (email) => {
        const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
    }

    const validateRegisterForm = (email, password, passwordConfirm) => {
        let errorsTemp = {...error};
        errorsTemp.email = !isEmailValid(email) ? "Niepoprawny email" : "";
        errorsTemp.passwordLength = password.length < 6 ? "Hasło musi mieć conajmniej 6 znaków" : "";
        errorsTemp.passwordMatch = password !== passwordConfirm ? "Podane hasła są różne" : "";
        errorsTemp.cannotCreateAccount = '';
        setError({...errorsTemp});
        return Object.values(errorsTemp).every(x => x === "");
    }

    const renderEmailError = () => error.email && <p className='field-error'>{error.email}</p>
    const renderPasswordError = () => error.passwordLength && <p className='field-error'>{error.passwordLength}</p>
    const renderPasswordConfirmError = () => error.passwordMatch && <p className='field-error'>{error.passwordMatch}</p>
    const renderAPIError = () => error.cannotCreateAccount && <p className='field-error'>{error.cannotCreateAccount}</p>

    async function handleSubmit(e) {
        e.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const passwordConfirm = passwordConfirmRef.current.value;

        if (validateRegisterForm(email, password, passwordConfirm)) {
            try {
                resetRegistrationErrors()
                setLoading(true)
                await register(email, password)
                navigate('/')
            } catch {
                setError(prevState => ({...prevState, cannotCreateAccount: `konto dla adresu ${email} już istnieje`}));
            }
            setLoading(false)
        }
    }

    const redirectToLogin = e => {
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

                <form className='form' onSubmit={handleSubmit} id='register-form'>
                    <div className='form__fields'>
                        <div className='form__field'>
                            <label className='form__label'>Email</label>
                            <input
                                className={(error.email) ? 'form__input error' : 'form__input'}
                                type="mail"
                                ref={emailRef}
                                required
                            />
                            {renderEmailError()}
                        </div>
                        <div className='form__field'>
                            <label className='form__label form__label-last'>Hasło</label>
                            <input
                                className={(error.passwordLength) ? 'form__input error' : 'form__input'}
                                type="password"
                                ref={passwordRef}
                                required
                            />
                            {renderPasswordError()}
                        </div>
                        <div className='form__field'>
                            <label className='form__label form__label-last'>Powtórz hasło</label>
                            <input
                                className={(error.passwordLength || error.passwordMatch) ? 'form__input error' : 'form__input'}
                                type="password"
                                ref={passwordConfirmRef}
                                required
                            />
                            {renderPasswordConfirmError()}
                        </div>
                    </div>
                    <div className='form__links'>
                        <button className='btn btn__login' onClick={redirectToLogin}>Zaloguj się</button>
                        <button
                            className='btn btn__login'
                            disabled={loading}
                            type="submit"
                            form='register-form'
                        >
                            Załóż konto</button>
                    </div>
                </form>
                {renderAPIError()}
            </div>
        </div>
    );
};

export default Register;