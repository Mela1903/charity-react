import React from 'react';
import DonationHeader from "./DonationHeader";
import Contact from "../Contact";
import DonationType from "./DonationType";

const Donation = () => {
    return (
        <div>
            <DonationHeader />
            <DonationType />
            <Contact />
        </div>
    );
};

export default Donation;