import * as zod from "zod";
import years from "@/constants/years.json";
import divisions from "@/constants/division.json";
import educationModes from "@/constants/education_modes.json";
import streams from "@/constants/streams.json";

export function zodLocation(includeAddress: boolean = false, optionalFields: boolean = false) {
    if (optionalFields) {
        return zod.object({
            country: zod.string().nonEmpty().optional(),
            state: zod.string().nonEmpty().optional(),
            city: zod.string().nonEmpty().optional(),
            ...(includeAddress && {address: zod.string().nonEmpty().optional()}),
        })
    } else {
        return zod.object({
            country: zod.string().nonEmpty(),
            state: zod.string().nonEmpty(),
            city: zod.string().nonEmpty(),
            ...(includeAddress && {address: zod.string().nonEmpty()}),
        })
    }
}

export function zodYear() {
    return zod.string().nonEmpty().fromOptions(years);
}

export function zodDivision() {
    return zod.string().nonEmpty().fromOptions(divisions);
}

export function zodEducationMode() {
    return zod.string().nonEmpty().fromOptions(educationModes);
}

export function zodStream() {
    return zod.string().nonEmpty().fromOptions(streams);
}

export function zodAggregate() {
    return zod.number().int().positive().max(100);
}