import * as zod from 'zod';
import genders from "@/constants/genders.json"
import religions from "@/constants/religions.json"
import maritalStatus from "@/constants/marital_status.json"
import {zodLocation} from "@/zod/extensions/functions";

export default zod.object({
    firstName: zod.string().nonEmpty().onlyChars(),
    middleName: zod.string().nonEmpty().onlyCharsWithSpace(),
    lastName: zod.string().nonEmpty().onlyCharsWithSpace(),
    dob: zod.string().nonEmpty().datetime(),
    gender: zod.string().nonEmpty().fromOptions(genders),
    email: zod.string().nonEmpty().email(),
    currentResidence: zodLocation(true, true),
    sameAddress: zod.boolean(),
    permanentResidence: zodLocation(true, false),
    religion: zod.string().nonEmpty().fromOptions(religions),
    maritalStatus: zod.string().nonEmpty().fromOptions(maritalStatus),
    aadhaarCard: zod.string().nonEmpty().length(12).onlyDigits(),
    panCard: zod.string().nonEmpty().length(10).onlyAlphaNumeric(),
})