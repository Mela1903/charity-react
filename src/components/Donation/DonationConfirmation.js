import React, {useEffect} from 'react';
import firebase from "../../firebase";

const DonationConfirmation = ({values}) => {
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

    return (
        <div className='banner-form'>
            <div className='banner-form_container flex'
                 style={{
                     flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                     paddingRight: 800
                 }}>
                <h3 className='header-confirmation'>
                    Dziękujemy za przesłanie formularza
                </h3>
                <span style={{fontSize: 40, lineHeight: '55px'}}>Na maila prześlemy wszelkie</span>
                <span style={{fontSize: 40, lineHeight: '55px'}}>informacje o odbiorze.</span>
                <img src={require('../../assets/Decoration.svg').default} alt='Decoration'/>
            </div>

        </div>
    );
};

export default DonationConfirmation;