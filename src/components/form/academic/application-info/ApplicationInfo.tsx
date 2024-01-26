import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Designation from "@/components/form/academic/application-info/Designation";
import Faculty from "@/components/form/academic/application-info/Faculty";
import Department from "@/components/form/academic/application-info/Department";
import School from "@/components/form/academic/application-info/School";
import FormSection from "@/components/form/FormSection";
import FormAccordionProps from "@/components/types/FormAccordionProps";

export default function ApplicationInfo(props: FormAccordionProps) {
    return <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
            <AccordionTrigger>Application Type</AccordionTrigger>
            <AccordionContent>
                <FormSection form={props.form}>
                    <Designation fieldName={"designation"} form={props.form}/>
                    <Faculty fieldName={"faculty"} form={props.form}/>
                    <Department fieldName={"department"} form={props.form}/>
                    <School fieldName={"school"} form={props.form}/>
                </FormSection>
            </AccordionContent>
        </AccordionItem>
    </Accordion>
}