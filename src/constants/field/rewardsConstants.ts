import FormFieldConstants from "@/components/types/constants/FormFieldConstants";

const fieldNamePrefix = 'rewards';

const rewardsConstants: {
    ifYes: FormFieldConstants,
    awards: FormFieldConstants,
    institute: FormFieldConstants,
    year: FormFieldConstants,
} = {
    ifYes: {
        name: 'ifYes',
        label: 'If Yes',
        tooltip: 'Enter if the reward is received',
        placeholder: 'If Yes'
    },
    awards: {
        name: 'awards',
        label: 'Awards',
        tooltip: 'Enter the awards',
        placeholder: 'Awards'
    },
    institute: {
        name: 'institute',
        label: 'Institute',
        tooltip: 'Enter the institute',
        placeholder: 'Institute'
    },
    year: {
        name: 'year',
        label: 'Year',
        tooltip: 'Enter the year',
        placeholder: 'Year'
    }
}

export default rewardsConstants;
export {fieldNamePrefix}