import * as zod from 'zod';
import genders from "@/constants/genders.json"
import religions from "@/constants/religions.json"
import maritalStatus from "@/constants/marital_status.json"

export default zod.object({
    firstName: zod.string().nonEmpty().onlyChars(),
    middleName: zod.string().nonEmpty().onlyCharsWithSpace(),
    lastName: zod.string().nonEmpty().onlyCharsWithSpace(),
    dob: zod.string().nonEmpty().datetime(),
    gender: zod.string().nonEmpty().fromOptions(genders),
    email: zod.string().nonEmpty().email(),
    currentResidence: zod.object({
        country: zod.string().nonEmpty().optional(),
        state: zod.string().nonEmpty().optional(),
        city: zod.string().nonEmpty().optional(),
        address: zod.string().nonEmpty().optional(),
    }),
    permanentResidence: zod.object({
        country: zod.string().nonEmpty(),
        state: zod.string().nonEmpty(),
        city: zod.string().nonEmpty(),
        address: zod.string().nonEmpty(),
    }),
    religion: zod.string().nonEmpty().fromOptions(religions),
    maritalStatus: zod.string().nonEmpty().fromOptions(maritalStatus),
    aadhaarCard: zod.string().nonEmpty().length(12).onlyDigits(),
    panCard: zod.string().nonEmpty().length(10).onlyAlphaNumeric(),
})