import React, {useEffect} from 'react';
import firebase from "../../firebase";

const DonationSummary = ({ values, prevStep, nextStep }) => {
    const checked = values.helpGroups;

    useEffect(() => {
        firebase.firestore().collection('donationFormData').doc().set({
            type: values.type,
            bags: values.bags,
            localization: values.localization,
            helpGroups: values.helpGroups,
            localizationSpecific: values.localizationSpecific,
            street: values.street,
            city: values.city,
            postCode: values.postCode,
            phone: values.phone,
            date: values.date,
            time: values.time,
            note: values.note
        }).then((data) =>
            console.log(data)
        ).catch((err) =>
            console.log(err)
        )
    }, [])

    const checkedTypes = () => {
        if (values.bags === 1) {
            return 'worek'
        } else {
            return 'worki'
        }
    }

    const checkedArray = () => {
        return checked.join(', ');
    }

    return (
            <div className='banner-form'>
                <div className='banner-form_container banner-form_container_summary'>
                    <h3 className='header3_text-donation-form'>Podsumowanie Twojej darowizny</h3>
                    <div style={{paddingTop: 45}}>
                        Oddajesz:
                        <div className='flex summary'>
                            <div className='flex' style={{alignItems: 'center'}}>
                                <img src={require('../../assets/Icon-1.svg').default} alt='Icon T-Shirt'/>
                                {values.bags} {checkedTypes()}, {' '}
                                {values.type}, {' '}
                                {checkedArray()}
                            </div>
                            <div className='flex' style={{alignItems: 'center'}}>
                                <img src={require('../../assets/Icon-4.svg').default} alt='Icon T-Shirt'/>
                                dla lokalizacji: {values.localization}
                            </div>
                        </div>
                    </div>

                    <div className='flex' style={{paddingTop: 50}}>
                        <div className='flex' style={{paddingRight: 142, flexDirection: 'column'}}>
                            Adres odbioru:
                            <div className='flex' style={{paddingTop: 10}}>
                                <span style={{paddingRight: 20, width: 100}}>Ulica</span>
                                <span>{values.street}</span>
                            </div>
                            <div className='flex' style={{paddingTop: 10}}>
                                <span style={{paddingRight: 20, width: 100}}>Miasto</span>
                                <span>{values.city}</span>
                            </div>
                            <div className='flex' style={{paddingTop: 10}}>
                                <span style={{paddingRight: 20, width: 100}}>Kod pocztowy</span>
                                <span>{values.postCode}</span>
                            </div>
                            <div className='flex' style={{paddingTop: 10}}>
                                <span style={{paddingRight: 20, width: 100}}>Numer telefonu</span>
                                <span>{values.phone}</span>
                            </div>
                        </div>
                        <div className='flex' style={{flexDirection: 'column'}}>
                            Termin odbioru:
                            <div className='flex' style={{paddingTop: 10}}>
                                <span style={{paddingRight: 20, width: 100}}>Data</span>
                                <span>{values.date}</span>
                            </div>
                            <div className='flex' style={{paddingTop: 10}}>
                                <span style={{paddingRight: 20, width: 100}}>Godzina</span>
                                <span>{values.time}</span>
                            </div>
                            <div className='flex' style={{paddingTop: 10}}>
                                <span style={{paddingRight: 20, width: 100}}>Uwagi dla kuriera</span>
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