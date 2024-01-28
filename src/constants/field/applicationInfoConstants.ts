import FormFieldConstants from "@/components/types/FormFieldConstants";

const fieldNamePrefix = 'applicationInfo';

const applicationInfoConstants: {
    designation: FormFieldConstants,
    faculty: FormFieldConstants,
    department: FormFieldConstants,
    school: FormFieldConstants,
} = {
    designation: {
        name: `${fieldNamePrefix}.designation`,
        label: 'Designation',
        tooltip: 'Choose the designation you wish to work at',
        placeholder: 'Select a designation',
    },
    faculty: {
        name: `${fieldNamePrefix}.faculty`,
        label: 'Faculty',
        tooltip: 'Choose the faculty you wish to work at',
        placeholder: 'Select a faculty',
    },
    department: {
        name: `${fieldNamePrefix}.department`,
        label: 'Department',
        tooltip: 'Choose the department you wish to work at',
        placeholder: 'Select a department',
    },
    school: {
        name: `${fieldNamePrefix}.school`,
        label: 'School',
        tooltip: 'Automatically filled in based on the department you choose',
        placeholder: '',
    }
}

export default applicationInfoConstants;
export { fieldNamePrefix };