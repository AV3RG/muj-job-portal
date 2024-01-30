import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import FormSelectProps from "@/components/types/props/FormSelectProps";
import {Separator} from "@/components/ui/separator";
import formFieldAssertion from "@/util/assert/formFieldAssertion";

export default function GenericButtonGroup(props: FormSelectProps) {

    const field = formFieldAssertion(props.field)

    return <ToggleGroup type="single" defaultValue={field.value}>
        {props.options.map((option, index) => {
            return <>
                {index != 0 ? <Separator orientation={"vertical"}/>: <></>}
                <ToggleGroupItem value={option} key={index}>{option}</ToggleGroupItem>
            </>
        })}
    </ToggleGroup>
}