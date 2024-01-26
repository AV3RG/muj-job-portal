import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {FormControl, FormDescription, FormField, FormItem, FormLabel} from "@/components/ui/form";
import React from "react";
import FormInputProps from "@/components/types/FormInputProps";
import designations from "@/constants/designations.json"

export default function Designation(props: FormInputProps) {

    if (!props.field) {
        throw Error("field is undefined or null")
    }

    return <>
        <FormLabel>Designation</FormLabel>
        <Select onValueChange={props.field.onChange} defaultValue={props.field.value}>
            <FormControl>
                <SelectTrigger>
                    <SelectValue placeholder={"Select a designation"}/>
                </SelectTrigger>
            </FormControl>
            <SelectContent>
                {designations.map((option, index) => {
                    return <SelectItem value={option} key={index}>{option}</SelectItem>
                })}
            </SelectContent>
        </Select>
    </>

}