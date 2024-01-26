import FormSectionProps from "@/components/types/FormSectionProps";
import React, {Children, cloneElement} from "react";
import { FormField } from "@/components/ui/form";

export default function FormSection(props: FormSectionProps) {
    return <>
        {Children.map(props.children, child => {
            const fieldName = child.props.fieldName
            if (!fieldName) {
                throw new Error("Field name is required")
            }
            return <>
                <FormField
                    name={fieldName}
                    control={props.form.control}
                    render={({ field }) : React.ReactElement => (
                        React.cloneElement(child, {field: field})
                    )}
                />
            </>
        })}
    </>
}