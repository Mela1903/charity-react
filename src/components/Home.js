import React from 'react';
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeSteps from "./HomeSteps";
import AboutUs from "./AboutUs";
import Help from "./Help";

const Home = () => {
    return (
        <>
            <HomeHeader />
            <HomeThreeColumns />
            <HomeSteps />
            <AboutUs />
            <Help />
        </>
    );
};

export default Home;