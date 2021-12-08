import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useAuth} from "../contexts/AuthContext";

const HomeNavigation = () => {
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

    function GuestView() {
        return (
        <ul className="page-nav-actions">
            <li><a href="/logowanie" className="nav__link">Zaloguj</a></li>
            <li><a href="/rejestracja" className="nav__link">Załóż konto</a></li>
        </ul>
    )}

    function UserView() {
        return (
            <ul className="page-nav-actions">
                <text>Cześć {currentUser.email}!</text>
                <li><a href="#" className="nav__link">Oddaj rzeczy</a></li>
                <li><a href="/wylogowano" className="nav__link" onClick={handleLogout}>Wyloguj</a></li>
            </ul>
        )}

    function LoginStatus() {
        if (!currentUser) {
            return <GuestView />
        }
        return <UserView />
    }

    return (
        <nav>
            <LoginStatus />
            <ul className="page-nav-list">
                <li><a href="#start" className="nav__link">Start</a></li>
                <li><a href="#steps" className="nav__link">O co chodzi?</a></li>
                <li><a href="#about" className="nav__link">O nas</a></li>
                <li><a href="#help" className="nav__link">Fundacja i organizacje</a></li>
                <li><a href="#contact" className="nav__link">Kontakt</a></li>
            </ul>
        </nav>
    );
};

export default HomeNavigation;