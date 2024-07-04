import * as zod from 'zod';
import natureOfJob from '@/constants/nature_of_job.json';
import typeOfJob from '@/constants/type_of_job.json';
import {zodLocation} from "@/zod/extensions/functions";

export default zod.object({
    academic: zod.object({
        natureOfJob: zod.string().fromOptions(natureOfJob),
        location: zodLocation(),
        university: zod.string().nonEmpty(),
        college: zod.string().nonEmpty(),
        position: zod.string().nonEmpty(),
        domain: zod.string().nonEmpty(),
        from: zod.string().nonEmpty().datetime(),
        to: zod.string().nonEmpty().datetime(),
    }).array(),
    nonAcademic: zod.object({
        typeOfJob: zod.string().nonEmpty().fromOptions(typeOfJob),
        natureOfJob: zod.string().fromOptions(natureOfJob),
        location: zodLocation(),
        organization: zod.string().nonEmpty(),
        designation: zod.string().nonEmpty(),
        department: zod.string().nonEmpty(),
        from: zod.string().nonEmpty().datetime(),
        to: zod.string().nonEmpty().datetime(),
    }).array(),
})