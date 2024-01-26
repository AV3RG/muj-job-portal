import {ControllerRenderProps, FieldValues, UseFormReturn} from "react-hook-form";

type FormInputProps = {
    field?: ControllerRenderProps<FieldValues, string>,
    fieldName: string,
    form: UseFormReturn<any, undefined, any>,
}

export default FormInputProps;