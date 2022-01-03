import React, {useEffect, useState} from 'react';
import DonationHeaderAlert from "./DonationHeaderAlert";

const DonationLocalization = ({ values, handleSelectChange, setIsNextAvailable, prevStep, nextStep }) => {
    setIsNextAvailable(false);
    const text = 'Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.'



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
                <div className='error'>
                    wybierz miejscowość
                </div>
            )
        )
    }
    const functionLocalizationSpecificError = () => {
        return (
            errorSpecific && (
                <div className='error'>
                    wybierz, komu pomagasz
                </div>
            )
        )
    }

    const functionHelpGroupError = () => {
        return (
            errorHelpGroup && (
                <div className='error'>
                    komu chcesz pomóc
                </div>
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

    const [showItemList, setShowItemList] = useState(false);
    const toggling = () => setShowItemList(!showItemList)
    const [localizationCity, setLocalizationCity] = useState(values.localization);

    const cities = ['Poznań', 'Warszawa', 'Kraków', 'Wrocław', 'Katowice']

    const onOptionClicked = value => (e) => {
        setLocalizationCity(value);
        setShowItemList(false);
        handleSelectChange("localization", value, "localization");
        console.log('selected city: ', localizationCity, ', ', e.target.value)
    };

    const helpGroups = ['dzieciom', 'samotnym matkom', 'bezdomnym', 'niepełnosprawnym', 'osobom starszym']

    const [checkedItems, setCheckedItems] = useState(values.helpGroups)

    const [checkedItemsTest, setCheckedItemsTest] = useState(values.helpGroups);

    const handleCheckbox = (data) => {
        setCheckedItemsTest(!checkedItemsTest)
        const isChecked = checkedItemsTest.some(element => element === data)
        if (isChecked) {
            setCheckedItemsTest(
                checkedItemsTest.filter(
                    (element) => element !== data
                )
            ); console.log('czy tak', isChecked)
        } else {
            setCheckedItemsTest(checkedItemsTest.concat(data));
            console.log('czy tak', isChecked);
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

                        {/*localization section*/}
                        <div className='dropdown-container padding'>
                            <div className={showItemList ? 'dropdown-header open' : 'dropdown-header'} onClick={toggling}>
                                {localizationCity || '- wybierz -'}
                            </div>
                            {showItemList && (
                                <div className='dropdown_list-container'>
                                    <ul className='dropdown_list cities'>
                                        <li className='list_item' value='Poznań' onClick={onOptionClicked('Poznań')}>Poznań</li>
                                        <li className='list_item' value='Warszawa' onClick={onOptionClicked('Warszawa')}>Warszawa</li>
                                        <li className='list_item' value='Kraków' onClick={onOptionClicked('Kraków')}>Kraków</li>
                                        <li className='list_item' value='Wrocław' onClick={onOptionClicked('Wrocław')}>Wrocław</li>
                                        <li className='list_item' value='Katowice' onClick={onOptionClicked('Katowice')}>Katowice</li>
                                    </ul>
                                </div>

                                )}
                            {functionLocalizationError()}
                        </div>

                        {/*help Groups section*/}
                        <div className='position flex'>
                            <label className='label-needs'>
                                Komu chcesz pomóc?
                                {checkedItemsTest['dzieciom']}
                            </label>
                            <div style={{flexDirection: 'row', width: 840}}>
                                {helpGroups?.map((name, index) => (
                                    <div
                                        className='checkbox-button flex'
                                        key={index}
                                    >
                                        <label>
                                            <input
                                                value={name}
                                                checked={checkedItemsTest.some(element => element === name)}
                                                onClick={() => handleCheckbox(name)}
                                                type='checkbox'
                                            />
                                            <span>{name}</span>
                                        </label>
                                    </div>
                                ))}
                            </div>
                            {functionHelpGroupError()}
                        </div>

                        <div className='flex position organization_name'>
                            <label className='label-needs spacing50'>Wpisz nazwę konkretnej organizacji (opcjonalnie)</label>
                            <textarea
                                onChange={handleNotesChange}
                                value={note}
                                name='localizationSpecific'
                                className='textarea'
                            />
                            {functionLocalizationSpecificError()}
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
    )
};


export default DonationLocalization;