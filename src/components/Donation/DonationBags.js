import React, {useState} from 'react';
import DonationHeaderAlert from "./DonationHeaderAlert";

const DonationBags = ({values, handleSelectChange, prevStep, nextStep}) => {
    const text = 'Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.'


    const [error, setError] = useState(false)

    const functionError = () => {
        return (
            error && (
                <div className='error error-bags'>
                    określ, ile worków chcesz przekazać
                </div>
            )
        )
    }

    const submitFormData = (e) => {
        e.preventDefault();
        if (values.bags === '') {
            setError(true);
        } else {
            nextStep();
        }
    }

    const [showItemList, setShowItemList] = useState(false);
    const toggling = () => setShowItemList(!showItemList)
    const [bagsNumber, setBagsNumber] = useState(values.bags)

    const onOptionClicked = value => (e) => {
        setBagsNumber(value);
        setShowItemList(false);
        handleSelectChange("bags", value, 'bags');
    };

    return (
    <div>
        <DonationHeaderAlert text={text}/>
        <div className='banner-form'>
            <div className='banner-form_container'>
                <span>Krok 2/4</span>
                <h3 className='header3_text-donation-form'>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h3>

                <form id='donation-form' className='donation-form' onSubmit={submitFormData}>
                    <div className='donation-form__select flex'>
                        <div className='relative'>
                            <div className='flex'>
                                <span className='span'>Liczba 60l worków:</span>
                                <div className='dropdown-container'>
                                    <div className={showItemList ? 'dropdown-header open' : 'dropdown-header'}
                                         onClick={toggling}>
                                        {bagsNumber || '- wybierz -'}
                                    </div>
                                    {showItemList && (
                                        <div className='dropdown_list-container'>
                                            <ul className='dropdown_list'>
                                                <li className='list_item' value='1' onClick={onOptionClicked(1)}>1</li>
                                                <li className='list_item' value='2' onClick={onOptionClicked(2)}>2</li>
                                                <li className='list_item' value='3' onClick={onOptionClicked(3)}>3</li>
                                                <li className='list_item' value='4' onClick={onOptionClicked(4)}>4</li>
                                                <li className='list_item' value='5' onClick={onOptionClicked(5)}>5</li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>


                            {functionError()}
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
    );
};

export default DonationBags;