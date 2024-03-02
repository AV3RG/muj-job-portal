import FormFieldConstants from "@/components/types/constants/FormFieldConstants"
import FormLocationConstants from "@/components/types/constants/FormLocationConstants";

const fieldNamePrefix = 'academicInfo';
const class10FieldNamePrefix = `${fieldNamePrefix}.class10`;
const class12FieldNamePrefix = `${fieldNamePrefix}.class12`;
const graduationFieldNamePrefix = `${fieldNamePrefix}.graduation`;
const postGraduationFieldNamePrefix = `${fieldNamePrefix}.postGraduation`;
const phdFieldNamePrefix = `${fieldNamePrefix}.phd`;
const mPhilFieldNamePrefix = `${fieldNamePrefix}.mPhil`;

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

const postGraduationConstants: {
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
            tooltip: 'Enter the country of your college in which you passed post graduation',
            placeholder: 'Country',
            commandInputPlaceholder: 'Search Country...',
            commandEmptyText: 'No Countries Found'
        },
        state: {
            name: 'state',
            label: 'State',
            tooltip: 'Enter the state of your college in which you passed post graduation',
            placeholder: 'State',
            commandInputPlaceholder: 'Search State...',
            commandEmptyText: 'No States Found'
        },
        city: {
            name: 'city',
            label: 'City',
            tooltip: 'Enter the city of your college in which you passed post graduation',
            placeholder: 'City',
            commandInputPlaceholder: 'Search City...',
            commandEmptyText: 'No Cities Found'
        },
        prefix: 'location',
    },
    educationMode: {
        name: 'educationMode',
        label: 'Education Mode',
        tooltip: 'Choose the mode of education in which you passed post graduation',
        placeholder: 'Choose...',
    },
    university: {
        name: 'university',
        label: 'University',
        tooltip: 'Enter the name of your university in which you passed post graduation',
        placeholder: 'University Name',
    },
    college: {
        name: 'college',
        label: 'College',
        tooltip: 'Enter the name of your college in which you passed post graduation',
        placeholder: 'College Name',
    },
    graduationYear: {
        name: 'graduationYear',
        label: 'Post Graduation Year',
        tooltip: 'Choose post graduation passing year',
        placeholder: 'Choose...',
    },
    courseName: {
        name: 'courseName',
        label: 'Course Name',
        tooltip: 'Enter the name of your post graduation course',
        placeholder: 'Course Name',
    },
    specialization: {
        name: 'specialization',
        label: 'Specialization',
        tooltip: 'Enter the specialization of your post graduation',
        placeholder: 'Specialization',
    },
    division: {
        name: 'division',
        label: 'Division',
        tooltip: 'Enter the division of your post graduation result. Leave empty if not applicable.',
        placeholder: 'Choose...',
    },
    aggregate: {
        name: 'Aggregate',
        label: 'Aggregate Percentage',
        tooltip: 'Enter your Aggregate Percentage in post graduation. Leave empty if not applicable.',
        placeholder: 'Aggregate Percentage',
    },
}

const phdConstants: {
    yesCheckbox: FormFieldConstants,
    status: FormFieldConstants,
    location: FormLocationConstants,
    educationMode: FormFieldConstants,
    university: FormFieldConstants,
    college: FormFieldConstants,
    enrollmentYear: FormFieldConstants,
    completionYear: FormFieldConstants,
    specialization: FormFieldConstants,
    teachingExperience: FormFieldConstants,
} = {
    yesCheckbox: {
        name: 'yesCheckbox',
        label: 'Phd',
        tooltip: 'Check if you have passed phd',
        placeholder: 'Phd',
    },
    status: {
        name: 'status',
        label: 'Status',
        tooltip: 'Choose the status of your phd',
        placeholder: 'Choose...',
    },
    location: {
        country: {
            name: 'country',
            label: 'Country',
            tooltip: 'Enter the country of your college in which you passed phd',
            placeholder: 'Country',
            commandInputPlaceholder: 'Search Country...',
            commandEmptyText: 'No Countries Found'
        },
        state: {
            name: 'state',
            label: 'State',
            tooltip: 'Enter the state of your college in which you passed phd',
            placeholder: 'State',
            commandInputPlaceholder: 'Search State...',
            commandEmptyText: 'No States Found'
        },
        city: {
            name: 'city',
            label: 'City',
            tooltip: 'Enter the city of your college in which you passed phd',
            placeholder: 'City',
            commandInputPlaceholder: 'Search City...',
            commandEmptyText: 'No Cities Found'
        },
        prefix: 'location',
    },
    educationMode: {
        name: 'educationMode',
        label: 'Education Mode',
        tooltip: 'Choose the mode of education in which you passed phd',
        placeholder: 'Choose...',
    },
    university: {
        name: 'university',
        label: 'University',
        tooltip: 'Enter the name of your university in which you passed phd',
        placeholder: 'University Name',
    },
    college: {
        name: 'college',
        label: 'College',
        tooltip: 'Enter the name of your college in which you passed phd',
        placeholder: 'College Name',
    },
    enrollmentYear: {
        name: 'enrollmentYear',
        label: 'Phd Year',
        tooltip: 'Choose phd enrollment year',
        placeholder: 'Choose...',
    },
    completionYear: {
        name: 'completionYear',
        label: 'Phd Year',
        tooltip: 'Choose phd completion year',
        placeholder: 'Choose...',
    },
    specialization: {
        name: 'specialization',
        label: 'Specialization',
        tooltip: 'Enter the specialization of your phd',
        placeholder: 'Specialization',
    },
    teachingExperience: {
        name: 'teachingExperience',
        label: 'Teaching Experience',
        tooltip: 'Enter your teaching experience in years. Leave empty if not applicable.',
        placeholder: 'Teaching Experience',
    },
}

const mPhilConstants: {
    yesCheckbox: FormFieldConstants,
    location: FormLocationConstants,
    educationMode: FormFieldConstants,
    university: FormFieldConstants,
    college: FormFieldConstants,
    completionYear: FormFieldConstants,
    courseName: FormFieldConstants,
    specialization: FormFieldConstants,
    division: FormFieldConstants,
    aggregate: FormFieldConstants,
} = {
    yesCheckbox: {
        name: 'yesCheckbox',
        label: 'MPhil',
        tooltip: 'Check if you have passed mPhil',
        placeholder: 'MPhil',
    },
    location: {
        country: {
            name: 'country',
            label: 'Country',
            tooltip: 'Enter the country of your college in which you passed mPhil',
            placeholder: 'Country',
            commandInputPlaceholder: 'Search Country...',
            commandEmptyText: 'No Countries Found'
        },
        state: {
            name: 'state',
            label: 'State',
            tooltip: 'Enter the state of your college in which you passed mPhil',
            placeholder: 'State',
            commandInputPlaceholder: 'Search State...',
            commandEmptyText: 'No States Found'
        },
        city: {
            name: 'city',
            label: 'City',
            tooltip: 'Enter the city of your college in which you passed mPhil',
            placeholder: 'City',
            commandInputPlaceholder: 'Search City...',
            commandEmptyText: 'No Cities Found'
        },
        prefix: 'location',
    },
    educationMode: {
        name: 'educationMode',
        label: 'Education Mode',
        tooltip: 'Choose the mode of education in which you passed mPhil',
        placeholder: 'Choose...',
    },
    university: {
        name: 'university',
        label: 'University',
        tooltip: 'Enter the name of your university in which you passed mPhil',
        placeholder: 'University Name',
    },
    college: {
        name: 'college',
        label: 'College',
        tooltip: 'Enter the name of your college in which you passed mPhil',
        placeholder: 'College Name',
    },
    completionYear: {
        name: 'completionYear',
        label: 'MPhil Year',
        tooltip: 'Choose mPhil completion year',
        placeholder: 'Choose...',
    },
    courseName: {
        name: 'courseName',
        label: 'Course Name',
        tooltip: 'Enter the name of your mPhil course',
        placeholder: 'Course Name',
    },
    specialization: {
        name: 'specialization',
        label: 'Specialization',
        tooltip: 'Enter the specialization of your mPhil',
        placeholder: 'Specialization',
    },
    division: {
        name: 'division',
        label: 'Division',
        tooltip: 'Enter the division of your mPhil result. Leave empty if not applicable.',
        placeholder: 'Choose...',
    },
    aggregate: {
        name: 'Aggregate',
        label: 'Aggregate Percentage',
        tooltip: 'Enter your Aggregate Percentage in mPhil. Leave empty if not applicable.',
        placeholder: 'Aggregate Percentage',
    },
}

const academicQualificationConstants = {
    class10: class10Constants,
    class12: class12Constants,
    graduation: graduationConstants,
    postGraduation: postGraduationConstants,
    phd: phdConstants,
    mPhil: mPhilConstants,
}

export default academicQualificationConstants;
export {
    fieldNamePrefix,
    class10FieldNamePrefix,
    class12FieldNamePrefix,
    graduationFieldNamePrefix,
    postGraduationFieldNamePrefix,
    phdFieldNamePrefix,
    mPhilFieldNamePrefix,
    class10Constants,
    class12Constants,
    graduationConstants,
    postGraduationConstants,
    phdConstants,
    mPhilConstants
};
