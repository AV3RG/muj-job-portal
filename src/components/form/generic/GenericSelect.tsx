import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {FormControl} from "@/components/ui/form";
import React from "react";
import FormSelectProps from "@/components/types/FormSelectProps";

export default function GenericSelect(props: FormSelectProps) {

    if (!props.field) {
        throw Error("field is undefined or null")
    }

    return <>
        <Select onValueChange={props.field.onChange} defaultValue={props.field.value}>
            <FormControl>
                <SelectTrigger>
                    <SelectValue placeholder={props.constants.placeholder}/>
                </SelectTrigger>
            </FormControl>
            <SelectContent>
                {props.options.map((option, index) => {
                    return <SelectItem value={option} key={index}>{option}</SelectItem>
                })}
            </SelectContent>
        </Select>
    </>

}