import {UseFormReturn} from "react-hook-form";

export default function formFormAssertion(form: UseFormReturn<any> | null | undefined): UseFormReturn<any> | never {
    if (form === null || form === undefined)
        throw new Error("formFormAssertion: form is null or undefined");
    return form;
}