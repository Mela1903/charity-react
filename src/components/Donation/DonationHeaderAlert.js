import React from 'react';

const DonationHeaderAlert = ({text}) => {

    return (
        <div className='donation--alert'>
            <h3>Ważne!</h3>
            <p>{text}</p>
        </div>
    );
};

export default DonationHeaderAlert;