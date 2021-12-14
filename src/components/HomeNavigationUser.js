import React, {useState} from 'react';
import {useAuth} from "../contexts/AuthContext";
import {useNavigate} from "react-router-dom";

const HomeNavigationUser = () => {
    const [error, setError] = useState('')
    const { currentUser, logout } = useAuth()
    const navigate = useNavigate()

    async function handleLogout() {
        setError('')
        try {
            await logout()
            navigate('/logowanie')
        } catch {
            setError('Nie udało się wylogować')
        }
    }

    return (
        <ul className="page-nav-actions">
            <text>Cześć {currentUser.email}!</text>
            <li><a href="/oddaj-rzeczy" className="nav__link">Oddaj rzeczy</a></li>
            <li><a href="/wylogowano" className="nav__link" onClick={handleLogout}>Wyloguj</a></li>
        </ul>
    );
};

export default HomeNavigationUser;