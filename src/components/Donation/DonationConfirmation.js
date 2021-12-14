import React from 'react';

const DonationConfirmation = () => {
    return (
        <div className='banner-form'>
            <div className='banner-form_container flex'
                 style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                 paddingRight: 800}}>
                <h3 className='header-confirmation'>
                    Dziękujemy za przesłanie formularza
                </h3>
                <span style={{fontSize: 40, lineHeight: '55px'}}>Na maila prześlemy wszelkie</span>
                <span style={{fontSize: 40, lineHeight: '55px'}}>informacje o odbiorze.</span>
                <img src={require('../../assets/Decoration.svg').default} alt='Decoration'/>
            </div>

        </div>
    );
};

export default DonationConfirmation;