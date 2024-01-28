import FormFieldConstants from "@/components/types/FormFieldConstants";

const fieldNamePrefix = 'personalInfo';

const personalInfoConstants: {
    firstName: FormFieldConstants,
    middleName: FormFieldConstants,
    lastName: FormFieldConstants,
    dob: FormFieldConstants,
    gender: FormFieldConstants,
    mob: FormFieldConstants,
    email: FormFieldConstants,

} = {
    firstName: {
        name: `${fieldNamePrefix}.firstName`,
        label: 'First Name',
        tooltip: 'Enter your first name as per your Aadhaar card. eg. If your name is Rohan Kumar Goyal, enter \'Rohan\' here',
        placeholder: 'First Name',
    },
    middleName: {
        name: `${fieldNamePrefix}.middleName`,
        label: 'Middle Name',
        tooltip: 'Enter your middle name as per your Aadhaar card. eg. If your name is Rohan Kumar Goyal, enter \'Kumar\' here',
        placeholder: 'Middle Name',
    },
    lastName: {
        name: `${fieldNamePrefix}.lastName`,
        label: 'Last Name',
        tooltip: 'Enter your last name as per your Aadhaar card. eg. If your name is Rohan Kumar Goyal, enter \'Goyal\' here',
        placeholder: 'Last Name'
    },
    dob: {
        name: `${fieldNamePrefix}.dob`,
        label: 'Date of Birth',
        tooltip: 'Enter your date of birth as per your Aadhaar card',
        placeholder: 'Date of Birth'
    },
    gender: {
        name: `${fieldNamePrefix}.gender`,
        label: 'Gender',
        tooltip: 'Enter your gender as per your Aadhaar card',
        placeholder: 'Gender'
    },
    mob: {
        name: `${fieldNamePrefix}.mobile`,
        label: 'Mobile No.',
        tooltip: 'Enter your mobile no. This will be used for communication purposes',
        placeholder: 'Mobile No.'
    },
    email: {
        name: `${fieldNamePrefix}.email`,
        label: 'Email ID',
        tooltip: 'Enter your personal email id. This will be used for communication purposes',
        placeholder: 'Email ID'
    }
}

export default personalInfoConstants
export {fieldNamePrefix}



