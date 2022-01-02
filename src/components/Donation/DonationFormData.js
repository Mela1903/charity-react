import React, {useState} from 'react';
import DonationType from "./DonationType";
import DonationBags from "./DonationBags";
import DonationLocalization from "./DonationLocalization";
import DonationAddress from "./DonationAddress";
import DonationSummary from "./DonationSummary";
import DonationConfirmation from "./DonationConfirmation";

const DonationFormData = () => {
    const [activeStep, setActiveStep] = useState(1)
    const [formInputName, setFormInputName] = useState('')
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

    const [isNextAvailable, setIsNextAvailable] = useState(false);
    // console.log(isNextAvailable)

    const nextStep = () => {
        setActiveStep(activeStep + 1);
    }

    const prevStep = () => {
        setActiveStep(activeStep - 1);
    }

    // const handleNextStep = (attribute) => {
    //     console.log(attribute, multiFormValues[attribute])
    //     if (multiFormValues[attribute] !== '') {
    //         setIsNextAvailable(true);
    //         setActiveStep((nextStep) => nextStep + 1);
    //
    //     } else {
    //         setIsNextAvailable(false)
    //     }
    // }

    // const handlePreviousStep = () => {
    //     setActiveStep((previousStep) => previousStep - 1)
    // }

    const handleChange = (input) => (e) => {
        setFormInputName(e.target.name);
        setMultiFormValues({...multiFormValues, [input]: e.target.value});
    }

    const handleSelectChange = (input, number, inputName) => {
        setFormInputName(inputName);
        setMultiFormValues({...multiFormValues, [input]: number});
    }

    // return (
    //     <div>
    //         {activeStep === 1 && (
    //             <DonationType values={multiFormValues} handleSelectChange={handleSelectChange} setFormInputName={setFormInputName} />
    //         )}
    //         {activeStep === 2 && (
    //             <DonationBags values={multiFormValues} handleSelectChange={handleSelectChange} setIsNextAvailable={setIsNextAvailable} setFormInputName={setFormInputName}/>
    //         )}
    //         {activeStep === 3 && (
    //             <DonationLocalization values={multiFormValues} handleSelectChange={handleSelectChange} setIsNextAvailable={setIsNextAvailable} />
    //         )}
    //         {activeStep === 4 && (
    //             <DonationAddress values={multiFormValues} handleChange={handleChange} setIsNextAvailable={setIsNextAvailable} />
    //         )}
    //         {activeStep === 5 && (
    //             <DonationSummary values={multiFormValues}/>
    //         )}
    //         {activeStep === 6 && (
    //             <DonationConfirmation />
    //         )}
    //         <div className='flex btn-donation-steps'>
    //             <button
    //                 className='btn btn__donation-form'
    //                 hidden={activeStep === 1 || activeStep === 6}
    //                 onClick={handlePreviousStep}
    //             >
    //                 Wstecz</button>
    //             <button
    //                 className='btn btn__donation-form'
    //                 onClick={() => handleNextStep(formInputName)}
    //                 hidden={activeStep === 6}
    //             >
    //                 {activeStep === 5 ? 'Potwierdzam' : 'Dalej'}
    //                 </button>
    //         </div>
    //
    //     </div>
    // );

        switch (activeStep) {
            case 1:
                return (
                    <DonationType values={multiFormValues} nextStep={nextStep} handleSelectChange={handleSelectChange} setFormInputName={setFormInputName}/>
                )
            case 2:
                return (
                    <DonationBags values={multiFormValues} nextStep={nextStep} prevStep={prevStep} handleSelectChange={handleSelectChange} setIsNextAvailable={setIsNextAvailable} setFormInputName={setFormInputName}/>
                )
            case 3:
                return (
                    <DonationLocalization values={multiFormValues} nextStep={nextStep} prevStep={prevStep} handleSelectChange={handleSelectChange} setIsNextAvailable={setIsNextAvailable} />
                )
            case 4:
                return (
                    <DonationAddress values={multiFormValues} nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} setIsNextAvailable={setIsNextAvailable} />
                )
            case 5:
                return (
                    <DonationSummary values={multiFormValues} nextStep={nextStep} prevStep={prevStep}/>
                )
            case 6:
                return (
                    <DonationConfirmation />
                )
        }

};

export default DonationFormData;