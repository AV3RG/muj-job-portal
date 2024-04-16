import * as zod from 'zod';
import years from "@/constants/years.json"
import fellowShipStatuses from "@/constants/fellowship_statuses.json"

export default zod.object({
    details: zod.string().nonEmpty(),
    year: zod.string().nonEmpty().fromOptions(years),
    status: zod.string().nonEmpty().fromOptions(fellowShipStatuses),
    amountPerAnnumINR: zod.number(),
}).array()