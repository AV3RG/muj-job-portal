import FormInputProps from "@/components/types/props/FormInputProps";
import FormLocationConstants from "@/components/types/constants/FormLocationConstants";
import TailwindClass from "@/components/types/TailwindClass";

type FormLocationProps = Omit<FormInputProps, 'constants'> & {
    constants: FormLocationConstants,
    formFieldNamePrefix: string,
    containerClassName?: TailwindClass,
    addressField?: boolean
}

export default FormLocationProps;