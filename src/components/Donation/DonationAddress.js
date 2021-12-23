import React from 'react';
import DonationHeaderAlert from "./DonationHeaderAlert";

const DonationAddress = ({ values, handleChange, setIsNextAvailable, prevStep, nextStep }) => {
    setIsNextAvailable(false);
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
                                <div className='address--text'> Adres odbioru:
                                    <div className='flex'>
                                        <label>Ulica</label>
                                        <input
                                            type='text'
                                            name='street'
                                            defaultValue={values.street}
                                            onChange={handleChange('street')}
                                        />
                                    </div>
                                    <div className='flex'>
                                        <label>Miasto</label>
                                        <input
                                            type='text'
                                            name='city'
                                            defaultValue={values.city}
                                            onChange={handleChange('city')}
                                        />
                                    </div>
                                    <div className='flex'>
                                        <label>Kod pocztowy</label>
                                        <input
                                            type='text'
                                            name='postCode'
                                            defaultValue={values.postCode}
                                            onChange={handleChange('postCode')}
                                        />
                                    </div>
                                    <div className='flex'>
                                        <label>Numer telefonu</label>
                                        <input
                                            type='phone'
                                            name='phone'
                                            defaultValue={values.phone}
                                            onChange={handleChange('phone')}
                                        />
                                    </div>
                                </div>
                                <div> Termin odbioru:
                                    <div className='flex'>
                                        <label>Data</label>
                                        <input
                                            type='date'
                                            name='date'
                                            defaultValue={values.date}
                                            onChange={handleChange('date')}
                                        />
                                    </div>
                                    <div className='flex'>
                                        <label>Godzina</label>
                                        <input
                                            type='time'
                                            name='time'
                                            defaultValue={values.time}
                                            onChange={handleChange('time')}
                                        />
                                    </div>
                                    <div className='flex'>
                                        <label>Uwagi dla kuriera</label>
                                        <input
                                            type='textarea'
                                            name='note'
                                            defaultValue={values.note}
                                            onChange={handleChange('note')}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='flex btn-donation-steps'>
                                <button className='btn btn__donation-form' onClick={prevStep}>
                                    Wstecz
                                </button>
                                <button className='btn btn__donation-form' type='submit'>
                                    Dalej
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationAddress;