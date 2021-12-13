import React from 'react';

const HomeHeaderPublic = () => {
    return (
        <div className='home__text'>
            <h1 className='headers_text'>
                Zacznij pomagać!<br/>
                Oddaj niechciane rzeczy w zaufane ręce
            </h1>
            <img src={require('../assets/Decoration.svg').default} alt='Decoration' className='decoration'/>
            <div className='flex space-around'>
                <button className='btn btn__upper'>oddaj <br/>rzeczy</button>
                <button className='btn btn__upper'>zorganizuj zbiórkę</button>
            </div>
        </div>
    );
};

export default HomeHeaderPublic;