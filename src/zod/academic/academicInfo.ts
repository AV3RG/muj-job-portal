import * as zod from 'zod';
import {zodAggregate, zodDivision, zodEducationMode, zodLocation, zodStream, zodYear} from "@/zod/extensions/functions";
import academicStatus from "@/constants/academic_status.json"

export default zod.array(zod.object({
    class10: zod.object({
        location: zodLocation(),
        educationMode: zodEducationMode(),
        school: zod.string().nonEmpty(),
        board: zod.string().nonEmpty(),
        passingYear: zodYear(),
        division: zodDivision(),
        aggregate: zodAggregate(),

    }),
    class12: zod.object({
        location: zodLocation(),
        educationMode: zodEducationMode(),
        school: zod.string().nonEmpty(),
        board: zod.string().nonEmpty(),
        stream: zodStream(),
        passingYear: zodYear(),
        division: zodDivision(),
        aggregate: zodAggregate(),
    }),
    graduation: zod.object({
        location: zodLocation(),
        educationMode: zodEducationMode(),
        university: zod.string().nonEmpty(),
        college: zod.string().nonEmpty(),
        graduationYear: zodYear(),
        courseName: zod.string().nonEmpty(),
        specialization: zod.string().nonEmpty(),
        division: zodDivision(),
        aggregate: zodAggregate(),
    }).array(),
    postGraduation: zod.object({
        location: zodLocation(),
        educationMode: zodEducationMode(),
        university: zod.string().nonEmpty(),
        college: zod.string().nonEmpty(),
        graduationYear: zodYear(),
        courseName: zod.string().nonEmpty(),
        specialization: zod.string().nonEmpty(),
        division: zodDivision(),
        aggregate: zodAggregate(),
    }).array(),
    phd: zod.object({
        status: zod.string().fromOptions(academicStatus),
        location: zodLocation(),
        educationMode: zodEducationMode(),
        university: zod.string().nonEmpty(),
        college: zod.string().nonEmpty(),
        enrollmentYear: zodYear(),
        completionYear: zodYear(),
        specialization: zod.string().nonEmpty(),
        teachingExperience: zod.string().fromOptions(["Yes", "No"]),
    }).array(),
    mPhil: zod.object({
        location: zodLocation(),
        educationMode: zodEducationMode(),
        university: zod.string().nonEmpty(),
        college: zod.string().nonEmpty(),
        completionYear: zodYear(),
        courseName: zod.string().nonEmpty(),
        specialization: zod.string().nonEmpty(),
        division: zodDivision(),
        aggregate: zodAggregate(),
    })

}))