import FormInputProps from "@/components/types/FormInputProps";
import {FormControl, FormLabel} from "@/components/ui/form";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import React, {useMemo} from "react";
import faculties from "@/constants/faculties.json"

export default function Department(props: FormInputProps) {
    if (!props.field) {
        throw Error("field is undefined or null")
    }

    const facultyValue = props.form.watch("faculty")

    const departments = useMemo(() => {
        if (facultyValue) {
            const schoolsObject = (faculties as any)[facultyValue];
            return Object.keys(schoolsObject).map((school) => {
                return schoolsObject[school]
            }).flat()
        }
        return []
    }, [facultyValue])

    return <>
        <FormLabel>Department</FormLabel>
        <Select onValueChange={props.field.onChange} defaultValue={props.field.value}>
            <FormControl>
                <SelectTrigger>
                    <SelectValue placeholder={"Select a department"}/>
                </SelectTrigger>
            </FormControl>
            <SelectContent>
                {departments.map((option, index) => {
                    return <SelectItem value={option} key={option}>{option}</SelectItem>
                })}
            </SelectContent>
        </Select>
    </>
}