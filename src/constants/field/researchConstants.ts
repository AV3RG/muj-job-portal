import FormFieldConstants from "@/components/types/constants/FormFieldConstants";

const fieldNamePrefix = "research";

type PublicationConstants = {
    total: FormFieldConstants,
    ugcCareList: FormFieldConstants,
    sci: FormFieldConstants,
    webOfScience: FormFieldConstants,
    googleScholar: FormFieldConstants,
    scopus: FormFieldConstants,
}

type ProjectConstants = {
    noOfProjects: FormFieldConstants,
    amount: FormFieldConstants,
}

type ConferenceConstants = {
    total: FormFieldConstants,
    national: FormFieldConstants,
    international: FormFieldConstants,
}

type GuidanceConstants = {
    independentMPhil: FormFieldConstants,
    independentPhD: FormFieldConstants,
    coSupervisedMPhil: FormFieldConstants,
    coSupervisedPhD: FormFieldConstants,
}

type PatentConstants = {
    details: FormFieldConstants,
    year: FormFieldConstants,
    status: FormFieldConstants,
}

type ConsultancyConstants = {
    completedNo: FormFieldConstants,
    completedAmount: FormFieldConstants,
    ongoingNo: FormFieldConstants,
    ongoingAmount: FormFieldConstants,
}

const researchConstants: {
    orcId: FormFieldConstants,
    hIndexScopus: FormFieldConstants,
    hIndexWebOfScience: FormFieldConstants,
    cumulativeImpactFactor: FormFieldConstants,
    researchPublicationsTotal: PublicationConstants,
    researchPublicationsLast3years: PublicationConstants,
    citationsLast3Years: FormFieldConstants,
    fundedProjectsCompletedLast3Years: ProjectConstants,
    fundedProjectsOngoing: ProjectConstants,
    presentedAtConferences: ConferenceConstants,
    attendedConferences: ConferenceConstants,
    organizedConferences: ConferenceConstants,
    totalConferencePapers: FormFieldConstants,
    completedGuidance: GuidanceConstants,
    underSupervisionGuidance: GuidanceConstants,
    patents: PatentConstants,
    consultancy: ConsultancyConstants,
} = {
    orcId: {
        name: "orcId",
        label: "ORCID ID",
        placeholder: "ORCID ID",
        tooltip: "ORCID ID",
    },
    hIndexScopus: {
        name: "hIndexScopus",
        label: "h-index (Scopus)",
        placeholder: "h-index (Scopus)",
        tooltip: "h-index (Scopus)",
    },
    hIndexWebOfScience: {
        name: "hIndexWebOfScience",
        label: "h-index (Web of Science)",
        placeholder: "h-index (Web of Science)",
        tooltip: "h-index (Web of Science)",
    },
    cumulativeImpactFactor: {
        name: "cumulativeImpactFactor",
        label: "Cumulative Impact Factor",
        placeholder: "Cumulative Impact Factor",
        tooltip: "Cumulative Impact Factor",
    },
    researchPublicationsTotal: {
        total: {
            name: "researchPublicationsTotal",
            label: "Total",
            placeholder: "Total",
            tooltip: "Total",
        },
        ugcCareList: {
            name: "researchPublicationsUgcCareList",
            label: "UGC Care List",
            placeholder: "UGC Care List",
            tooltip: "UGC Care List",
        },
        sci: {
            name: "researchPublicationsSci",
            label: "SCI",
            placeholder: "SCI",
            tooltip: "SCI",
        },
        webOfScience: {
            name: "researchPublicationsWebOfScience",
            label: "Web of Science",
            placeholder: "Web of Science",
            tooltip: "Web of Science",
        },
        googleScholar: {
            name: "researchPublicationsGoogleScholar",
            label: "Google Scholar",
            placeholder: "Google Scholar",
            tooltip: "Google Scholar",
        },
        scopus: {
            name: "researchPublicationsScopus",
            label: "Scopus",
            placeholder: "Scopus",
            tooltip: "Scopus",
        },
    },
    researchPublicationsLast3years: {
        total: {
            name: "researchPublicationsLast3years",
            label: "Total",
            placeholder: "Total",
            tooltip: "Total",
        },
        ugcCareList: {
            name: "researchPublicationsLast3yearsUgcCareList",
            label: "UGC Care List",
            placeholder: "UGC Care List",
            tooltip: "UGC Care List",
        },
        sci: {
            name: "researchPublicationsLast3yearsSci",
            label: "SCI",
            placeholder: "SCI",
            tooltip: "SCI",
        },
        webOfScience: {
            name: "researchPublicationsLast3yearsWebOfScience",
            label: "Web of Science",
            placeholder: "Web of Science",
            tooltip: "Web of Science",
        },
        googleScholar: {
            name: "researchPublicationsLast3yearsGoogleScholar",
            label: "Google Scholar",
            placeholder: "Google Scholar",
            tooltip: "Google Scholar",
        },
        scopus: {
            name: "researchPublicationsLast3yearsScopus",
            label: "Scopus",
            placeholder: "Scopus",
            tooltip: "Scopus",
        },
    },
    citationsLast3Years: {
        name: "citationsLast3Years",
        label: "Citations (Last 3 Years)",
        placeholder: "Citations (Last 3 Years)",
        tooltip: "Citations (Last 3 Years)",
    },
    fundedProjectsCompletedLast3Years: {
        noOfProjects: {
            name: "fundedProjectsCompletedLast3YearsNoOfProjects",
            label: "No of Projects",
            placeholder: "No of Projects",
            tooltip: "No of Projects",
        },
        amount: {
            name: "fundedProjectsCompletedLast3YearsAmount",
            label: "Amount",
            placeholder: "Amount",
            tooltip: "Amount",
        },
    },
    fundedProjectsOngoing: {
        noOfProjects: {
            name: "fundedProjectsOngoingNoOfProjects",
            label: "No of Projects",
            placeholder: "No of Projects",
            tooltip: "No of Projects",
        },
        amount: {
            name: "fundedProjectsOngoingAmount",
            label: "Amount",
            placeholder: "Amount",
            tooltip: "Amount",
        },
    },
    presentedAtConferences: {
        total: {
            name: "presentedAtConferencesTotal",
            label: "Total",
            placeholder: "Total",
            tooltip: "Total",
        },
        national: {
            name: "presentedAtConferencesNational",
            label: "National",
            placeholder: "National",
            tooltip: "National",
        },
        international: {
            name: "presentedAtConferencesInternational",
            label: "International",
            placeholder: "International",
            tooltip: "International",
        },
    },
    attendedConferences: {
        total: {
            name: "attendedConferencesTotal",
            label: "Total",
            placeholder: "Total",
            tooltip: "Total",
        },
        national: {
            name: "attendedConferencesNational",
            label: "National",
            placeholder: "National",
            tooltip: "National",
        },
        international: {
            name: "attendedConferencesInternational",
            label: "International",
            placeholder: "International",
            tooltip: "International",
        },
    },
    organizedConferences: {
        total: {
            name: "organizedConferencesTotal",
            label: "Total",
            placeholder: "Total",
            tooltip: "Total",
        },
        national: {
            name: "organizedConferencesNational",
            label: "National",
            placeholder: "National",
            tooltip: "National",
        },
        international: {
            name: "organizedConferencesInternational",
            label: "International",
            placeholder: "International",
            tooltip: "International",
        },
    },
    totalConferencePapers: {
        name: "totalConferencePapers",
        label: "Total Conference Papers",
        placeholder: "Total Conference Papers",
        tooltip: "Total Conference Papers",
    },
    completedGuidance: {
        independentMPhil: {
            name: "completedGuidanceIndependentMPhil",
            label: "Independent MPhil",
            placeholder: "Independent MPhil",
            tooltip: "Independent MPhil",
        },
        independentPhD: {
            name: "completedGuidanceIndependentPhD",
            label: "Independent PhD",
            placeholder: "Independent PhD",
            tooltip: "Independent PhD",
        },
        coSupervisedMPhil: {
            name: "completedGuidanceCoSupervisedMPhil",
            label: "Co-Supervised MPhil",
            placeholder: "Co-Supervised MPhil",
            tooltip: "Co-Supervised MPhil",
        },
        coSupervisedPhD: {
            name: "completedGuidanceCoSupervisedPhD",
            label: "Co-Supervised PhD",
            placeholder: "Co-Supervised PhD",
            tooltip: "Co-Supervised PhD",
        },
    },
    underSupervisionGuidance: {
        independentMPhil: {
            name: "underSupervisionGuidanceIndependentMPhil",
            label: "Independent MPhil",
            placeholder: "Independent MPhil",
            tooltip: "Independent MPhil",
        },
        independentPhD: {
            name: "underSupervisionGuidanceIndependentPhD",
            label: "Independent PhD",
            placeholder: "Independent PhD",
            tooltip: "Independent PhD",
        },
        coSupervisedMPhil: {
            name: "underSupervisionGuidanceCoSupervisedMPhil",
            label: "Co-Supervised MPhil",
            placeholder: "Co-Supervised MPhil",
            tooltip: "Co-Supervised MPhil",
        },
        coSupervisedPhD: {
            name: "underSupervisionGuidanceCoSupervisedPhD",
            label: "Co-Supervised PhD",
            placeholder: "Co-Supervised PhD",
            tooltip: "Co-Supervised PhD",
        },
    },
    patents: {
        details: {
            name: "patentsDetails",
            label: "Details",
            placeholder: "Details",
            tooltip: "Details",
        },
        year: {
            name: "patentsYear",
            label: "Year",
            placeholder: "Year",
            tooltip: "Year",
        },
        status: {
            name: "patentsStatus",
            label: "Status",
            placeholder: "Status",
            tooltip: "Status",
        },
    },
    consultancy: {
        completedNo: {
            name: "consultancyCompletedNo",
            label: "Completed No",
            placeholder: "Completed No",
            tooltip: "Completed No",
        },
        completedAmount: {
            name: "consultancyCompletedAmount",
            label: "Completed Amount",
            placeholder: "Completed Amount",
            tooltip: "Completed Amount",
        },
        ongoingNo: {
            name: "consultancyOngoingNo",
            label: "Ongoing No",
            placeholder: "Ongoing No",
            tooltip: "Ongoing No",
        },
        ongoingAmount: {
            name: "consultancyOngoingAmount",
            label: "Ongoing Amount",
            placeholder: "Ongoing Amount",
            tooltip: "Ongoing Amount",
        },
    },
}

export default researchConstants
export { fieldNamePrefix }