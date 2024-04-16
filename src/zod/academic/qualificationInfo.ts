import * as zod from 'zod';
import years from "@/constants/years.json"

export default zod.object({
    gateYear: zod.string().nonEmpty().fromOptions(years),
    gateScore: zod.number(),
    icarYear: zod.string().nonEmpty().fromOptions(years),
    icarScore: zod.number(),
    icmrYear: zod.string().nonEmpty().fromOptions(years),
    icmrScore: zod.number(),
    ugcJrfYear: zod.string().nonEmpty().fromOptions(years),
    ugcJrfScore: zod.number(),
    ugcNetYear: zod.string().nonEmpty().fromOptions(years),
    ugcNetScore: zod.number(),
    ugcCsirYear: zod.string().nonEmpty().fromOptions(years),
    ugcCsirScore: zod.number(),
})