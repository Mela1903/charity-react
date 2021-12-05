import React from 'react';

const HomeHeader = () => {
    return (
        <div className='home'>

            <div className='home__backgroundImage'></div>
            <div className='home__open'>
                <nav>
                    <ul className="page-nav-actions">
                        <li><a href="#" className="nav__link">Zaloguj</a></li>
                        <li><a href="#" className="nav__link">Załóż konto</a></li>
                    </ul>
                    <ul className="page-nav-list">
                        <li><a href="#" className="nav__link">Start</a></li>
                        <li><a href="#" className="nav__link">O co chodzi?</a></li>
                        <li><a href="#" className="nav__link">O nas</a></li>
                        <li><a href="#" className="nav__link">Fundacja i organizacje</a></li>
                        <li><a href="#" className="nav__link">Kontakt</a></li>
                    </ul>
                </nav>
                <div className='home__text'>
                    <h1 className='headers_text'>Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <img src={require('../assets/Decoration.svg').default} alt='Decoration' className='decoration'/>
                    <div className='flex space-around'>
                        <button className='btn btn__upper'>oddaj <br/>rzeczy</button>
                        <button className='btn btn__upper'>zorganizuj zbiórkę</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;