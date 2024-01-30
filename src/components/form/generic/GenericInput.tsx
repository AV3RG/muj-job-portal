import FormInputProps from "@/components/types/props/FormInputProps";
import { Input } from "@/components/ui/input";
import formFieldAssertion from "@/util/assert/formFieldAssertion";

export default function GenericInput(props: FormInputProps) {

    const field = formFieldAssertion(props.field)

    return <>
        <Input placeholder={props.constants.placeholder} id={props.constants.name} {...props.field} defaultValue={field.value} />
    </>
}