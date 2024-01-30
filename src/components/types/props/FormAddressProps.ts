import {ControllerRenderProps, FieldValues, UseFormReturn} from "react-hook-form";
import FormAddressConstants from "@/components/types/constants/FormAddressConstants";

type FormAddressProps = {
    field?: ControllerRenderProps<FieldValues, string>,
    form?: UseFormReturn<any, undefined, any>,
    constants: FormAddressConstants,
}

export default FormAddressProps;