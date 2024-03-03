import FormFieldConstants from "@/components/types/constants/FormFieldConstants";

const fieldNamePrefix = "fellowship";

const fellowshipConstants: {
    details: FormFieldConstants,
    year: FormFieldConstants,
    amountPerAnnumINR: FormFieldConstants,
    status: FormFieldConstants,
} = {
    details: {
        name: "details",
        label: "Details",
        tooltip: "Enter the details of the fellowship",
        placeholder: "Details"
    },
    year: {
        name: "year",
        label: "Year",
        tooltip: "Enter the year of the fellowship",
        placeholder: "Year"
    },
    amountPerAnnumINR: {
        name: "amountPerAnnumINR",
        label: "Amount Per Annum (INR)",
        tooltip: "Enter the amount per annum in INR",
        placeholder: "Amount Per Annum (INR)"
    },
    status: {
        name: "status",
        label: "Status",
        tooltip: "Enter the status of the fellowship",
        placeholder: "Status"
    }
}

export default fellowshipConstants;
export {fieldNamePrefix}