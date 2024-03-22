import TailwindClass from "@/components/types/TailwindClass";
import FormRenderProps from "@/components/types/props/FormRenderProps";

type FormSectionChildBaseProps = {
    noLabel?: boolean,
    labelClassName?: TailwindClass,
    fieldRenderClassName?: TailwindClass,
} & FormRenderProps

export default FormSectionChildBaseProps