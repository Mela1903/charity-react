import React from 'react';
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeSteps from "./HomeSteps";
import AboutUs from "./AboutUs";

const Home = () => {
    return (
        <>
            <HomeHeader />
            <HomeThreeColumns />
            <HomeSteps />
            <AboutUs />
        </>
    );
};

export default Home;