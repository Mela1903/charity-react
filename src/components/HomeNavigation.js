import React from 'react';
import {useAuth} from "../contexts/AuthContext";
import HomeNavigationGuest from "./HomeNavigationGuest";
import HomeNavigationUser from "./HomeNavigationUser";

const HomeNavigation = () => {
   const { currentUser } = useAuth()

    function LoginStatus() {
        if (!currentUser) {
            return <HomeNavigationGuest />
        }
        return <HomeNavigationUser />
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