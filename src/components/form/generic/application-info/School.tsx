import FormInputProps from "@/components/types/props/FormInputProps";
import React, {useMemo} from "react";
import faculties from "@/constants/faculties.json"
import { Input } from "@/components/ui/input";
import applicationInfoConstants from "@/constants/field/applicationInfoConstants";


export default function School(props: FormInputProps) {
    if (!props.field) {
        throw Error("field is undefined or null")
    }
    if (!props.form) {
        throw Error("form is undefined or null")
    }

    const facultyValue = props.form.watch(applicationInfoConstants.faculty.name)
    const departmentValue = props.form.watch(applicationInfoConstants.department.name)

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
        <Input placeholder={"Select Faculty & Department"} value={school ? school : "Select Faculty & Department"} id={props.constants.name}/>
    </>
}