import React from 'react';

const HomeSteps = () => {
    return (
        <div className='steps'>
            <h2 className='headers_text'>Wystarczą 4 proste kroki</h2>
            <img src={require('../assets/Decoration.svg').default} alt='Decoration'/>

            <div className='flex steps--container'>
                <div>
                    <img src={require('../assets/Icon-1.svg').default} alt='icon T-shirt'/>
                    <h3 className='header3_text'>Wybierz rzeczy</h3>
                    <hr/>
                    <p className='steps_description'>ubrania, zabawki,</p>
                    <p className='steps_description'>sprzęt i inne</p>
                </div>
                <div>
                    <img src={require('../assets/Icon-2.svg').default} alt='icon basket'/>
                    <h3 className='header3_text'>Spakuj je</h3>
                    <hr/>
                    <p className='steps_description'>skorzystaj z</p>
                    <p className='steps_description'>worków na śmieci</p>
                </div>
                <div>
                    <img src={require('../assets/Icon-3.svg').default} alt='icon search'/>
                    <h3 className='header3_text'>Zdecyduj komu</h3>
                    <h3 className='header3_text'>chcesz pomóc</h3>
                    <hr/>
                    <p className='steps_description'>wypierz zaufane </p>
                    <p className='steps_description'>miejsce</p>
                </div>
                <div>
                    <img src={require('../assets/Icon-4.svg').default} alt='icon cycle'/>
                    <h3 className='header3_text'>Zamów kuriera</h3>
                    <hr/>
                    <p className='steps_description'>kurier przyjedzie </p>
                    <p className='steps_description'>w dogodnym terminie</p>
                </div>
            </div>

            <button className='btn btn__upper'>oddaj <br/>rzeczy</button>
        </div>
    );
};

export default HomeSteps;