import React from 'react';

const HomeNavigationGuest = () => {
    return (
        <ul className="page-nav-actions">
            <li><a href="/logowanie" className="nav__link">Zaloguj</a></li>
            <li><a href="/rejestracja" className="nav__link">Załóż konto</a></li>
        </ul>
    );
};

export default HomeNavigationGuest;