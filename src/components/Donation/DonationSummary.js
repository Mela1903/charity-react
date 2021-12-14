import React, {useEffect} from 'react';
import firebase from "../../firebase";

const DonationSummary = ({ values }) => {
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

    const checkedArray = () => {
        let helpGrp = ''
        for (let key in checked) {
            if (checked.hasOwnProperty(key))
                helpGrp = helpGrp + key + ', '
        }
        return helpGrp.slice(0, helpGrp.length -2);
    }

    return (
            <div className='banner-form'>
                <div className='banner-form_container'>
                    <h3 className='header3_text-donation-form'>Podsumowanie Twojej darowizny</h3>
                    <div style={{paddingTop: 45}}>
                        Oddajesz:
                        <div className='flex summary'>
                            <div className='flex' style={{alignItems: 'center'}}>
                                <img src={require('../../assets/Icon-1.svg').default} alt='Icon T-Shirt'/>
                                {values.bags} worki, {' '}
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
                        <div className='flex' style={{paddingRight: 270, flexDirection: 'column'}}>
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
                                <span>{values.note}</span>
                            </div>
                        </div>

                    </div>

                </div>
        </div>
    );
};

export default DonationSummary;