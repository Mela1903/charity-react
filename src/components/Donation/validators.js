const phoneRegex = new RegExp(/^[0-9 ()+-]+$/);
const emailRegex = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

export const phoneValidator = value => !value ? "Numer telefonu jest wymagany" : phoneRegex.test(value) ? "" : "Niepoprawny numer telefonu";
export const emailValidator = value => !value ? "Adres email jest wymagany" : emailRegex.test(value) ? "" : "Niepoprawny adres email";
