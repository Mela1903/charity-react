import React, {useEffect, useState} from 'react';
import DonationHeaderAlert from "./DonationHeaderAlert";

const DonationLocalization = ({ values, handleSelectChange, setIsNextAvailable, prevStep, nextStep }) => {
    setIsNextAvailable(false);
    const text = 'Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.'


    const [localizationCity, setLocalizationCity] = useState(values.localization);


    const handleCityChange = (e) => {
        setLocalizationCity(e.target.value);
        handleSelectChange("localization", e.target.value, "localization");
    }

    const [error, setError] = useState(false)
    const [errorHelpGroup, setErrorHelpGroup] = useState(false)
    const [errorSpecific, setErrorSpecific] = useState(false)

    const functionLocalizationError = () => {
        return (
            error && (
                <span style={{color: 'red'}}>
                    Wybierz miejscowość
                </span>
            )
        )
    }
    const functionLocalizationSpecificError = () => {
        return (
            errorSpecific && (
                <span style={{color: 'red'}}>
                    wybierz, komu pomagasz
                </span>
            )
        )
    }

    const functionHelpGroupError = () => {
        return (
            errorHelpGroup && (
                <span style={{color: 'red'}}>
                    komu chcesz pomóc
                </span>
            )
        )
    }

    const submitFormData = (e) => {
        e.preventDefault();
        if (values.localization === '') {
            if (values.helpGroups.length === 0) {
                if (values.localizationSpecific === '') {
                    setError(true)
                    setErrorHelpGroup(true)
                    setErrorSpecific(true)
                } else {
                    setError(false)
                    setErrorHelpGroup(true)
                    setErrorSpecific(false)
                }
            } else if (values.localizationSpecific === '') {
                setError(true)
                setErrorHelpGroup(false)
                setErrorSpecific(true)
            } else {
                nextStep();
            }
        } else if (values.helpGroups.length === 0) {
            setError(false)
            setErrorHelpGroup(true)
            setErrorSpecific(false)
        } else {
            nextStep();
        }
    }

    const cities = ['Poznań', 'Warszawa', 'Kraków', 'Wrocław', 'Katowice']

    const helpGroups = ['dzieciom', 'samotnym matkom', 'bezdomnym', 'niepełnosprawnym', 'osobom starszym']

    const [checkedItems, setCheckedItems] = useState(values.helpGroups)

    const [checkedItemsTest, setCheckedItemsTest] = useState(values.helpGroups);

    const handleCheckbox = (data) => {
        console.log(data)
        const isChecked = checkedItemsTest.some(element => element === data)
        if (isChecked) {
            setCheckedItemsTest(
                checkedItemsTest.filter(
                    (element) => element !== data
                )
            );
        } else {
            setCheckedItemsTest(checkedItemsTest.concat(data));
        }
    };

    const handleChangeCheckbox = (e) => {
        setCheckedItems({
            ...checkedItems,
            [e.target.name] : e.target.checked
        });
    }

    useEffect(() => {
        handleSelectChange("helpGroups", checkedItemsTest, "helpGroups")
    }, [checkedItemsTest]);

    const [note, setNote] = useState(values.localizationSpecific)

    const handleNotesChange = (e) => {
        setNote(e.target.value) ;
        handleSelectChange("localizationSpecific",e.target.value, e.target.name);
    }

    return (
        <div>
            <DonationHeaderAlert text={text}/>
            <div className='banner-form'>
                <div className='banner-form_container'>
                    <span>Krok 3/4</span>
                    <h3 className='header3_text-donation-form'>Lokalizacja:</h3>
                    <form id='donation-form' className='donation-form' onSubmit={submitFormData}>
                        <div className='donation-form__select-city'>
                            <select
                                name='localization'
                                value={localizationCity}
                                onChange={handleCityChange}
                                defaultValue={values.localization}
                                className='select'
                            >
                                <option value=''>- wybierz -</option>
                                {cities.map((city, index) => (
                                    <option
                                        value={city}
                                        key={index}>{city}
                                    </option>
                                ))}
                            </select>
                            {functionLocalizationError()}
                        </div>

                        {/*help Groups section*/}
                        <div className='flex' style={{flexDirection: 'column'}}>
                            <label className='label-needs'>
                                Komu chcesz pomóc?
                                {checkedItemsTest['dzieciom']}
                            </label>
                            <div style={{flexDirection: 'row', width: 690}}>
                                {helpGroups?.map((name, index) => (
                                    <div className='checkbox-button flex' key={index}>
                                        <label>
                                            <span>{name}</span>
                                            <input
                                                value={name}
                                                checked={checkedItemsTest.some(element => element === name)}
                                                onClick={() => handleCheckbox(name)}
                                                type='checkbox'
                                            />
                                        </label>
                                    </div>
                                ))}
                                {functionHelpGroupError()}
                            </div>
                        </div>
                        {/*<div className='flex size'>*/}
                        {/*    <label className='label-needs'>*/}
                        {/*        Komu chcesz pomóc?*/}
                        {/*        {checkedItems['dzieciom']}*/}
                        {/*    </label>*/}
                        {/*    {helpGroups.map(item => (*/}
                        {/*        <>*/}
                        {/*            <label*/}
                        {/*                key={item.key}*/}
                        {/*                className='flex'*/}
                        {/*            >*/}
                        {/*                {item.name}*/}
                        {/*                <input*/}
                        {/*                    name={item.name}*/}
                        {/*                    checked={checkedItems[item.name]}*/}
                        {/*                    onClick={handleChangeCheckbox}*/}
                        {/*                    type='checkbox'*/}
                        {/*                />*/}
                        {/*            </label>*/}
                        {/*        </>*/}

                        {/*    ))}*/}

                        {/*    {functionHelpGroupError()}*/}
                        {/*</div>*/}


                        <label className='label-needs'>Wpisz nazwę konkretnej organizacji (opcjonalnie)</label>
                        <textarea
                            onChange={handleNotesChange}
                            value={note}
                            name='localizationSpecific'
                        />
                        {functionLocalizationSpecificError()}

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
    )
};


export default DonationLocalization;