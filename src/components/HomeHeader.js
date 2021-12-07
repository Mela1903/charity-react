import React from 'react';
import HomeNavigation from "./HomeNavigation";

const HomeHeader = () => {
    return (
        <div className='home'>

            <div className='home__backgroundImage'></div>
            <div className='home__open'>
                <HomeNavigation />
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
            </div>
        </div>
    );
};

export default HomeHeader;