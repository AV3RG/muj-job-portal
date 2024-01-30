import {ControllerRenderProps, FieldValues} from "react-hook-form";

export default function formFieldAssertion(field: ControllerRenderProps<FieldValues, string> | null | undefined): ControllerRenderProps<FieldValues, string> | never {
    if (field === null || field === undefined)
        throw new Error("formFieldCheck: field is null or undefined");
    return field;
}