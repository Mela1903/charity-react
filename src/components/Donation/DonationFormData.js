import React, {useState} from 'react';
import DonationType from "./DonationType";
import DonationBags from "./DonationBags";
import DonationLocalization from "./DonationLocalization";
import DonationAddress from "./DonationAddress";

const DonationFormData = () => {
    const [activeStep, setActiveStep] = useState(1)

    const getSteps = () => {
        return ["type", "bags", "localization", "address", "summary", "thank you"]
    }

    // const steps = getSteps()

    const [multiFormValues, setMultiFormValues] = useState({
        type: '',
        bags: "",
        localization: '',
        helpGroups: '',
        localizationSpecific: '',
        street: '',
        city: '',
        postCode: '',
        phone: '',
        date: '',
        time: '',
        note: ''
    })

    const handleNextStep = () => {
        setActiveStep((nextStep) => nextStep + 1)
    }

    const handlePreviousStep = () => {
        setActiveStep((previousStep) => previousStep - 1)
    }

    const handleChange = (input) => (e) => {
        setMultiFormValues({...multiFormValues, [input]: e.target.value})
    }

    const handleSelectChange = (input, number) => {
        setMultiFormValues({...multiFormValues, [input]: number})
    }

    return (
        <div>
            {activeStep === 1 && (
                <DonationType values={multiFormValues} handleChange={handleChange}/>
            )}
            {activeStep === 2 && (
                <DonationBags values={multiFormValues} handleSelectChange={handleSelectChange}/>
            )}
            {activeStep === 3 && (
                <DonationLocalization values={multiFormValues} handleChange={handleChange} handleSelectChange={handleSelectChange} />
            )}
            {activeStep === 4 && (
                <DonationAddress values={multiFormValues} handleChange={handleChange} />
            )}
            <div className='flex'>
                <button
                    className='btn btn__donation-form'
                    hidden={activeStep === 1}
                    onClick={handlePreviousStep}
                >
                    Wstecz</button>
                <button
                    className='btn btn__donation-form'
                    onClick={handleNextStep}
                >
                    Dalej</button>
            </div>
        </div>
    );
};

export default DonationFormData;