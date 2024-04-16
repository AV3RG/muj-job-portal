import * as zod from "zod";
import designations from "@/constants/designations.json";
import faculties from "@/constants/faculties.json";
import * as z from "zod";

const facultyOptions = Object.keys(faculties);
const departmentOptions = Object.values(faculties).flat();
const schoolOptions = Object.values(faculties).flat();


z.ZodString.prototype.nonEmpty = function(): z.ZodString {
    return this.min(1, "This field is required!");
};

z.ZodString.prototype.onlyChars = function(): z.ZodString {
    return this.regex(/^[a-zA-Z]+$/, "This field must only contain letters");
};

z.ZodString.prototype.onlyDigits = function(): z.ZodString {
    return this.regex(/^[0-9]+$/, "This field must only contain digits");
};

z.ZodString.prototype.onlyAlphaNumeric = function(): z.ZodString {
    return this.regex(/^[a-zA-Z0-9]+$/, "This field must only contain letters and digits");
};

z.ZodString.prototype.onlyAlphaNumericWithSpace = function(): z.ZodString {
    return this.regex(/^[a-zA-Z0-9 ]+$/, "This field must only contain letters, digits and spaces");
};

z.ZodString.prototype.onlyCharsWithSpace = function(): z.ZodString {
    return this.regex(/^[a-zA-Z ]+$/, "This field must only contain letters and spaces");
}

z.ZodString.prototype.fromOptions = function(options: string[]): z.ZodEffects<z.ZodString, string, string> {
    return this.refine((value) => options.includes(value), "Invalid value!");
};

export default zod.object({
    designation: zod.string().nonEmpty()
        .fromOptions(designations),
    faculty: zod.string().nonEmpty()
        .fromOptions(facultyOptions),
    department: zod.string().nonEmpty(),
    school: zod.string().nonEmpty(),
})