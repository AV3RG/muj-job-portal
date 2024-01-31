import {ControllerRenderProps, FieldValues, UseFormReturn} from "react-hook-form";
import FormFieldConstants from "@/components/types/constants/FormFieldConstants";
import FormSectionChildBaseProps from "@/components/types/props/FormSectionChildBaseProps";

type FormInputProps = FormSectionChildBaseProps & {
    field?: ControllerRenderProps<FieldValues, string>,
    form?: UseFormReturn<any, undefined, any>,
    constants: FormFieldConstants,
    noLabel?: boolean,
}

export default FormInputProps;