import React, {useState} from 'react';
import DonationHeaderAlert from "./DonationHeaderAlert";


const DonationAddress = ({values, handleChange, prevStep, nextStep}) => {
    const text = 'Podaj adres oraz termin odbioru rzeczy.'

    const resetAddressErrors = () => {
        return {
            street: "",
            city: "",
            postCode: '',
            phone: '',
            date: '',
            time: '',
            notes: '',
            lengthStreet: '',
            lengthCity: ''
        }
    }

    const [errors, setErrors] = useState(resetAddressErrors);

    const isPostCodeValid = (postCode) => {
        const regex = /^\d{2}[- ]?\d{3}$/;
        return regex.test(postCode);
    }

    const isPhoneValid = (phone) => {
        const regex = /^\d{9}$/;
        return regex.test(phone);
    }

    const isEmpty = (data) => {
        const regex = /\w\S/;
        return regex.test(data);
    }

    const validateAddressInputs = (street, city, postCode, phone, date, time) => {
        street = values.street
        city = values.city
        postCode = values.postCode
        phone = values.phone
        date = values.date
        time = values.time

        let errorsTemp = {...errors};

        if (isEmpty(street)) {
            if (street.length > 0 && street.length < 3) {
                errorsTemp.street = 'nazwa ulicy musi mieć conajmniej 3 znaki'
            } else {
                errorsTemp.street = '';
            }
        } else {
            errorsTemp.street = 'nazwa ulicy nie może być pusta'
        }

        if (isEmpty(city)) {
            if (city.length > 0 && city.length < 3) {
                errorsTemp.city = 'nazwa miasta musi mieć conajmniej 3 znaki'
            } else {
                errorsTemp.city = '';
            }
        } else {
            errorsTemp.city = 'nazwa miasta nie może być pusta'
        }

        errorsTemp.postCode = !isPostCodeValid(postCode) ? 'Podany kod pocztowy jest nieprawidłowy' : '';
        errorsTemp.phone = !isPhoneValid(phone) ? 'Podany telefon jest nieprawidłowy' : '';
        errorsTemp.date = date === '' ? 'wybierz datę odbioru' : '';
        errorsTemp.time = time === '' ? 'podaj godzinę odbioru' : '';

        setErrors({...errorsTemp});
        return Object.values(errorsTemp).every(x => x === "");
    }


    const renderStreetError = () => errors.street && <p className='field-error address-error'>{errors.street}</p>
    const renderCityError = () => errors.city && <p className='field-error address-error'>{errors.city}</p>
    const renderPostCodeError = () => errors.postCode && <p className='field-error address-error'>{errors.postCode}</p>
    const renderPhoneError = () => errors.phone && <p className='field-error address-error'>{errors.phone}</p>
    const renderDateError = () => errors.date && <p className='field-error address-error'>{errors.date}</p>
    const renderTimeError = () => errors.time && <p className='field-error address-error'>{errors.time}</p>

    const submitFormData = (e) => {
        e.preventDefault();

        const street = values.street;
        const city = values.city;
        const postCode = values.postCode
        const phone = values.phone
        const date = values.date
        const time = values.time

        if (validateAddressInputs(street, city, postCode, phone, date, time)) {
            nextStep()
        }
    }

    const day = new Date().getDate() + 1;
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear()
    const correctMonth = month < 10 ? '0' + month : month
    const tomorrow = year + '-' + correctMonth + '-' + day;

    return (
        <div>
            <div>
                <DonationHeaderAlert text={text}/>
                <div className='banner-form'>
                    <div className='banner-form_container'>
                        <span>Krok 4/4</span>
                        <h3 className='header3_text-donation-form'>Podaj adres oraz termin odbioru rzeczy przez
                            kuriera</h3>
                        <form id='donation-form' className='donation-form' onSubmit={submitFormData}>
                            <div className='flex address address_column'>
                                <div className='address--text'>
                                    <span>Adres odbioru:</span>

                                    <div className='flex padding20'>
                                        <label>Ulica</label>
                                        <input
                                            type='text'
                                            name='street'
                                            defaultValue={values.street}
                                            onChange={handleChange('street')}
                                        />
                                    </div>
                                    {renderStreetError()}
                                    <div className='flex padding20'>
                                        <label>Miasto</label>
                                        <input
                                            type='text'
                                            name='city'
                                            defaultValue={values.city}
                                            onChange={handleChange('city')}
                                        />
                                    </div>
                                    {renderCityError()}
                                    <div className='flex padding20'>
                                        <label>Kod pocztowy</label>
                                        <input
                                            type='text'
                                            name='postCode'
                                            defaultValue={values.postCode}
                                            onChange={handleChange('postCode')}
                                        />
                                    </div>
                                    {renderPostCodeError()}
                                    <div className='flex padding20'>
                                        <label>Numer telefonu</label>
                                        <input
                                            type='phone'
                                            name='phone'
                                            defaultValue={values.phone}
                                            onChange={handleChange('phone')}
                                        />
                                    </div>
                                    {renderPhoneError()}
                                </div>

                                <div className='address--text'>
                                    <span>Termin odbioru:</span>
                                    <div className='flex padding20'>
                                        <label>Data</label>
                                        <input
                                            type='date'
                                            name='date'
                                            defaultValue={values.date}
                                            onChange={handleChange('date')}
                                            min={tomorrow}
                                        />

                                    </div>
                                    {renderDateError()}
                                    <div className='flex padding20'>
                                            <label>Godzina</label>
                                            <input
                                                type='time'
                                                name='time'
                                                defaultValue={values.time}
                                                onChange={handleChange('time')}
                                            />
                                    </div>
                                    {renderTimeError()}
                                    <div className='flex padding20 last'>
                                        <label className='last'>Uwagi dla kuriera</label>
                                        <textarea
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