import React, {useEffect, useState} from 'react';
import DonationHeaderAlert from "./DonationHeaderAlert";

const DonationLocalization = ({ values, handleSelectChange, setIsNextAvailable }) => {
    setIsNextAvailable(false);
    const text = 'Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.'


    const [localizationCity, setLocalizationCity] = useState(values.localization);


    const handleCityChange = (e) => {
        setLocalizationCity(e.target.value);
        handleSelectChange("localization", e.target.value, "localization");
    }

    const cities = ['Poznań', 'Warszawa', 'Kraków', 'Wrocław', 'Katowice']

    const helpGroups = [
        {
           name: 'dzieciom'
        },
        {
            name: 'samotnym matkom'
        },
        {
            name: 'bezdomnym'
        },
        {
            name: 'niepełnosprawnym'
        },
        {
            name: 'osobom starszym'
        }
    ]

    const [checkedItems, setCheckedItem] = useState(values.helpGroups)

    const handleChangeCheckbox = (e) => {
        setCheckedItem({...checkedItems, [e.target.name] : e.target.checked})
    }

    useEffect(() => {
        handleSelectChange("helpGroups", checkedItems, "helpGroups")
    }, [checkedItems]);

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
                    <form id='donation-form' className='donation-form'>
                        <div className='donation-form__select-city'>
                            <select
                                name='localization'
                                value={localizationCity}
                                onChange={handleCityChange}
                                defaultValue={values.localization}
                            >
                                <option value=''>- wybierz -</option>
                                {cities.map((city, index) => (
                                    <option
                                        value={city}
                                        key={index}>{city}
                                    </option>
                                ))}
                            </select>
                        </div>
                    <div className='flex size'>
                        <label className='label-needs'>
                            Komu chcesz pomóc?
                            {checkedItems['dzieciom']}
                        </label>
                        {helpGroups.map(item => (
                            <label
                                key={item.key}
                                className='flex'
                            >
                                {item.name}
                                <input
                                    name={item.name}
                                    checked={checkedItems[item.name]}
                                    onClick={handleChangeCheckbox}
                                    type='checkbox'
                                />
                            </label>
                        ))}
                    </div>


                        <label className='label-needs'>Wpisz nazwę konkretnej organizacji (opcjonalnie)</label>
                        <textarea
                            onChange={handleNotesChange}
                            value={note}
                            name='localizationSpecific'
                        />
                    </form>
                </div>

            </div>
        </div>
    )
};


export default DonationLocalization;