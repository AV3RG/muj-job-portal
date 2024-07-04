import * as zod from 'zod';
import {zodYear} from "@/zod/extensions/functions";

export default zod.object({
    awards: zod.string().nonEmpty(),
    institute: zod.string().nonEmpty(),
    year: zodYear(),
}).array()