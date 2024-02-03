import FormLocationConstants from "@/components/types/constants/FormLocationConstants";
import FormFieldConstants from "@/components/types/constants/FormFieldConstants";

type FormAddressConstants = FormLocationConstants & {
    address: FormFieldConstants,
}

export default FormAddressConstants