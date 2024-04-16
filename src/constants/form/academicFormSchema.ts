import * as zod from "zod"
import applicationInfoZodSchema from "@/zod/academic/applicationInfo"
import personalInfoZodSchema from "@/zod/academic/personalInfo"
import qualificationInfoZodSchema from "@/zod/academic/qualificationInfo"

export default zod.object({
    applicationInfo: applicationInfoZodSchema,
    personalInfo: personalInfoZodSchema,
    qualificationInfo: qualificationInfoZodSchema,
});