import React from 'react';
import DonationHeaderAlert from "./DonationHeaderAlert";

const DonationType = ({ values, handleChange }) => {
    const text = 'Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.'
    console.log(values, handleChange)

    const typesList = [
        ['clothesReuse', 'ubrania, które nadają się do ponownego użycia'],
        ['clothesOut', 'ubrania, do wyrzucenia'],
        ['toys', 'zabawki'],
        ['books', 'książki'],
        ['other', 'Inne']
    ]

    return (
        <div>
            <DonationHeaderAlert text={text}/>
            <div className='banner-form'>
                <div className='banner-form_container'>
                    <span>Krok 1/4</span>
                    <h3 className='header3_text-donation-form'>Zaznacz co chcesz oddać:</h3>
                    <form id='donation-form' className='donation-form'>
                        <div>
                            {typesList.map(([value, text], i) => (
                                <label className='type' key={ i }>
                                    <input
                                        type='radio'
                                        value={ value }
                                        name='type'
                                        onChange={handleChange('type')}
                                        defaultValue={values.type}
                                    />
                                    <span className='checkmark'></span>
                                    { text }
                                </label>
                            ))}
                        </div>

                    </form>
                </div>

            </div>

        </div>
    );
};

export default DonationType;