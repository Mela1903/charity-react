import React from 'react';
import HomeNavigation from "./HomeNavigation";
import HomeHeaderPublic from "./HomeHeaderPublic";

const HomeHeader = () => {

    return (
        <div className='home'>
            <div className='home__backgroundImage'/>
            <div className='home__open'>
                <HomeNavigation />
                <HomeHeaderPublic />
            </div>
        </div>
    );
};

export default HomeHeader;