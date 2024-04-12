import {Textarea} from "@/components/ui/textarea";
import formFieldAssertion from "@/util/assert/formFieldAssertion";
import {FormControl} from "@/components/ui/form";
import FormInputProps from "@/components/types/props/FormInputProps";

export default function GenericTextArea(props: FormInputProps) {

    const field = formFieldAssertion(props.field)

    return <FormControl>
            <Textarea id={props.constants.name} placeholder={props.constants.placeholder} defaultValue={field.value} {...props.field} />
        </FormControl>

}