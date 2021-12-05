import React from 'react';

const HomeEasySteps = () => {
    return (
        <div className='steps'>
            <h2 className='headers_text'>Wystarczą 4 proste kroki</h2>
            <img src={require('../assets/Decoration.svg').default} alt='Decoration' className='decoration'/>

            <div className='flex steps--container'>
                <div className='steps--item'>
                    <img src={require('../assets/Icon-1.svg').default} alt='icon T-shirt'/>
                    <h3>Wybierz rzeczy</h3>
                    <p>ubrania, zabawki, </p>
                    <p> sprzęt i inne</p>
                </div>
                <div className='steps--item'>
                    <img src={require('../assets/Icon-2.svg').default} alt='icon basket'/>
                    <h3>Spakuj je</h3>
                    <p>skorzystaj z</p>
                    <p>worków na śmieci</p>
                </div>
                <div className='steps--item'>
                    <img src={require('../assets/Icon-3.svg').default} alt='icon search'/>
                    <h3>Zdecyduj komu chcesz pomóc</h3>
                    <p>wypierz zaufane </p>
                    <p>miejsce</p>
                </div>
                <div className='steps--item'>
                    <img src={require('../assets/Icon-4.svg').default} alt='icon cycle'/>
                    <h3>Zamów kuriera</h3>
                    <p>kurier przyjedzie </p>
                    <p>w dogodnym terminie</p>
                </div>
            </div>


        </div>
    );
};

export default HomeEasySteps;