import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import FormSection from "@/components/form/FormSection";
import FormAccordionProps from "@/components/types/FormAccordionProps";
import DateOfBirth from "../generic/personal-info/DateOfBirth";
import personalInfoConstants from "@/constants/field/personalInfoConstants";
import GenericInput from "@/components/form/generic/GenericInput";
import GenericButtonGroup from "@/components/form/generic/GenericButtonGroup";
import genders from "@/constants/genders.json";

export default function PersonalInfo(props: FormAccordionProps) {
    return <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
            <AccordionTrigger>{props.index}. Personal Information</AccordionTrigger>
            <AccordionContent>
                <FormSection form={props.form}>
                    <GenericInput constants={personalInfoConstants.firstName}/>
                    <GenericInput constants={personalInfoConstants.middleName}/>
                    <GenericInput constants={personalInfoConstants.lastName}/>
                    <DateOfBirth constants={personalInfoConstants.dob}/>
                    <GenericButtonGroup constants={personalInfoConstants.gender} options={genders} />
                </FormSection>
            </AccordionContent>
        </AccordionItem>
    </Accordion>
}