import React from 'react';

const HomeNavigation = () => {
    return (
        <nav>
            <ul className="page-nav-actions">
                <li><a href="/logowanie" className="nav__link">Zaloguj</a></li>
                <li><a href="/rejestracja" className="nav__link">Załóż konto</a></li>
            </ul>
            <ul className="page-nav-list">
                <li><a href="#" className="nav__link">Start</a></li>
                <li><a href="#" className="nav__link">O co chodzi?</a></li>
                <li><a href="#" className="nav__link">O nas</a></li>
                <li><a href="#" className="nav__link">Fundacja i organizacje</a></li>
                <li><a href="#" className="nav__link">Kontakt</a></li>
            </ul>
        </nav>
    );
};

export default HomeNavigation;