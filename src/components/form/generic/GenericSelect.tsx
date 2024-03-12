import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {FormControl} from "@/components/ui/form";
import React from "react";
import FormSelectProps from "@/components/types/props/FormSelectProps";
import formFieldAssertion from "@/util/assert/formFieldAssertion";

export default function GenericSelect(props: FormSelectProps) {

    const field = formFieldAssertion(props.field)

    return <>
        <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
                <SelectTrigger className={props.selectTriggerClassName}>
                    <SelectValue placeholder={props.constants.placeholder} className={props.selectValueClassName}/>
                </SelectTrigger>
            </FormControl>
            <SelectContent className={props.selectContentClassName}>
                {props.options.map((option, index) => {
                    return <SelectItem value={option} key={index} className={props.selectItemClassName}>{option}</SelectItem>
                })}
            </SelectContent>
        </Select>
    </>

}