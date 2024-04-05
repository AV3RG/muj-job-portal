import FormRepeatableProps from "@/components/types/props/FormRepeatableProps";
import FormSection from "@/components/form/FormSection";
import formFormAssertion from "@/util/assert/formFormAssertion";
import React, {useRef, useState} from "react";
import { Separator } from "@/components/ui/separator";
import {cn} from "@/lib/utils";
import {GenericAddButton, GenericRemoveButton} from "@/components/form/generic/GenericRepeatableButton";

export default function GenericRepeatable(props: FormRepeatableProps) {

    const form = formFormAssertion(props.form);
    const [size, setSize] = useState(1);

    return <div className={"flex flex-col gap-y-4 w-full"}>
        <div>
            {Array.from({length: size}, (_, index) => {
                return <div className={"flex flex-col gap-y-4 w-full"} key={index}>
                    <div className={cn("grid grid-cols-6 gap-x-8 gap-y-4", props.itemsClassName)}>
                        {props.children.map((child) => {
                            return <FormSection form={form} fieldNamePrefix={`${props.fieldNamePrefix}.${index}`} key={index} {...props.formSectionProps}>
                                {child}
                            </FormSection>
                        })}
                    </div>
                    {props.separator ? ((index === length - 1) ? <></> : <Separator orientation={"horizontal"} className={""}/>) : <></> }
                </div>
            })}
        </div>
        <div className={cn("flex gap-x-4", props.buttonsHolderClassName)}>
            {props.addButtonRenderer(size, setSize)}
            {props.removeButtonRenderer(size, setSize)}
        </div>
    </div>
}

GenericRepeatable.defaultProps = {
    customRender: true,
    separator: true,
    addButtonRenderer: (size: number, setSize: (value: (((prevState: number) => number) | number)) => void) => <GenericAddButton size={size} setSize={setSize}/>,
    removeButtonRenderer: (size: number, setSize: (value: (((prevState: number) => number) | number)) => void) => <GenericRemoveButton size={size} setSize={setSize}/>,
}