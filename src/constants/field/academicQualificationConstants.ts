import FormFieldConstants from "@/components/types/constants/FormFieldConstants"
import FormLocationConstants from "@/components/types/constants/FormLocationConstants";

const fieldNamePrefix = 'academicInfo';
const class10FieldNamePrefix = `${fieldNamePrefix}.class10`;
const class12FieldNamePrefix = `${fieldNamePrefix}.class12`;

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
            name: 'location.country',
            label: 'Country',
            tooltip: 'Enter the country of your school in which you passed 10th class',
            placeholder: 'Country',
            commandInputPlaceholder: 'Search Country...',
            commandEmptyText: 'No Countries Found'
        },
        state: {
            name: 'location.state',
            label: 'State',
            tooltip: 'Enter the state of your school in which you passed 10th class',
            placeholder: 'State',
            commandInputPlaceholder: 'Search State...',
            commandEmptyText: 'No States Found'
        },
        city: {
            name: 'location.city',
            label: 'City',
            tooltip: 'Enter the city of your school in which you passed 10th class',
            placeholder: 'City',
            commandInputPlaceholder: 'Search City...',
            commandEmptyText: 'No Cities Found'
        },
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
        name: 'Aggregate',
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
            name: 'location.country',
            label: 'Country',
            tooltip: 'Enter the country of your school in which you passed 12th class',
            placeholder: 'Country',
            commandInputPlaceholder: 'Search Country...',
            commandEmptyText: 'No Countries Found'
        },
        state: {
            name: 'location.state',
            label: 'State',
            tooltip: 'Enter the state of your school in which you passed 12th class',
            placeholder: 'State',
            commandInputPlaceholder: 'Search State...',
            commandEmptyText: 'No States Found'
        },
        city: {
            name: 'location.city',
            label: 'City',
            tooltip: 'Enter the city of your school in which you passed 12th class',
            placeholder: 'City',
            commandInputPlaceholder: 'Search City...',
            commandEmptyText: 'No Cities Found'
        },
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

} = {

}

const academicQualificationConstants = {
    class10: class10Constants,
    class12: class12Constants,
}

export default academicQualificationConstants;
export {fieldNamePrefix, class10FieldNamePrefix, class12FieldNamePrefix, class10Constants, class12Constants}
