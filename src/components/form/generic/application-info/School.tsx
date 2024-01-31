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
    const facultiesTyped = faculties as { [key: string]: { [key: string]: string[] } }

    const school = useMemo(() => {
        if (facultyValue && departmentValue) {
            const schoolsObject = facultiesTyped[facultyValue];
            return Object.keys(schoolsObject).find((school: string) => {
                return schoolsObject[school].includes(departmentValue)
            })
        }
        return null
    }, [facultyValue, departmentValue, facultiesTyped])

    return <>
        <Input placeholder={props.constants.placeholder} value={school ? school : props.constants.placeholder} id={props.constants.name}/>
    </>
}
