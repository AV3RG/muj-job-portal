import FormSectionChildBaseProps from "@/components/types/props/FormSectionChildBaseProps";
import React from "react";
import {UseFormReturn} from "react-hook-form";
import TailwindClass from "@/components/types/TailwindClass";
import FormSectionProps from "@/components/types/props/FormSectionProps";

type FormRepeatableProps = FormSectionChildBaseProps & {
    children: React.ReactElement[],
    itemsClassName?: TailwindClass,
    buttonsHolderClassName?: TailwindClass,
    form?: UseFormReturn<any, undefined, any>,
    fieldNamePrefix: string,
    addButtonRenderer: (size: number, setSize: (value: (((prevState: number) => number) | number)) => void) => React.ReactElement
    removeButtonRenderer: (size: number, setSize: (value: (((prevState: number) => number) | number)) => void) => React.ReactElement,
    separator?: boolean,
    formSectionProps?: Omit<FormSectionProps, "form" | "fieldNamePrefix" | "children">
}

export default FormRepeatableProps