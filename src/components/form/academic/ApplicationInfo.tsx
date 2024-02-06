import {
    Accordion,
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
import {useMemo} from "react";
import GenericInput from "@/components/form/generic/GenericInput";

export default function ApplicationInfo(props: FormAccordionProps) {

    const facultyValue = props.form.watch(applicationInfoConstants.faculty.name)
    const departmentValue = props.form.watch(applicationInfoConstants.department.name)
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

    const school = useMemo(() => {
        if (facultyValue && departmentValue) {
            const schoolsObject = facultiesTyped[facultyValue];
            return Object.keys(schoolsObject).find((school: string) => {
                return schoolsObject[school].includes(departmentValue)
            })
        }
        return null
    }, [facultyValue, departmentValue, facultiesTyped])

    return <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
            <AccordionTrigger>{props.index}. Application Type</AccordionTrigger>
            <AccordionContent>
                <div className={"flex gap-x-4 gap-y-2 flex-wrap"}>
                    <FormSection form={props.form} fieldNamePrefix={fieldNamePrefix}>
                        <GenericSelect options={designations} constants={applicationInfoConstants.designation} />
                        <GenericSelect options={Object.keys(faculties)} constants={applicationInfoConstants.faculty} />
                        <GenericSelect options={departments} constants={applicationInfoConstants.department} />
                        <GenericInput constants={applicationInfoConstants.school} passDownProps={{value: school ? school : applicationInfoConstants.school.placeholder}}/>
                    </FormSection>
                </div>
            </AccordionContent>
        </AccordionItem>
    </Accordion>
}