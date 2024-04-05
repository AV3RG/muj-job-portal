import FormInputProps from "@/components/types/props/FormInputProps";
import TailwindClass from "@/components/types/TailwindClass";

type FormRadioGroupProps = Omit<FormInputProps, "className"> & {
    options: string[],
    formItemClassName?: TailwindClass,
    formItemLabelClassName?: TailwindClass,
}

export default FormRadioGroupProps;