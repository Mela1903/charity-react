import React, {useState} from 'react';
import DonationType from "./DonationType";
import DonationBags from "./DonationBags";
import DonationLocalization from "./DonationLocalization";
import DonationAddress from "./DonationAddress";
import DonationSummary from "./DonationSummary";
import DonationConfirmation from "./DonationConfirmation";

const DonationFormData = () => {
    const [activeStep, setActiveStep] = useState(1)
    const [multiFormValues, setMultiFormValues] = useState({
        type: '',
        bags: "",
        localization: '',
        helpGroups: [],
        localizationSpecific: '',
        street: '',
        city: '',
        postCode: '',
        phone: '',
        date: '',
        time: '',
        note: ''
    })

    const nextStep = () => {
        setActiveStep(activeStep + 1);
    }

    const prevStep = () => {
        setActiveStep(activeStep - 1);
    }

    const handleChange = (input) => (e) => {
        setMultiFormValues({...multiFormValues, [input]: e.target.value});
    }

    const handleSelectChange = (input, number) => {
        setMultiFormValues({...multiFormValues, [input]: number});
    }

        switch (activeStep) {
            case 1:
                return (
                    <DonationType values={multiFormValues} nextStep={nextStep} handleSelectChange={handleSelectChange}/>
                )
            case 2:
                return (
                    <DonationBags values={multiFormValues} nextStep={nextStep} prevStep={prevStep}
                                  handleSelectChange={handleSelectChange}/>
                )
            case 3:
                return (
                    <DonationLocalization values={multiFormValues} nextStep={nextStep} prevStep={prevStep}
                                          handleSelectChange={handleSelectChange}/>
                )
            case 4:
                return (
                    <DonationAddress values={multiFormValues} nextStep={nextStep} prevStep={prevStep}
                                     handleChange={handleChange}/>
                )
            case 5:
                return (
                    <DonationSummary values={multiFormValues} nextStep={nextStep} prevStep={prevStep}/>
                )
            case 6:
                return (
                    <DonationConfirmation values={multiFormValues}/>
                )
        }

};

export default DonationFormData;