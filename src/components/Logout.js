import React from 'react';
import HomeNavigation from "./HomeNavigation";
import {useNavigate} from "react-router-dom";


const Logout = () => {
    const navigate = useNavigate()

    const redirect = e => {
        e.preventDefault()
        navigate('/')
    }

    return (
        <div className='login'>
            <div className='login__container'>
                <HomeNavigation />
            </div>
            <div className='login__form logout'>
                <h2 className='headers_text'>Wylogowanie nastąpiło pomyślnie!</h2>
                <img src={require('../assets/Decoration.svg').default} alt='Decoration'/>
                <button className='btn btn__logout' onClick={redirect}>Strona główna</button>
            </div>
        </div>
    );
};

export default Logout;