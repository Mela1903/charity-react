import React from 'react';

const Organisations = ({ organisations }) => {
    return (
        <ul className='org-list'>
            {organisations.map(organisation => (
                <li key={organisation.id} className='organisations'>
                    <div className='flex organisation'>
                        <div className='flex organisation__characteristic'>
                            <div className='organisation__characteristic-title'>{organisation.title}</div>
                            <div className='organisation__characteristic-subtitle'>{organisation.subtitle}</div>
                        </div>
                        <div className='organisation__needs'>{organisation.needs}</div>
                    </div>

                </li>
            ))}
        </ul>
    );
};

export default Organisations;