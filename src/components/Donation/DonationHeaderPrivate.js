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
                            <div className='text'>1</div>
                            <span>Wybierz rzeczy</span>
                        </div>
                    </li>
                    <li>
                        <div className='elements-text'>
                            <div className='text'>2</div>
                            <span>Spakuj je w worki</span>
                        </div>
                    </li>
                    <li>
                        <div className='elements-text'>
                            <div className='text'>3</div>
                            <span>Wybierz fundację</span>
                        </div>
                    </li>
                    <li>
                        <div className='elements-text'>
                            <div className='text'>4</div>
                            <span>Zamów kuriera</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DonationHeaderPrivate;