import formFieldAssertion from "@/util/assert/formFieldAssertion";
import {Checkbox} from "@/components/ui/checkbox";
import FormCheckBoxProps from "@/components/types/props/FormCheckBoxProps";

export default function GenericCheckBox(props: FormCheckBoxProps) {
    const field = formFieldAssertion(props.field);
    return <Checkbox defaultChecked={field.value} onCheckedChange={field.onChange} {...props.field} />;
}