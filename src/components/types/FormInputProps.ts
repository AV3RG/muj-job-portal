import {ControllerRenderProps, FieldValues, UseFormReturn} from "react-hook-form";
import FormFieldConstants from "@/components/types/FormFieldConstants";

type FormInputProps = {
    field?: ControllerRenderProps<FieldValues, string>,
    form?: UseFormReturn<any, undefined, any>,
    constants: FormFieldConstants,
}

export default FormInputProps;