import FormInputProps from "@/components/types/props/FormInputProps";
import { Input } from "@/components/ui/input";
import formFieldAssertion from "@/util/assert/formFieldAssertion";
import {cn} from "@/lib/utils";
import { FormControl } from "@/components/ui/form";

export default function GenericInput(props: FormInputProps) {

    const field = formFieldAssertion(props.field)

    return <>
        <FormControl>
            <Input placeholder={props.constants.placeholder} id={props.constants.name} defaultValue={field.value} {...props.field} {...props.passDownProps} className={cn("w-full", props.className)} />
        </FormControl>
    </>
}