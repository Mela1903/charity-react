import React from 'react';
import DonationHeaderAlert from "./DonationHeaderAlert";

const DonationAddress = () => {
    const text = 'Podaj adres oraz termin odbioru rzeczy.'

    return (
        <div>
            <div>
                <DonationHeaderAlert text={text}/>
                <div className='banner-form'>
                    <div className='banner-form_container'>
                        <span>Krok 4/4</span>
                        <h3 className='header3_text-donation-form'>Podaj adres oraz termin odbioru rzeczy przez kuriera</h3>
                        <form id='donation-form' className='flex address'>
                            <div className='flex address_column'>
                                <div className='address_column--text'> Adres odbioru:
                                    <label>ulica:</label>
                                    <input type='text'/>
                                </div>
                                <div> Termin odbioru:
                                    <label>data:</label>
                                    <input type='text'/>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationAddress;