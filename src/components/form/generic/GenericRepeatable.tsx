import FormRepeatableProps from "@/components/types/props/FormRepeatableProps";
import FormSection from "@/components/form/FormSection";
import formFormAssertion from "@/util/assert/formFormAssertion";
import React, {useRef} from "react";

export default function GenericRepeatable(props: FormRepeatableProps) {

    console.log(props)

    const form = formFormAssertion(props.form);
    const size = useRef(1)

    const setSize = (value: (((prevState: number) => number) | number)) => {
        if (typeof value === "function") {
            size.current = value(size.current)
        } else {
            size.current = value
        }
    }

    return <>
        <div className={props.className}>
            {Array.from({length: size.current}, (_, index) => {
                return props.children.map((child) => {
                    return <FormSection form={form} fieldNamePrefix={`${props.fieldNamePrefix}.${index}`} key={index}>
                        {child}
                    </FormSection>
                })
            })}
        </div>
        <div className={props.buttonsHolderClassName}>
            {props.addButtonRenderer(size.current, setSize)}
            {props.removeButtonRenderer(size.current, setSize)}
        </div>
    </>
}

GenericRepeatable.defaultProps = {
    customRender: true
}