import FormSectionProps from "@/components/types/props/FormSectionProps";
import React, {Children} from "react";
import {FormField, FormLabel, FormMessage} from "@/components/ui/form";
import formFieldNameAssertion from "@/util/assert/formFieldNameAssertion";

export default function FormSection(props: FormSectionProps) {

    return <>
        {Children.map(props.children, child => {
            if (child === null || child === undefined) {
                return <></>
            }
            if (child.type && child.type === React.Fragment) {
                return <FormSection form={props.form}>
                    {child.props.children}
                </FormSection>
            }
            if (child.props.constants === undefined) {
                //Probably a div or something
                return child
            }
            if (child.props.customRender) {
                //Still need to attach custom props
                return React.cloneElement(child, {form: props.form})
            }
            const fieldName = formFieldNameAssertion(child.props.constants.name)
            return <>
                <FormField
                    name={fieldName}
                    control={props.form.control}
                    render={({ field }) : React.ReactElement => {
                        return <div>
                            {!child.props.noLabel && <FormLabel>{child.props.constants.label}</FormLabel>}
                            {React.cloneElement(child, {field: field, form: props.form})}
                            <FormMessage/>
                        </div>
                    }}
                />
            </>
        })}
    </>
}
