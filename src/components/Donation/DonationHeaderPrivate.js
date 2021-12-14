import React from 'react';

const DonationHeaderPrivate = () => {
    return (
        <div className='home__text home__text-donation'>
            <h1 className='headers_text spacing76'>
                Oddaj rzeczy, których już nie chcesz<br/>
                <span className='uppercase'>potrzebującym</span>
            </h1>
            <img src={require('../../assets/Decoration.svg').default} alt='Decoration' />

            <div className="flex space-around donation--steps">
                <div className="donation--steps-title">Wystarczą 4 proste kroki:</div>
                <ul>
                    <li>
                        <div className='elements-text'>
                            <text>1</text>
                            <span>Wybierz rzeczy</span>
                        </div>
                    </li>
                    <li>
                        <div className='elements-text'>
                            <text>2</text>
                            <span>Spakuj je w worki</span>
                        </div>
                    </li>
                    <li>
                        <div className='elements-text'>
                            <text>3</text>
                            <span>Wybierz fundację</span>
                        </div>
                    </li>
                    <li>
                        <div className='elements-text'>
                            <text>4</text>
                            <span>Zamów kuriera</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DonationHeaderPrivate;