import FormFieldConstants from "@/components/types/constants/FormFieldConstants";

const fieldNamePrefix = 'otherInfo';

const otherInfoConstants: {
    knownMuj: FormFieldConstants,
    knownMujDetails: {
        name: FormFieldConstants,
        designation: FormFieldConstants,
        department: FormFieldConstants,
        relation: FormFieldConstants,
    },
    interviewedInMuj: FormFieldConstants,
    interviewedInMujDetails: {
        date: FormFieldConstants,
        designation: FormFieldConstants,
        department: FormFieldConstants,
        result: FormFieldConstants,
        offerToJoin: FormFieldConstants,
        joined: FormFieldConstants,
        notJoinedReason: FormFieldConstants,
    },
    convicted: FormFieldConstants,
    convictedDetails: FormFieldConstants,
    pendingCase: FormFieldConstants,
    pendingCaseDetails: FormFieldConstants,
} = {
    knownMuj: {
        name: "knownMuj",
        label: "Have you ever been associated with Manipal University Jaipur?",
        tooltip: "If yes, please provide details",
        placeholder: "Yes/No",
    },
    knownMujDetails: {
        name: {
            name: "name",
            label: "Name",
            placeholder: "Enter name",
            tooltip: "Enter your name",
        },
        designation: {
            name: "designation",
            label: "Designation",
            placeholder: "Enter designation",
            tooltip: "Enter your designation",
        },
        department: {
            name: "department",
            label: "Department",
            placeholder: "Enter department",
            tooltip: "Enter your department",
        },
        relation: {
            name: "relation",
            label: "Relation",
            placeholder: "Enter relation",
            tooltip: "Enter your relation",
        },
    },
    interviewedInMuj: {
        name: "interviewedInMuj",
        label: "Have you ever been interviewed in Manipal University Jaipur?",
        tooltip: "If yes, please provide details",
        placeholder: "Yes/No",
    },
    interviewedInMujDetails: {
        date: {
            name: "date",
            label: "Date",
            placeholder: "Enter date",
            tooltip: "Enter date of interview",
        },
        designation: {
            name: "designation",
            label: "Designation",
            placeholder: "Enter designation",
            tooltip: "Enter your designation",
        },
        department: {
            name: "department",
            label: "Department",
            placeholder: "Enter department",
            tooltip: "Enter your department",
        },
        result: {
            name: "result",
            label: "Result",
            placeholder: "Enter result",
            tooltip: "Enter result of interview",
        },
        offerToJoin: {
            name: "offerToJoin",
            label: "Offer to join",
            placeholder: "Enter offer to join",
            tooltip: "Enter offer to join",
        },
        joined: {
            name: "joined",
            label: "Joined",
            placeholder: "Enter joined",
            tooltip: "Enter joined",
        },
        notJoinedReason: {
            name: "notJoinedReason",
            label: "Reason for not joining",
            placeholder: "Enter reason for not joining",
            tooltip: "Enter reason for not joining",
        },
    },
    convicted: {
        name: "convicted",
        label: "Have you ever been convicted by a court of law?",
        tooltip: "If yes, please provide details",
        placeholder: "Yes/No",
    },
    convictedDetails: {
        name: "convictedDetails",
        label: "Details",
        placeholder: "Enter details",
        tooltip: "Enter details",
    },
    pendingCase: {
        name: "pendingCase",
        label: "Are there any criminal cases pending against you in any court of law?",
        tooltip: "If yes, please provide details",
        placeholder: "Yes/No",
    },
    pendingCaseDetails: {
        name: "pendingCaseDetails",
        label: "Details",
        placeholder: "Enter details",
        tooltip: "Enter details",
    },
}

export { fieldNamePrefix };
export default otherInfoConstants;