import FormFieldConstants from "@/components/types/constants/FormFieldConstants";

const fieldNamePrefix = "books";

const booksConstants: {
    ifYes: FormFieldConstants,
    details: FormFieldConstants,
    isbn: FormFieldConstants,
    writtenAs: FormFieldConstants,
} = {
    ifYes: {
        name: "ifYes",
        label: "If Yes",
        tooltip: "Enter if the book is published",
        placeholder: "If Yes"
    },
    details: {
        name: "details",
        label: "Details",
        tooltip: "Enter the details of the book",
        placeholder: "Details"
    },
    isbn: {
        name: "isbn",
        label: "ISBN",
        tooltip: "Enter the ISBN of the book",
        placeholder: "ISBN"
    },
    writtenAs: {
        name: "writtenAs",
        label: "Written As",
        tooltip: "Enter the name of the author",
        placeholder: "Written As"
    }
}

export default booksConstants;
export {fieldNamePrefix}