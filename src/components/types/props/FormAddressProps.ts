import FormAddressConstants from "@/components/types/constants/FormAddressConstants";
import FormInputProps from "@/components/types/props/FormInputProps";

type FormAddressProps = Omit<FormInputProps, 'constants'> & {
    constants: FormAddressConstants,
}

export default FormAddressProps;