import FormInputProps from "@/components/types/props/FormInputProps";
import FormLocationConstants from "@/components/types/constants/FormLocationConstants";

type FormLocationProps = Omit<FormInputProps, 'constants'> & {
    constants: FormLocationConstants
}

export default FormLocationProps;