import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import FormSelectProps from "@/components/types/FormSelectProps";
import {Separator} from "@/components/ui/separator";

export default function GenericButtonGroup(props: FormSelectProps) {
    return <ToggleGroup type="single">
        {props.options.map((option, index) => {
            return <>
                {index != 0 ? <Separator orientation={"vertical"}/>: <></>}
                <ToggleGroupItem value={option} key={index}>{option}</ToggleGroupItem>
            </>
        })}
    </ToggleGroup>
}