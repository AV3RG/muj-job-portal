import {Textarea} from "@/components/ui/textarea";
import FormTextAreaProps from "@/components/types/props/FormTextAreaProps";
import formFieldAssertion from "@/util/assert/formFieldAssertion";

export default function GenericTextArea(props: FormTextAreaProps) {

    const field = formFieldAssertion(props.field)

    return <Textarea id={props.constants.name} placeholder={props.constants.placeholder} defaultValue={field.value} {...props.field} />
}