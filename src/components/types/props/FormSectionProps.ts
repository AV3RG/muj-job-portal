import {UseFormReturn} from "react-hook-form";
import React from "react";
import TailwindClass from "@/components/types/TailwindClass";
import FormRenderProps from "./FormRenderProps";

type FormSectionProps = {
    form: UseFormReturn<any, undefined, any>,
    children: React.JSX.Element | React.JSX.Element[] | false,
    fieldNamePrefix: string,
    className?: TailwindClass,
    type: "div" | "fragment"
} & FormRenderProps

export default FormSectionProps;