import FormRepeatableProps from "@/components/types/props/FormRepeatableProps";
import FormSection from "@/components/form/FormSection";
import formFormAssertion from "@/util/assert/formFormAssertion";
import React, {useState} from "react";

export default function GenericRepeatable(props: FormRepeatableProps) {

    console.log(props)

    const form = formFormAssertion(props.form);
    const [size, setSize] = useState(1);

    return <>
        <div className={props.className}>
            {Array.from({length: size}, (_, index) => {
                return props.children.map((child) => {
                    return <FormSection form={form} fieldNamePrefix={`${props.fieldNamePrefix}.${index}`} key={index}>
                        {child}
                    </FormSection>
                })
            })}
        </div>
        <div className={props.buttonsClassName}>
            {props.addButtonRenderer(size, setSize)}
            {props.removeButtonRenderer(size, setSize)}
        </div>
    </>
}

GenericRepeatable.defaultProps = {
    customRender: true
}