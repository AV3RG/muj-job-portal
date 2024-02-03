import FormFieldConstants from "@/components/types/constants/FormFieldConstants";
import FormAddressConstants from "@/components/types/constants/FormAddressConstants";

const fieldNamePrefix = 'personalInfo';

const personalInfoConstants: {
    firstName: FormFieldConstants,
    middleName: FormFieldConstants,
    lastName: FormFieldConstants,
    dob: FormFieldConstants,
    gender: FormFieldConstants,
    mob: FormFieldConstants,
    email: FormFieldConstants,
    currentAddress: FormAddressConstants,
    permanentAddress: FormAddressConstants,
    sameAddress: FormFieldConstants,
    religion: FormFieldConstants,
    maritalStatus: FormFieldConstants,
    aadhaarCard: FormFieldConstants,
    panCard: FormFieldConstants,
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
    },
    currentAddress: {
        country: {
            name: `${fieldNamePrefix}.currentResidence.country`,
            label: 'Country',
            tooltip: 'Enter your country of residence',
            placeholder: 'Country',
            commandInputPlaceholder: 'Search Country...',
            commandEmptyText: 'No Countries Found'
        },
        state: {
            name: `${fieldNamePrefix}.currentResidence.state`,
            label: 'State',
            tooltip: 'Enter your state of residence',
            placeholder: 'State',
            commandInputPlaceholder: 'Search State...',
            commandEmptyText: 'No States Found'
        },
        city: {
            name: `${fieldNamePrefix}.currentResidence.city`,
            label: 'City',
            tooltip: 'Enter your city of residence',
            placeholder: 'City',
            commandInputPlaceholder: 'Search City...',
            commandEmptyText: 'No Cities Found'
        },
        address: {
            name: `${fieldNamePrefix}.currentResidence.address`,
            label: 'Address',
            tooltip: 'Enter your current address of residence',
            placeholder: 'Full Address',
        },
    },
    permanentAddress: {
        country: {
            name: `${fieldNamePrefix}.permanentResidence.country`,
            label: 'Country',
            tooltip: 'Enter your country of residence',
            placeholder: 'Country',
            commandInputPlaceholder: 'Search Country...',
            commandEmptyText: 'No Countries Found'
        },
        state: {
            name: `${fieldNamePrefix}.permanentResidence.state`,
            label: 'State',
            tooltip: 'Enter your state of residence',
            placeholder: 'State',
            commandInputPlaceholder: 'Search State...',
            commandEmptyText: 'No States Found'
        },
        city: {
            name: `${fieldNamePrefix}.permanentResidence.city`,
            label: 'City',
            tooltip: 'Enter your city of residence',
            placeholder: 'City',
            commandInputPlaceholder: 'Search City...',
            commandEmptyText: 'No Cities Found'
        },
        address: {
            name: `${fieldNamePrefix}.permanentResidence.address`,
            label: 'Address',
            tooltip: 'Enter your current address of residence',
            placeholder: 'Full Address'
        },
    },
    sameAddress: {
        name: `${fieldNamePrefix}.sameAddress`,
        label: 'Same as Current Address',
        tooltip: 'Check this box if your permanent address is same as your current address',
        placeholder: 'Same as Current Address'
    },
    religion: {
        name: `${fieldNamePrefix}.religion`,
        label: 'Religion',
        tooltip: 'Enter your religion',
        placeholder: 'Religion'
    },
    maritalStatus: {
        name: `${fieldNamePrefix}.maritalStatus`,
        label: 'Marital Status',
        tooltip: 'Enter your marital status',
        placeholder: 'Marital Status'
    },
    aadhaarCard: {
        name: `${fieldNamePrefix}.aadhaarCard`,
        label: 'Aadhaar Card',
        tooltip: 'Enter your Aadhaar Card Number',
        placeholder: 'Aadhaar Card Number'
    },
    panCard: {
        name: `${fieldNamePrefix}.panCard`,
        label: 'PAN Card',
        tooltip: 'Enter your PAN Card Number',
        placeholder: 'PAN Card Number'
    },
}

export default personalInfoConstants
export {fieldNamePrefix}



