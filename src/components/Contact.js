import React, {useState} from 'react';
import Footer from "./Footer";

const Contact = () => {
    const initialContactData = {
        name: "",
        email: "",
        message: ""
    }

    const [contactData, setContactData] = useState(initialContactData)

    const resetContactForm = () => {
        setContactData(initialContactData);
    }

    const [formErrors, setFormErrors] = useState([]);
    const [successfullySubmitted, setSuccessfullySubmitted] = useState(false)

    const handleContactFormDataChange = (e) => {
        let value = e.target.value;

        setContactData({
            ...contactData,
            [e.target.name]: value
        });
    }

    const renderErrors = (inputName) => {
        let hasError = false;
        let errorMessage = ""

        switch (inputName) {
            case "name":
                errorMessage = "Podane imię jest nieprawidłowe!";
                break;
            case "email":
                errorMessage = "Podany email jest nieprawidłowy!";
                break;
            case "message":
                errorMessage = "Wiadomość musi mieć conajmniej 120 znaków!";
        }

        formErrors.map((el) => {
            if (el.param === inputName) {
                hasError = true;
            }
        });

        return (hasError) ? <p className="contact-form-error">{errorMessage}</p> : ""
    }

    const renderSuccessMessage = () => (successfullySubmitted) ?
        <p className="contact-form-success">Wiadomość została wysłana!<br/> Wkrótce się skontaktujemy.</p> : "";

    const sendDataToValidation = () => {
        const url = "https://fer-api.coderslab.pl/v1/portfolio/contact";

        fetch(url, {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contactData)
        })
            .then(data => data.json())
            .then(data => (data.status === "success") ?
                submitValidData([],true) : submitValidData(data,false))
    }

    const submitValidData = (data, isDataValid) => {
        if (isDataValid) {
            setFormErrors(data);
            setSuccessfullySubmitted(true);
            resetContactForm();
        } else {
            setFormErrors(data.errors);
            setSuccessfullySubmitted(false);
        }
    }

    const contactFormHandler = (e) => {
        e.preventDefault();
        sendDataToValidation();
    }

    const formFieldHandler = (inputName) => {
        let hasError = false;
        formErrors.map((el) => {
            if (el.param === inputName){
                hasError = true;
            }
        })
        return hasError ? "error" : "";
    }

    return (
        <section className="contact" id="contact">
            <div className="contact-form" >
                <h2 className='headers_text'>Skontaktuj się z nami</h2>
                <img src={require('../assets/Decoration.svg').default} alt='Decoration'/>
                {renderSuccessMessage()}
                <form onSubmit={contactFormHandler}>
                    <section className="contact-form__user-data">
                        <div className="contact-form__user-data--input">
                            <label>Wpisz swoje imię</label>
                            <input
                                type="text"
                                placeholder={placeholders.name}
                                name="name"
                                value={contactData.name}
                                onChange={handleContactFormDataChange}
                                className={formFieldHandler("name")}
                            />
                            {renderErrors("name")}
                        </div>
                        <div className="contact-form__user-data--input">
                            <label>Wpisz swój email</label>
                            <input
                                type="text"
                                placeholder={placeholders.email}
                                name="email"
                                value={contactData.email}
                                onChange={handleContactFormDataChange}
                                className={formFieldHandler("email")}
                            />
                            {renderErrors("email")}
                        </div>
                    </section>

                    <section className="contact-form__message">
                        <label>Wpisz swoją wiadomość</label>
                        <textarea
                            rows="4"
                            placeholder={placeholders.message}
                            name="message"
                            value={contactData.message}
                            onChange={handleContactFormDataChange}
                            className={formFieldHandler("message")}
                        />
                        {renderErrors("message")}
                    </section>

                    <button className="btn btn__logout">
                        Wyślij
                    </button>
                </form>
            </div>
            <Footer />
        </section>
    );
};

const placeholders = {
    name: "Napisz swoje imię",
    email: "example@gmail.com",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do " +
        "eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, " +
        "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
}

export default Contact;