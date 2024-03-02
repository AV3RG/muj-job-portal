import FormSectionChildBaseProps from "@/components/types/props/FormSectionChildBaseProps";
import React from "react";
import {UseFormReturn} from "react-hook-form";

type FormRepeatableProps = FormSectionChildBaseProps & {
    children: React.ReactElement[],
    className?: React.ComponentProps<"div">["className"],
    buttonsClassName?: React.ComponentProps<"div">["className"],
    form?: UseFormReturn<any, undefined, any>,
    fieldNamePrefix: string,
    addButtonRenderer: (size: number, setSize: (value: (((prevState: number) => number) | number)) => void) => React.ReactElement,
    removeButtonRenderer: (size: number, setSize: (value: (((prevState: number) => number) | number)) => void) => React.ReactElement,
}

export default FormRepeatableProps