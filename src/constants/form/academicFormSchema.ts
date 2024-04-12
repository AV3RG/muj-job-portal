import * as zod from "zod"
import applicationInfoZodSchema from "@/zod/academic/applicationInfo"

export default zod.object({
    applicationInfo: applicationInfoZodSchema
})