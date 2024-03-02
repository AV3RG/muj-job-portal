import FormFieldConstants from "@/components/types/constants/FormFieldConstants"
import FormLocationConstants from "@/components/types/constants/FormLocationConstants";

const fieldNamePrefix = 'academicInfo';
const class10FieldNamePrefix = `${fieldNamePrefix}.class10`;
const class12FieldNamePrefix = `${fieldNamePrefix}.class12`;
const graduationFieldNamePrefix = `${fieldNamePrefix}.graduation`;

const class10Constants: {
    location: FormLocationConstants,
    educationMode: FormFieldConstants,
    school: FormFieldConstants,
    board: FormFieldConstants,
    passingYear: FormFieldConstants,
    division: FormFieldConstants,
    aggregate: FormFieldConstants,
} = {
    location: {
        country: {
            name: 'country',
            label: 'Country',
            tooltip: 'Enter the country of your school in which you passed 10th class',
            placeholder: 'Country',
            commandInputPlaceholder: 'Search Country...',
            commandEmptyText: 'No Countries Found'
        },
        state: {
            name: 'state',
            label: 'State',
            tooltip: 'Enter the state of your school in which you passed 10th class',
            placeholder: 'State',
            commandInputPlaceholder: 'Search State...',
            commandEmptyText: 'No States Found'
        },
        city: {
            name: 'city',
            label: 'City',
            tooltip: 'Enter the city of your school in which you passed 10th class',
            placeholder: 'City',
            commandInputPlaceholder: 'Search City...',
            commandEmptyText: 'No Cities Found'
        },
        prefix: 'location',
    },
    educationMode: {
        name: 'educationMode',
        label: 'Education Mode',
        tooltip: 'Choose the mode of education in which you passed 10th class',
        placeholder: 'Choose...',
    },
    school: {
        name: 'school',
        label: 'School',
        tooltip: 'Enter the name of your school in which you passed 10th class',
        placeholder: 'School Name',
    },
    board: {
        name: 'board',
        label: 'Board',
        tooltip: 'Enter the respective board of your school in which you passed 10th class',
        placeholder: 'Board Name',
    },
    passingYear: {
        name: 'passingYear',
        label: 'Passing Year',
        tooltip: 'Choose 10th class passing year',
        placeholder: 'Choose...',
    },
    division: {
        name: 'division',
        label: 'Division',
        tooltip: 'Enter the division of your 10th class result. Leave empty if not applicable.',
        placeholder: 'Choose...',
    },
    aggregate: {
        name: 'aggregate',
        label: 'Aggregate Percentage',
        tooltip: 'Enter your Aggregate Percentage in 10th class. Leave empty if not applicable.',
        placeholder: 'Aggregate Percentage',
    },
}

const class12Constants: {
    location: FormLocationConstants,
    educationMode: FormFieldConstants,
    school: FormFieldConstants,
    board: FormFieldConstants,
    stream: FormFieldConstants,
    passingYear: FormFieldConstants,
    division: FormFieldConstants,
    aggregate: FormFieldConstants,
} = {
    location: {
        country: {
            name: 'country',
            label: 'Country',
            tooltip: 'Enter the country of your school in which you passed 12th class',
            placeholder: 'Country',
            commandInputPlaceholder: 'Search Country...',
            commandEmptyText: 'No Countries Found'
        },
        state: {
            name: 'state',
            label: 'State',
            tooltip: 'Enter the state of your school in which you passed 12th class',
            placeholder: 'State',
            commandInputPlaceholder: 'Search State...',
            commandEmptyText: 'No States Found'
        },
        city: {
            name: 'city',
            label: 'City',
            tooltip: 'Enter the city of your school in which you passed 12th class',
            placeholder: 'City',
            commandInputPlaceholder: 'Search City...',
            commandEmptyText: 'No Cities Found'
        },
        prefix: 'location',
    },
    educationMode: {
        name: 'educationMode',
        label: 'Education Mode',
        tooltip: 'Choose the mode of education in which you passed 12th class',
        placeholder: 'Choose...',
    },
    school: {
        name: 'school',
        label: 'School',
        tooltip: 'Enter the name of your school in which you passed 12th class',
        placeholder: 'School Name',
    },
    board: {
        name: 'board',
        label: 'Board',
        tooltip: 'Enter the respective board of your school in which you passed 12th class',
        placeholder: 'Board Name',
    },
    stream: {
        name: 'stream',
        label: 'Stream',
        tooltip: 'Enter the stream of your 12th class. Leave empty if not applicable.',
        placeholder: 'Choose...',
    },
    passingYear: {
        name: 'passingYear',
        label: 'Passing Year',
        tooltip: 'Choose 12th class passing year',
        placeholder: 'Choose...',
    },
    division: {
        name: 'division',
        label: 'Division',
        tooltip: 'Enter the division of your 12th class result. Leave empty if not applicable.',
        placeholder: 'Choose...',
    },
    aggregate: {
        name: 'Aggregate',
        label: 'Aggregate Percentage',
        tooltip: 'Enter your Aggregate Percentage in 12th class. Leave empty if not applicable.',
        placeholder: 'Aggregate Percentage',
    },
}

const graduationConstants: {
    location: FormLocationConstants,
    educationMode: FormFieldConstants,
    university: FormFieldConstants,
    college: FormFieldConstants,
    graduationYear: FormFieldConstants,
    courseName: FormFieldConstants,
    specialization: FormFieldConstants,
    division: FormFieldConstants,
    aggregate: FormFieldConstants,
} = {
    location: {
        country: {
            name: 'country',
            label: 'Country',
            tooltip: 'Enter the country of your college in which you passed graduation',
            placeholder: 'Country',
            commandInputPlaceholder: 'Search Country...',
            commandEmptyText: 'No Countries Found'
        },
        state: {
            name: 'state',
            label: 'State',
            tooltip: 'Enter the state of your college in which you passed graduation',
            placeholder: 'State',
            commandInputPlaceholder: 'Search State...',
            commandEmptyText: 'No States Found'
        },
        city: {
            name: 'city',
            label: 'City',
            tooltip: 'Enter the city of your college in which you passed graduation',
            placeholder: 'City',
            commandInputPlaceholder: 'Search City...',
            commandEmptyText: 'No Cities Found'
        },
        prefix: 'location',
    },
    educationMode: {
        name: 'educationMode',
        label: 'Education Mode',
        tooltip: 'Choose the mode of education in which you passed graduation',
        placeholder: 'Choose...',
    },
    university: {
        name: 'university',
        label: 'University',
        tooltip: 'Enter the name of your university in which you passed graduation',
        placeholder: 'University Name',
    },
    college: {
        name: 'college',
        label: 'College',
        tooltip: 'Enter the name of your college in which you passed graduation',
        placeholder: 'College Name',
    },
    graduationYear: {
        name: 'graduationYear',
        label: 'Graduation Year',
        tooltip: 'Choose graduation passing year',
        placeholder: 'Choose...',
    },
    courseName: {
        name: 'courseName',
        label: 'Course Name',
        tooltip: 'Enter the name of your graduation course',
        placeholder: 'Course Name',
    },
    specialization: {
        name: 'specialization',
        label: 'Specialization',
        tooltip: 'Enter the specialization of your graduation course. Leave empty if not applicable.',
        placeholder: 'Specialization',
    },
    division: {
        name: 'division',
        label: 'Division',
        tooltip: 'Enter the division of your graduation result. Leave empty if not applicable.',
        placeholder: 'Choose...',
    },
    aggregate: {
        name: 'Aggregate',
        label: 'Aggregate Percentage',
        tooltip: 'Enter your Aggregate Percentage in graduation. Leave empty if not applicable.',
        placeholder: 'Aggregate Percentage',
    },
}

const academicQualificationConstants = {
    class10: class10Constants,
    class12: class12Constants,
    graduation: graduationConstants,
}

export default academicQualificationConstants;
export {fieldNamePrefix, class10FieldNamePrefix, class12FieldNamePrefix, graduationFieldNamePrefix, class10Constants, class12Constants, graduationConstants};
