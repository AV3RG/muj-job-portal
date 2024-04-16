import {ZodEffects} from "zod";

declare module 'zod' {
    interface ZodString {
        nonEmpty(): ZodString;
        onlyChars(): ZodString;
        onlyDigits(): ZodString;
        onlyAlphaNumeric(): ZodString;
        onlyAlphaNumericWithSpace(): ZodString;
        onlyCharsWithSpace(): ZodString;
        fromOptions(options: string[]): ZodEffects<ZodString, string, string>;
    }
}