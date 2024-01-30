import {ControllerRenderProps, FieldValues, UseFormReturn} from "react-hook-form";
import FormFieldConstants from "@/components/types/constants/FormFieldConstants";

type FormInputProps = {
    field?: ControllerRenderProps<FieldValues, string>,
    form?: UseFormReturn<any, undefined, any>,
    constants: FormFieldConstants,
    noLabel?: boolean,
}

export default FormInputProps;