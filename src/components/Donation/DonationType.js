import React, {useState} from 'react';
import DonationHeaderAlert from "./DonationHeaderAlert";

const DonationType = ({ values, handleSelectChange, setFormInputName, nextStep }) => {
    const text = 'Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.'
    setFormInputName("type")

    const [selectedType, setSelectedType] = useState(values.type);

    const typesList = [
        ['clothesReuse', 'ubrania, które nadają się do ponownego użycia'],
        ['clothesOut', 'ubrania, do wyrzucenia'],
        ['toys', 'zabawki'],
        ['books', 'książki'],
        ['other', 'Inne']
    ]

    const handleTypeChange = (e) => {
        setSelectedType(e.target.value);
        handleSelectChange('type', e.target.value, e.target.name);
    }

    const [error, setError] = useState(false)

    const functionError = () => {
        return (
            error && (
                <div className='error'>
                    Wybierz rodzaj darowizny
                </div>
            )
        )
    }

    const submitFormData = (e) => {
        e.preventDefault();
        if (values.type === '') {
            setError(true);
        } else {
            nextStep();
        }
    }

    return (
        <div>
            <DonationHeaderAlert text={text}/>
            <div className='banner-form'>
                <div className='banner-form_container'>
                    <span>Krok 1/4</span>
                    <h3 className='header3_text-donation-form'>Zaznacz co chcesz oddać:</h3>
                    <form id='donation-form' className='donation-form' onSubmit={submitFormData}>
                        <div>
                            {typesList.map(([value, text], i) => (
                                 <>
                                     <label className='type' key={ i }>
                                     <input
                                         type='radio'
                                         value={ text }
                                         name='type'
                                         onChange={handleTypeChange}
                                         defaultValue={values.type}
                                         checked={selectedType === text}
                                     />
                                     { text }

                                     <span className='checkmark'/>

                                 </label>
                                 </>

                            ))}

                            {functionError()}

                        </div>
                        <div className='flex btn-donation-steps'>
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

export default DonationType;