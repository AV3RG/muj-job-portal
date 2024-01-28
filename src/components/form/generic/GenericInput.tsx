import FormInputProps from "@/components/types/FormInputProps";
import { Input } from "@/components/ui/input";

export default function GenericInput(props: FormInputProps) {
    if (!props.field) {
        throw Error("field is undefined or null")
    }

    return <>
        <Input placeholder={props.constants.placeholder} id={props.constants.name}/>
    </>
}