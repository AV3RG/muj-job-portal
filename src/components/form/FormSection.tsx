import FormSectionProps from "@/components/types/props/FormSectionProps";
import React, {Children} from "react";
import {FormField, FormLabel, FormMessage} from "@/components/ui/form";
import formFieldNameAssertion from "@/util/assert/formFieldNameAssertion";
import {cn} from "@/lib/utils";

export default function FormSection(props: FormSectionProps) {

    const contentRendered = (child: React.JSX.Element | false) => {
        if (child === null || child === undefined) {
            return <></>
        }
        if (child === false) {
            return <></>
        }
        if (child.type && child.type === React.Fragment) {
            return <FormSection form={props.form} fieldNamePrefix={props.fieldNamePrefix}>
                {child.props.children}
            </FormSection>
        }
        if (child.props.customRender) {
            //Still need to attach custom props
            return React.cloneElement(child, {form: props.form})
        }
        if (child.props.constants === undefined) {
            //Probably a div or something
            return child
        }
        const fieldName = `${props.fieldNamePrefix}.${formFieldNameAssertion(child.props.constants.name)}`
        return <>
            <FormField
                name={fieldName}
                control={props.form.control}
                render={({ field }) : React.ReactElement => {
                    return <div className={cn("flex flex-col gap-y-1", child.props.fieldRenderClassName)}>
                        {!child.props.noLabel && <FormLabel className={child.props.labelClassName}>{child.props.constants.label}</FormLabel>}
                        {React.cloneElement(child, {field: field, form: props.form})}
                        <FormMessage/>
                    </div>
                }}
            />
        </>
    }

    if (props.type === "fragment") {
        return <>
            {Children.map(props.children, contentRendered)}
        </>
    } else if (props.type === "div") {
        return <div className={cn("flex gap-x-8 gap-y-4 flex-wrap", props.className)}>
            {Children.map(props.children, contentRendered)}
        </div>
    }
}

FormSection.defaultProps = {
    type: "div"
}
