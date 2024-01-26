import FormInputProps from "@/components/types/FormInputProps";
import {FormLabel} from "@/components/ui/form";
import React, {useMemo} from "react";
import faculties from "@/constants/faculties.json"
import { Input } from "@/components/ui/input";

export default function School(props: FormInputProps) {
    if (!props.field) {
        throw Error("field is undefined or null")
    }

    const facultyValue = props.form.watch("faculty")
    const departmentValue = props.form.watch("department")

    const school = useMemo(() => {
        if (facultyValue && departmentValue) {
            const schoolsObject = (faculties as any)[facultyValue];
            return Object.keys(schoolsObject).find((school: string) => {
                return schoolsObject[school].includes(departmentValue)
            })
        }
        return null
    }, [facultyValue, departmentValue])

    return <>
        <FormLabel htmlFor={props.fieldName}>School</FormLabel>
        <Input placeholder={"Select Faculty & Department"} value={school ? school : "Select Faculty & Department"} id={props.fieldName}/>
    </>
}