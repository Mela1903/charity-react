import React from 'react';
import HomeNavigation from "../HomeNavigation";
import DonationHeaderPrivate from "./DonationHeaderPrivate";

const DonationHeader = () => {
    return (
        <div className='home home-donation'>
            <div className='home__backgroundImage home__backgroundImage-formHero'/>
            <div className='home__open'>
                <HomeNavigation />
                <DonationHeaderPrivate />
            </div>
        </div>
    );
};

export default DonationHeader;