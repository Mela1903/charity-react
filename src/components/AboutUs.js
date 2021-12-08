import React from 'react';

const AboutUs = () => {
    return (
        <div className='flex about' id='about'>
                <div className='about__text'>
                    <h2 className='headers_text'>O nas</h2>
                    <img src={require('../assets/Decoration.svg').default} alt='Decoration'/>
                    <p className='about__description'>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
                        Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                    </p>
                    <img className='about__signature' src={require('../assets/Signature.svg').default} alt='Signature'/>
                </div>
                <div className='about__image'></div>
        </div>
    );
};

export default AboutUs;