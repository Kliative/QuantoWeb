
export class UserSignUpData {
    uid: string;
    email?: string | null;
    password: string;
    photoURL?: string;
    displayName?: string;
    //
    personalDetails: PersonalDetailsSignUp;
    medicalDetails: MedicalDetailsSignUp;
    roles: Roles;

    status?: string;

    constructor(copy?: UserSignUpData) {
        if (copy) {
            this.uid = copy.uid;
            this.email = copy.uid;
            // this.password = copy.uid;
            this.photoURL = copy.uid;
            this.displayName = copy.uid;
            //
            this.personalDetails = new PersonalDetailsSignUp();
            this.medicalDetails = new MedicalDetailsSignUp();
            this.roles = new Roles();
            this.status = copy.status;
        } else {
            this.uid = '';
            this.email = '';
            this.password = '';
            this.photoURL = '';
            this.displayName = '';
            //
            this.personalDetails = new PersonalDetailsSignUp();
            this.medicalDetails = new MedicalDetailsSignUp();
            this.roles = new Roles();
            this.status = '';
        }
    }
}

export class PersonalDetailsSignUp {
    firstname: string;
    surname: string;
    constructor(copy?: PersonalDetailsSignUp) {
        if (copy) {
            this.firstname = copy.firstname;
            this.surname = copy.surname;
        } else {

        }
    }
}

export class MedicalDetailsSignUp {
    practiseName: string;
    address: string;
    city: string;
    country: string;
    practiceId: string;
    constructor(copy?: MedicalDetailsSignUp) {
        if (copy) {
            this.practiseName = copy.practiseName;
            this.address = copy.address;
            this.city = copy.city;
            this.country = copy.country;
            this.practiceId = copy.practiceId;
        } else {
            this.practiseName = '';
            this.address = '';
            this.city = '';
            this.country = '';
            this.practiceId = '';
        }
    }

}

export class Roles {
    doctor?: boolean;
    patient?: boolean;
    physio?: boolean;
    student?: boolean;
    admin?: boolean;
    userVerifried?: boolean;
    practiceVerified?: boolean;
    constructor(copy?: Roles) {
        if (copy) {
            this.doctor = copy.doctor;
            this.patient = copy.patient;
            this.physio = copy.physio;
            this.student = copy.student;
            this.admin = copy.admin;
            this.userVerifried = copy.userVerifried;
            this.practiceVerified = copy.practiceVerified;
        } else {

        }
    }
}
