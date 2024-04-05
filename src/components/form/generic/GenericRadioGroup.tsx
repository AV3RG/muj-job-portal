import FormRadioGroupProps from "@/components/types/props/FormRadioGroupProps";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import formFieldAssertion from "@/util/assert/formFieldAssertion";
import {cn} from "@/lib/utils";

export default function GenericRadioGroup(props: FormRadioGroupProps) {

    const field = formFieldAssertion(props.field);

    return <FormControl>
        <RadioGroup
            onValueChange={field.onChange}
            defaultValue={field.value}
            className="flex flex-col space-y-1"
        >
            {props.options.map((option, index) => {
                return <FormItem key={index} className={cn("flex items-center space-x-3 space-y-0", props.formItemClassName)}>
                    <FormControl>
                        <RadioGroupItem value={option} />
                    </FormControl>
                    <FormLabel className={cn("font-normal", props.formItemLabelClassName)}>{option}</FormLabel>
                </FormItem>
            })}
        </RadioGroup>
    </FormControl>
}