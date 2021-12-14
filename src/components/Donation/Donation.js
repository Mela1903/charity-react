import React from 'react';
import DonationHeader from "./DonationHeader";
import Contact from "../Contact";
import DonationFormData from "./DonationFormData";

const Donation = () => {
    return (
        <div>
            <DonationHeader />
            {/*<DonationType />*/}
            {/*<DonationBags />*/}
            <DonationFormData />
            <Contact />
        </div>
    );
};

export default Donation;