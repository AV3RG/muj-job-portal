import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import FormSelectProps from "@/components/types/props/FormSelectProps";
import formFieldAssertion from "@/util/assert/formFieldAssertion";

export default function GenericButtonGroup(props: FormSelectProps) {

    const field = formFieldAssertion(props.field)

    return <ToggleGroup type="single" defaultValue={field.value} variant={"outline"}>
        {props.options.map((option, index) => {
            return <>
                <ToggleGroupItem value={option} key={index}>{option}</ToggleGroupItem>
            </>
        })}
    </ToggleGroup>
}