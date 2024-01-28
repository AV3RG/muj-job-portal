import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Faculty from "@/components/form/generic/application-info/Faculty";
import Department from "@/components/form/generic/application-info/Department";
import School from "@/components/form/generic/application-info/School";
import FormSection from "@/components/form/FormSection";
import FormAccordionProps from "@/components/types/FormAccordionProps";
import applicationInfoConstants from "@/constants/field/applicationInfoConstants";
import GenericSelect from "@/components/form/generic/GenericSelect";
import designations from "@/constants/designations.json"
import faculties from "@/constants/faculties.json"

export default function ApplicationInfo(props: FormAccordionProps) {
    return <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
            <AccordionTrigger>{props.index}. Application Type</AccordionTrigger>
            <AccordionContent>
                <FormSection form={props.form}>
                    <GenericSelect options={designations} constants={applicationInfoConstants.designation} form={props.form}/>
                    <GenericSelect options={Object.keys(faculties)} constants={applicationInfoConstants.faculty} form={props.form}/>
                    <Department constants={applicationInfoConstants.department} form={props.form}/>
                    <School constants={applicationInfoConstants.school} form={props.form}/>
                </FormSection>
            </AccordionContent>
        </AccordionItem>
    </Accordion>
}