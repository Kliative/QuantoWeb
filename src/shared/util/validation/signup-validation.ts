import { stringIsNotEmptyOrNull } from './validation-checks';
import { UserSignUpData, PersonalDetailsSignUp, Roles, MedicalDetailsSignUp } from '../../../core/models/user.model';
import { testAlphaNumericPlusSpecialRegex, testEmailRegex } from '../services/regex.service';


export function canSubmitFirebaseManditory(userSignUpData: UserSignUpData): boolean {
    return userSignUpData != null && (
        stringIsNotEmptyOrNull(userSignUpData.email, testEmailRegex)
        &&
        stringIsNotEmptyOrNull(userSignUpData.password, testAlphaNumericPlusSpecialRegex)
    );
}

export function canSubmitPersonalDetails(personalDetails: PersonalDetailsSignUp): boolean {
    return personalDetails != null && (
        stringIsNotEmptyOrNull(personalDetails.firstname, testAlphaNumericPlusSpecialRegex)
        &&
        stringIsNotEmptyOrNull(personalDetails.surname, testAlphaNumericPlusSpecialRegex)
    );
}

export function hasRoleBeenAssigned(roles: Roles): boolean {
    return roles != null && (
        roles.admin === true
        ||
        roles.doctor === true
        ||
        roles.patient === true
        ||
        roles.physio === true
        ||
        roles.student === true
    );

}
export function canSubmitMedicalDetails(medicalDetails: MedicalDetailsSignUp): boolean {
    return medicalDetails != null && (
        stringIsNotEmptyOrNull(medicalDetails.practiseName, testAlphaNumericPlusSpecialRegex)
        &&
        stringIsNotEmptyOrNull(medicalDetails.address, testAlphaNumericPlusSpecialRegex)
        &&
        stringIsNotEmptyOrNull(medicalDetails.city, testAlphaNumericPlusSpecialRegex)
        &&
        stringIsNotEmptyOrNull(medicalDetails.country, testAlphaNumericPlusSpecialRegex)
        &&
        stringIsNotEmptyOrNull(medicalDetails.practiceId, testAlphaNumericPlusSpecialRegex)
    );
}
//
export function canSubmitSignUpForm(signUpModel: UserSignUpData): boolean {
    return signUpModel != null && (
        canSubmitFirebaseManditory(signUpModel)
        &&
        canSubmitPersonalDetails(signUpModel.personalDetails)
        &&
        hasRoleBeenAssigned(signUpModel.roles)
        &&
        canSubmitMedicalDetails(signUpModel.medicalDetails)
    );
}
