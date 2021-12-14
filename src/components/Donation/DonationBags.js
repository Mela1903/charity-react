import React, {useState} from 'react';
import DonationHeaderAlert from "./DonationHeaderAlert";

const DonationBags = ({ values, handleSelectChange}) => {
    const text = 'Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.'
    console.log( values)

    const [bagsNumber, setBagsNumber] = useState('');

    const handleBagsNumberChange = (e) => {
        setBagsNumber(e.target.value);
        handleSelectChange("bags", e.target.value);
    }

    return (
        <div>
            <DonationHeaderAlert text={text}/>
            <div className='banner-form'>
                <div className='banner-form_container'>
                    <span>Krok 2/4</span>
                    <h3 className='header3_text-donation-form'>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h3>
                    <form id='donation-form' className='donation-form'>
                        <div className='donation-form__select'>
                            Liczba 60l worków:
                            <select
                                value={bagsNumber}
                                onChange={handleBagsNumberChange}
                                defaultValue={values.bags}
                            >
                                <option value=''>- wybierz -</option>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                            </select>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default DonationBags;