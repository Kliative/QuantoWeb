export const alphaNumericPattern = /^[A-Za-z0-9 .,\r\n]*$/i;
export const alphaNumericPlusSpecialPattern = /^[^`~$^[\]|\\]*$/i;

export const alphaNumericMessage: string = 'Please note, no special  characters are allowed in this field';
export const alphaNumericPlusSpecialMessage: string = 'Please note, the following special characters are not allowed `~$^[]|\\ in this field';

const generalRegex = new RegExp(/^[A-Za-z0-9 \-:_.,!?"'/()+\r\n]*$/i);
const alphabeticRegex = new RegExp(/^[a-zA-Z .]*$/);
const alphaNumericRegex = new RegExp(alphaNumericPattern);
const numericRegex = new RegExp(/^[0-9,.]*$/i);
const emailRegex = new RegExp(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i);
const phoneRegex = new RegExp(/^[^a-zA-Z`~$^[\]|\\]*$/i);
const nameRegex = new RegExp(/^[a-zA-Z .-]*$/);
const alphaNumericPlusSpecialRegex = new RegExp(alphaNumericPlusSpecialPattern);
const alphabetsplusSpecialRegex = new RegExp(/^[^0-9`~$^[\]|\\]*$/i);

export function testGeneralRegex(test: string): boolean {
    return generalRegex.test(test);
}

export function testAlphabeticRegex(test: string): boolean {
    return alphabeticRegex.test(test);
}

export function testAlphaNumericRegex(test: string): boolean {
    return alphaNumericRegex.test(test);
}

export function testNumericRegex(test: string): boolean {
    return numericRegex.test(test);
}

export function testEmailRegex(test: string): boolean {
    return emailRegex.test(test);
}

export function testPhoneRegex(test: string): boolean {
    return phoneRegex.test(test);
}

export function testNameRegex(test: string): boolean {
    return nameRegex.test(test);
}

export function testAlphaNumericPlusSpecialRegex(test: string): boolean {
    return alphaNumericPlusSpecialRegex.test(test);
}

export function testAlphabetPlusSpecialRegex(test: string): boolean {
    return alphabetsplusSpecialRegex.test(test);
}
