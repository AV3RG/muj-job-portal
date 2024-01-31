import {ControllerRenderProps, FieldValues, UseFormReturn} from "react-hook-form";
import FormFieldConstants from "@/components/types/constants/FormFieldConstants";
import FormSectionChildBaseProps from "@/components/types/props/FormSectionChildBaseProps";
import {InputProps} from "@/components/ui/input";

type FormInputProps = FormSectionChildBaseProps & {
    field?: ControllerRenderProps<FieldValues, string>,
    form?: UseFormReturn<any, undefined, any>,
    constants: FormFieldConstants,
    noLabel?: boolean,
    passDownProps?: InputProps,
}

export default FormInputProps;