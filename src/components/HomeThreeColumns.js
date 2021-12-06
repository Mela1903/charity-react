import React from 'react';

const HomeThreeColumns = () => {
    return (
        <div className='flex threeColumns'>
            <div className='box'>
                <div className='box_value'>10</div>
                <div className='box_objective'>oddanych worków</div>
                <p className='box_description'>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
            <div className='box'>
                <div className='box_value'>5</div>
                <div className='box_objective'>wspartych organizacji</div>
                <p className='box_description'>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
            <div className='box'>
                <div className='box_value'>7</div>
                <div className='box_objective'>zorganizowanych zbiórek</div>
                <p className='box_description'>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
        </div>
    );
};

export default HomeThreeColumns;