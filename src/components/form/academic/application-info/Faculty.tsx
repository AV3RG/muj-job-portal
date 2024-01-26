import FormInputProps from "@/components/types/FormInputProps";
import {FormControl, FormLabel} from "@/components/ui/form";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import React from "react";
import faculties from "@/constants/faculties.json"

export default function Faculty(props: FormInputProps) {
    if (!props.field) {
        throw Error("field is undefined or null")
    }

    return <>
        <FormLabel htmlFor={props.fieldName}>Faculty</FormLabel>
        <Select onValueChange={props.field.onChange} defaultValue={props.field.value}>
            <FormControl>
                <SelectTrigger>
                    <SelectValue placeholder={"Select a faculty"}/>
                </SelectTrigger>
            </FormControl>
            <SelectContent>
                {Object.keys(faculties).map((option, index) => {
                    return <SelectItem value={option} key={index}>{option}</SelectItem>
                })}
            </SelectContent>
        </Select>
    </>
}