import React, {useEffect, useState} from 'react';
import {db} from "../firebase";
import {collection, getDocs} from 'firebase/firestore'

const Help = () => {
    const [organisations, setOrganisations] = useState([]);
    const organisationsCollectionRef = collection(db, 'organisations')

    useEffect(() => {
        const getOrganisations = async () => {
            const data = await getDocs(organisationsCollectionRef);
            setOrganisations(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            console.log(data.docs)
        };

        getOrganisations();
    }, [])


    return (
        <div className='flex help'>
            <div>
                <h2 className='headers_text'>Komu pomagamy?</h2>
                <img src={require('../assets/Decoration.svg').default} alt='Decoration'/>
                <div className='help__who'>
                    <button className='btn btn__help'>Fundacjom</button>
                    <button className='btn btn__help'>Organizacjom pozarządowym</button>
                    <button className='btn btn__help'>Lokalnym zbiórkom</button>
                </div>
                <p className='help__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                <p className='help__description'>do eiusmod tempor incididunt ut labore et dolore magna</p>
                <p className='help__description'>aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>

                {organisations.map((organisation) => {
                    return (
                        <div>
                            <h4>{organisation.title}</h4>
                        </div>
                    )
                }

                )}
            </div>
        </div>
    );
};

export default Help;