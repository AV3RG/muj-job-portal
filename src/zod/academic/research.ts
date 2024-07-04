import * as zod from 'zod';
import {zodYear} from "@/zod/extensions/functions";
import patentStatus from "@/constants/patent_status.json";

function publication() {
    return zod.object({
        total: zod.number().min(0),
        ugcCareList: zod.number().min(0),
        sci: zod.number().min(0),
        webOfScience: zod.number().min(0),
        googleScholar: zod.number().min(0),
        scopus: zod.number().min(0),
    })
}

function project() {
    return zod.object({
        noOfProjects: zod.number().min(0),
        amount: zod.number().min(0),
    })
}

function conferenceRegion() {
    return zod.object({
        total: zod.number().min(0),
        national: zod.number().min(0),
        international: zod.number().min(0),
    })
}

function conference() {
    return zod.object({
        presentedAtConferences: conferenceRegion(),
        attendedConferences: conferenceRegion(),
        organizedConferences: conferenceRegion(),
        totalConferences: zod.number().min(0),
    })
}

function guidance() {
    return zod.object({
        independentMPhil: zod.number().min(0),
        independentPhD: zod.number().min(0),
        coSupervisedMPhil: zod.number().min(0),
        coSupervisedPhD: zod.number().min(0),
    })
}

function patent() {
    return zod.object({
        details: zod.string().nonEmpty(),
        year: zodYear(),
        status: zod.string().fromOptions(patentStatus),
    })
}

function consultancy() {
    return zod.object({
        completedNo: zod.number().min(0),
        completedAmount: zod.number().min(0),
        ongoingNo: zod.number().min(0),
        ongoingAmount: zod.number().min(0),
    })
}

export default zod.object({
    orcId: zod.string().nonEmpty(),
    hIndexScopus: zod.string().nonEmpty(),
    hIndexWebOfScience: zod.string().nonEmpty(),
    cumulativeImpactFactor: zod.string().nonEmpty(),
    researchPublicationsTotal: publication(),
    researchPublicationsLast3years: publication(),
    citationsLast3years: zod.number().min(0),
    fundedProjectsCompletedLast3Years: project(),
    fundedProjectsOngoing: project(),
    conference: conference(),
    completedGuidance: guidance(),
    underSupervisionGuidance: guidance(),
    patents: patent().array(),
    consultancy: consultancy(),
})
