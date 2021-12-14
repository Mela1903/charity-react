import React, {useEffect, useState} from 'react';
import DonationHeaderAlert from "./DonationHeaderAlert";

const DonationLocalization = ({ values, handleSelectChange, handleChange}) => {
    const text = 'Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.'

    const [localizationCity, setLocalizationCity] = useState('');

    const handleCityChange = (e) => {
        setLocalizationCity(e.target.value);
        handleSelectChange("bags", e.target.value);
    }

    const cities = ['Poznań', 'Warszawa', 'Kraków', 'Wrocław', 'Katowice']

    const whoToHelpList = [
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

    const [checkedItems, setCheckedItem] = useState({})

    const handleChangeCheckbox = (e) => {
        console.log(e.target.name, e.target.value)
        setCheckedItem({...checkedItems, [e.target.name] : e.target.checked})
    }

    useEffect(() => {
        handleSelectChange("helpGroups", checkedItems)
    }, [checkedItems]);

    const [note, setNote] = useState('')

    const handleNotesChange = (e) => {
        setNote(e.target.value) ;
        handleSelectChange("note",e.target.value);
    }

    return (
        <div>
            <DonationHeaderAlert text={text}/>
            <div className='banner-form'>
                <div className='banner-form_container'>
                    <span>Krok 3/4</span>
                    <h3 className='header3_text-donation-form'>Lokalizacja:</h3>
                    <form id='donation-form' className='donation-form'>
                        <div className='donation-form__select'>
                            <select
                                value={localizationCity}
                                onChange={handleCityChange}
                                defaultValue={values.localization}
                            >
                                <option value=''>- wybierz -</option>
                                {cities.map((city, index) => (
                                    <option
                                        value={city} key={index}>{city}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <label>
                            Komu chcesz pomóc?
                            {checkedItems['dzieciom']}
                        </label>
                        {whoToHelpList.map(item => (
                            <label key={item.key}>
                                {item.name}
                                <input
                                    name={item.name}
                                    checked={checkedItems[item.name]}
                                    onClick={handleChangeCheckbox}
                                    type='checkbox'
                                />
                            </label>
                        ))}
                        <label>Wpisz nazwę konkretnej organizacji (opcjonalnie)</label>
                        <textarea onChange={handleNotesChange}/>
                    </form>
                </div>

            </div>
        </div>
    )
};


export default DonationLocalization;