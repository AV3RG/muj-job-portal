import FormFieldConstants from "@/components/types/constants/FormFieldConstants";
import FormLocationConstants from "@/components/types/constants/FormLocationConstants";

const fieldNamePrefix = "experience";

const academicPrefix = "academic";
const nonAcademicPrefix = "nonAcademic";

const academic: {
    natureOfJob: FormFieldConstants,
    location: FormLocationConstants,
    university: FormFieldConstants,
    college: FormFieldConstants,
    position: FormFieldConstants,
    domain: FormFieldConstants,
    from: FormFieldConstants,
    to: FormFieldConstants,
} = {
    natureOfJob: {
        name: "natureOfJob",
        label: "Nature of Job",
        tooltip: "Enter the nature of your job",
        placeholder: "Nature of Job"
    },
    location: {
        country: {
            name: "country",
            label: "Country",
            tooltip: "Enter the country where you worked",
            placeholder: "Country",
            commandInputPlaceholder: "Search Country...",
            commandEmptyText: "No Countries Found"
        },
        state: {
            name: "state",
            label: "State",
            tooltip: "Enter the state where you worked",
            placeholder: "State",
            commandInputPlaceholder: "Search State...",
            commandEmptyText: "No States Found"
        },
        city: {
            name: "city",
            label: "City",
            tooltip: "Enter the city where you worked",
            placeholder: "City",
            commandInputPlaceholder: "Search City...",
            commandEmptyText: "No Cities Found"
        },
        prefix: "location"
    },
    university: {
        name: "university",
        label: "University",
        tooltip: "Enter the university where you worked",
        placeholder: "University"
    },
    college: {
        name: "college",
        label: "College",
        tooltip: "Enter the college where you worked",
        placeholder: "College"
    },
    position: {
        name: "position",
        label: "Position",
        tooltip: "Enter the position you held",
        placeholder: "Position"
    },
    domain: {
        name: "domain",
        label: "Domain",
        tooltip: "Enter the domain you worked in",
        placeholder: "Domain"
    },
    from: {
        name: "from",
        label: "From",
        tooltip: "Enter the date you started working",
        placeholder: "From"
    },
    to: {
        name: "to",
        label: "To",
        tooltip: "Enter the date you stopped working",
        placeholder: "To"
    }
}

const nonAcademic: {
    typeOfJob: FormFieldConstants,
    natureOfJob: FormFieldConstants,
    location: FormLocationConstants,
    organization: FormFieldConstants,
    designation: FormFieldConstants,
    department: FormFieldConstants,
    from: FormFieldConstants,
    to: FormFieldConstants,
} = {
    typeOfJob: {
        name: "typeOfJob",
        label: "Type of Job",
        tooltip: "Enter the type of your job",
        placeholder: "Type of Job"
    },
    natureOfJob: {
        name: "natureOfJob",
        label: "Nature of Job",
        tooltip: "Enter the nature of your job",
        placeholder: "Nature of Job"
    },
    location: {
        country: {
            name: "country",
            label: "Country",
            tooltip: "Enter the country where you worked",
            placeholder: "Country",
            commandInputPlaceholder: "Search Country...",
            commandEmptyText: "No Countries Found"
        },
        state: {
            name: "state",
            label: "State",
            tooltip: "Enter the state where you worked",
            placeholder: "State",
            commandInputPlaceholder: "Search State...",
            commandEmptyText: "No States Found"
        },
        city: {
            name: "city",
            label: "City",
            tooltip: "Enter the city where you worked",
            placeholder: "City",
            commandInputPlaceholder: "Search City...",
            commandEmptyText: "No Cities Found"
        },
        prefix: "location"
    },
    organization: {
        name: "organization",
        label: "Organization",
        tooltip: "Enter the organization where you worked",
        placeholder: "Organization"
    },
    designation: {
        name: "designation",
        label: "Designation",
        tooltip: "Enter the designation you held",
        placeholder: "Designation"
    },
    department: {
        name: "department",
        label: "Department",
        tooltip: "Enter the department you worked in",
        placeholder: "Department"
    },
    from: {
        name: "from",
        label: "From",
        tooltip: "Enter the date you started working",
        placeholder: "From"
    },
    to: {
        name: "to",
        label: "To",
        tooltip: "Enter the date you stopped working",
        placeholder: "To"
    }

}

const experienceConstants: {
    academic: typeof academic,
    nonAcademic: typeof nonAcademic,
} = {
    academic: academic,
    nonAcademic: nonAcademic
}


export default experienceConstants;
export {fieldNamePrefix, academicPrefix, nonAcademicPrefix, academic, nonAcademic};