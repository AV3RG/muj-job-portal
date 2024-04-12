import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import FormSection from "@/components/form/FormSection";
import FormAccordionProps from "@/components/types/props/FormAccordionProps";
import applicationInfoConstants, {fieldNamePrefix} from "@/constants/field/applicationInfoConstants";
import GenericSelect from "@/components/form/generic/GenericSelect";
import designations from "@/constants/designations.json"
import faculties from "@/constants/faculties.json"
import {useEffect, useMemo, useState} from "react";
import GenericInput from "@/components/form/generic/GenericInput";
import fieldWatcher from "@/util/fieldWatcher";

export default function ApplicationInfo(props: FormAccordionProps) {

    const facultyValue = fieldWatcher(props.form, [fieldNamePrefix, applicationInfoConstants.faculty.name])
    const departmentValue = fieldWatcher(props.form, [fieldNamePrefix, applicationInfoConstants.department.name])
    const facultiesTyped = faculties as { [key: string]: { [key: string]: string[] } }

    const departments = useMemo(() => {
        if (facultyValue) {
            const schoolsObject = facultiesTyped[facultyValue];
            return Object.keys(schoolsObject).map((school) => {
                return schoolsObject[school]
            }).flat()
        }
        return []
    }, [facultiesTyped, facultyValue])

    function schoolCalculator() {
        if (facultyValue && departmentValue) {
            const schoolsObject = facultiesTyped[facultyValue];
            return Object.keys(schoolsObject).find((school: string) => {
                return schoolsObject[school].includes(departmentValue)
            }) || null
        }
        return null
    }
    
    const [school, setSchool] = useState<string | null>(schoolCalculator())
    
    // Cannot use useMemo here because the value of school is dependent on the value of department
    useEffect(() => {
        const newVal = schoolCalculator()
        setSchool(newVal)
        props.form.setValue([fieldNamePrefix, applicationInfoConstants.school.name].join("."), newVal)
    }, [facultyValue, departmentValue, facultiesTyped, schoolCalculator]);

    return <AccordionItem value={props.index.toString()}>
            <AccordionTrigger>{props.index}. Application Type</AccordionTrigger>
            <AccordionContent className={"flex gap-x-8 gap-y-4 flex-wrap"}>
                <FormSection form={props.form} fieldNamePrefix={fieldNamePrefix} className={"grid grid-cols-6"}>
                    <GenericSelect options={designations} constants={applicationInfoConstants.designation} selectTriggerClassName={"w-full flex-basis-1"} />
                    <GenericSelect options={Object.keys(faculties)} constants={applicationInfoConstants.faculty}/>
                    <GenericSelect options={departments} constants={applicationInfoConstants.department} />
                    <GenericInput className={"w-80"} constants={applicationInfoConstants.school} passDownProps={{value: school ? school : applicationInfoConstants.school.placeholder}}/>
                </FormSection>
            </AccordionContent>
        </AccordionItem>
}