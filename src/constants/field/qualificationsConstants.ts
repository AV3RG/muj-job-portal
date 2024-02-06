import FormFieldConstants from "@/components/types/constants/FormFieldConstants";

const fieldNamePrefix = 'qualificationInfo';

const qualificationsConstants: {
    gateYear: FormFieldConstants,
    gateScore: FormFieldConstants,
    ugcNetYear: FormFieldConstants,
    ugcNetScore: FormFieldConstants,
    ugcJrfYear: FormFieldConstants,
    ugcJrfScore: FormFieldConstants,
    urcCsirYear: FormFieldConstants,
    urcCsirScore: FormFieldConstants,
    icmrYear: FormFieldConstants,
    icmrScore: FormFieldConstants,
    icarYear: FormFieldConstants,
    icarScore: FormFieldConstants,
} = {
    gateYear: {
        name: 'gateYear',
        label: 'GATE Year',
        tooltip: 'Enter your GATE year',
        placeholder: 'GATE Year',
    },
    gateScore: {
        name: 'gateScore',
        label: 'GATE Score',
        tooltip: 'Enter your GATE score',
        placeholder: 'GATE Score',
    },
    ugcNetYear: {
        name: 'ugcNetYear',
        label: 'UGC NET Year',
        tooltip: 'Enter your UGC NET year',
        placeholder: 'UGC NET Year',
    },
    ugcNetScore: {
        name: 'ugcNetScore',
        label: 'UGC NET Score',
        tooltip: 'Enter your UGC NET score',
        placeholder: 'UGC NET Score',
    },
    ugcJrfYear: {
        name: 'ugcJrfYear',
        label: 'UGC JRF Year',
        tooltip: 'Enter your UGC JRF year',
        placeholder: 'UGC JRF Year',
    },
    ugcJrfScore: {
        name: 'ugcJrfScore',
        label: 'UGC JRF Score',
        tooltip: 'Enter your UGC JRF score',
        placeholder: 'UGC JRF Score',
    },
    urcCsirYear: {
        name: 'urcCsirYear',
        label: 'URC CSIR Year',
        tooltip: 'Enter your URC CSIR year',
        placeholder: 'URC CSIR Year',
    },
    urcCsirScore: {
        name: 'urcCsirScore',
        label: 'URC CSIR Score',
        tooltip: 'Enter your URC CSIR score',
        placeholder: 'URC CSIR Score',
    },
    icmrYear: {
        name: 'icmrYear',
        label: 'ICMR Year',
        tooltip: 'Enter your ICMR year',
        placeholder: 'ICMR Year',
    },
    icmrScore: {
        name: 'icmrScore',
        label: 'ICMR Score',
        tooltip: 'Enter your ICMR score',
        placeholder: 'ICMR Score',
    },
    icarYear: {
        name: 'icarYear',
        label: 'ICAR Year',
        tooltip: 'Enter your ICAR year',
        placeholder: 'ICAR Year',
    },
    icarScore: {
        name: 'icarScore',
        label: 'ICAR Score',
        tooltip: 'Enter your ICAR score',
        placeholder: 'ICAR Score',
    },
}

export default qualificationsConstants;
export {fieldNamePrefix}