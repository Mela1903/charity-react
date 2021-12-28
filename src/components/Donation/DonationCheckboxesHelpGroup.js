import React from 'react';

const DonationCheckboxesHelpGroup = ({values}) => {

    const helpGroups = ['dzieciom', 'samotnym matkom', 'bezdomnym', 'niepełnosprawnym', 'osobom starszym']
    const [checkedItemsTest, setCheckedItemsTest] = useState(values.helpGroups);

    const handleCheckbox = (data) => {
        console.log(data)
        const isChecked = checkedItemsTest.some(element => element === data)
        if (isChecked) {
            setCheckedItemsTest(
                checkedItemsTest.filter(
                    (element) => element !== data
                )
            );
        } else {
            setCheckedItemsTest(checkedItemsTest.concat(data));
        }
    };
    return (
        <div className='flex' style={{flexDirection: 'column'}}>
            <label className='label-needs'>
                Komu chcesz pomóc?
                {checkedItems['dzieciom']}
            </label>
            <div style={{flexDirection: 'row', width: 690}}>
                {helpGroups?.map((name, index) => (
                    <div className='checkbox-button flex' key={index} >
                        <label >
                            <span>{name}</span>
                            <input
                                value={name}
                                checked={checkedItemsTest.some(element => element === name)}
                                onClick={() => handleCheckbox(name)}
                                type='checkbox'
                            />

                        </label>
                    </div>
                ))}

                {functionHelpGroupError()}
            </div>

        </div>
    );
};

export default DonationCheckboxesHelpGroup;