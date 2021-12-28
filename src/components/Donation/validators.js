const phoneRegex = new RegExp(/^[0-9 ()+-]+$/);

export const phoneValidator = value => !value ? "Numer telefonu jest wymagany" : phoneRegex.test(value) ? "" : "Not a valid phone number.";
