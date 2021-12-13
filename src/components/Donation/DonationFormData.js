import React, {useState} from 'react';

const DonationFormData = () => {
    const [activeStep, setActiveStep] = useState(0)

    const getSteps = () => {
        return ["type", "bags", "localization", "address", "summary", "thank you"]
    }

    const steps = getSteps()

    const [multiFormValues, setMultiFormValues] = useState({
        type: '',
        bags: '',
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

    return (
        <div>

        </div>
    );
};

export default DonationFormData;