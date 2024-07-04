import * as zod from "zod";

zod.ZodString.prototype.nonEmpty = function(): zod.ZodString {
    return this.min(1, "This field is required!");
};

zod.ZodString.prototype.onlyChars = function(): zod.ZodString {
    return this.regex(/^[a-zA-Z]+$/, "This field must only contain letters");
};

zod.ZodString.prototype.onlyDigits = function(): zod.ZodString {
    return this.regex(/^[0-9]+$/, "This field must only contain digits");
};

zod.ZodString.prototype.onlyAlphaNumeric = function(): zod.ZodString {
    return this.regex(/^[a-zA-Z0-9]+$/, "This field must only contain letters and digits");
};

zod.ZodString.prototype.onlyAlphaNumericWithSpace = function(): zod.ZodString {
    return this.regex(/^[a-zA-Z0-9 ]+$/, "This field must only contain letters, digits and spaces");
};

zod.ZodString.prototype.onlyCharsWithSpace = function(): zod.ZodString {
    return this.regex(/^[a-zA-Z ]+$/, "This field must only contain letters and spaces");
}

zod.ZodString.prototype.fromOptions = function(options: string[]): zod.ZodEffects<zod.ZodString, string, string> {
    return this.refine((value) => options.includes(value), "Invalid value!");
};