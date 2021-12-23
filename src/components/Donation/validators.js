const phoneRegex = new RegExp(/^[0-9 ()+-]+$/);

export const typeValidator = (value) => !value ? 'Wybierz rodzaj darowizny' : '';
export const bagsValidator = (value) => !value ? 'Musisz określić ile worków chcesz przekazać' : '';

export const phoneValidator = value => !value ? "Numer telefonu jest wymagany" : phoneRegex.test(value) ? "" : "Not a valid phone number.";
