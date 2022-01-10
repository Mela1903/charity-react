import React from 'react';

const DonationSummary = ({ values, prevStep, nextStep }) => {
    const checked = values.helpGroups;

    const checkedBags = () => {
        if (values.bags === 1) {
            return 'worek'
        } else if (values.bags === 5) {
            return 'worków'
        } else {
            return 'worki'
        }
    }

    const checkedArray = () => {
        return checked.join(', ');
    }

    const checkedTypes = () => {
        const bagsTypes = values.type;
        if (bagsTypes === 'ubrania, które nadają się do ponownego użycia') {
            return 'ubrań, które nadają się do ponownego użycia'
        } else if (bagsTypes === 'ubrania do wyrzucenia') {
            return 'ubrań do wyrzucenia'
        } else if (bagsTypes === 'zabawki') {
            return 'zabawek'
        } else if (bagsTypes === 'książki') {
            return 'książek'
        } else {
            return 'innych rzeczy'
        }
    }


    const dateFormatted = () => {
        const date = values.date
        const day = date.slice(8, 10)
        const month = date.slice(5, 7)
        const year = date.slice(0, 4)
        return day + '.' + month + '.' + year
    }

    return (
        <div className='banner-form'>
            <div className='banner-form_container banner-form_container_summary'>
                <h3 className='header3_text-donation-form'>Podsumowanie Twojej darowizny</h3>
                <div className='summary-header'>
                    <span>Oddajesz:</span>
                    <div className='flex summary'>
                        <div className='flex align-center'>
                            <img src={require('../../assets/Icon-1.svg').default} alt='Icon T-Shirt'/>
                            {values.bags} {checkedBags()}, {' '}
                            {checkedTypes()}, {' '}
                            {checkedArray()}
                        </div>
                        <div className='flex align-center'>
                            <img src={require('../../assets/Icon-4.svg').default} alt='Icon T-Shirt'/>
                            dla lokalizacji: {values.localization}
                        </div>
                    </div>
                </div>

                <div className='flex address address_column'>
                    <div className='flex address--text address--text_summary'>
                        <span>Adres odbioru:</span>
                        <div className='flex padding20'>
                            <span className='span-summary'>Ulica</span>
                            <span>{values.street}</span>
                        </div>
                        <div className='flex padding20'>
                            <span className='span-summary'>Miasto</span>
                            <span>{values.city}</span>
                        </div>
                        <div className='flex padding20'>
                            <span className='span-summary'>Kod pocztowy</span>
                            <span>{values.postCode}</span>
                        </div>
                        <div className='flex padding20'>
                            <span className='span-summary'>Numer telefonu</span>
                            <span>{values.phone}</span>
                        </div>
                    </div>
                    <div className='flex address--text'>
                        <span>Termin odbioru:</span>
                        <div className='flex padding20'>
                            <span className='span-summary'>Data</span>
                            <span>{dateFormatted()}</span>
                        </div>
                        <div className='flex padding20'>
                            <span className='span-summary'>Godzina</span>
                            <span>{values.time}</span>
                        </div>
                        <div className='flex padding20'>
                            <span className='span-summary'>Uwagi dla kuriera</span>
                            <span style={{overflowWrap: 'break-word'}}>{values.note}</span>
                        </div>
                    </div>
                    </div>

                </div>
                <div className='flex btn-donation-steps' style={{marginLeft: 142}}>
                    <button className='btn btn__donation-form' onClick={prevStep}>
                        Wstecz
                    </button>
                    <button className='btn btn__donation-form complete' type='submit' onClick={nextStep}>
                        Potwierdzam
                    </button>
                </div>
        </div>
    );
};

export default DonationSummary;