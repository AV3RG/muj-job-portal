import formFieldAssertion from "@/util/assert/formFieldAssertion";
import {Checkbox} from "@/components/ui/checkbox";
import FormCheckBoxProps from "@/components/types/props/FormCheckBoxProps";
import {FormControl, FormLabel} from "@/components/ui/form";
import {cn} from "@/lib/utils";

export default function GenericCheckBox(props: FormCheckBoxProps) {
    const field = formFieldAssertion(props.field);
    return <div className={cn("flex gap-x-2", props.containerClassName)}>
        <FormControl>
            <Checkbox defaultChecked={field.value} onCheckedChange={field.onChange} {...props.field} />
        </FormControl>
        <FormLabel>{props.constants.label}</FormLabel>
    </div>
}

GenericCheckBox.defaultProps = {
    noLabel: true
}