import formFieldAssertion from "@/util/assert/formFieldAssertion";
import {Checkbox} from "@/components/ui/checkbox";
import FormCheckBoxProps from "@/components/types/props/FormCheckBoxProps";
import {FormLabel} from "@/components/ui/form";

export default function GenericCheckBox(props: FormCheckBoxProps) {
    const field = formFieldAssertion(props.field);
    return <>
        <Checkbox defaultChecked={field.value} onCheckedChange={field.onChange} {...props.field} />
        <FormLabel>{props.constants.label}</FormLabel>
    </>;
}

GenericCheckBox.defaultProps = {
    noLabel: true
}