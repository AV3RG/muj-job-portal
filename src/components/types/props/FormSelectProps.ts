import FormInputProps from "@/components/types/props/FormInputProps";
import TailwindClass from "@/components/types/TailwindClass";

type FormSelectProps =
    Omit<FormInputProps, "className"> &
    { options: string[] } &
    {
        selectTriggerClassName?: TailwindClass
        selectValueClassName?: TailwindClass,
        selectContentClassName?: TailwindClass,
        selectItemClassName?: TailwindClass,
    }

export default FormSelectProps