import FormAccordionProps from "@/components/types/props/FormAccordionProps";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import FormSection from "@/components/form/FormSection";
import GenericRepeatable from "@/components/form/generic/GenericRepeatable";
import React from "react";
import GenericTextArea from "@/components/form/generic/GenericTextArea";
import fellowshipConstants, {fieldNamePrefix} from "@/constants/field/fellowshipConstants";
import GenericSelect from "@/components/form/generic/GenericSelect";
import years from "@/constants/years.json";
import GenericInput from "@/components/form/generic/GenericInput";

export default function Fellowships(props: FormAccordionProps) {

    return <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
            <AccordionTrigger>{props.index}. Experience</AccordionTrigger>
            <AccordionContent>
                <FormSection form={props.form} fieldNamePrefix={fieldNamePrefix}>
                    <GenericRepeatable fieldNamePrefix={fieldNamePrefix}
                                       addButtonRenderer={(_, setSize) => {
                                           return <button onClick={(e) => {
                                               e.preventDefault()
                                               setSize((current) => current + 1)
                                           }}>
                                               Add new
                                           </button>
                                       }}
                                       removeButtonRenderer={(_, setSize) => {
                                           return <button onClick={(e) => {
                                               e.preventDefault()
                                               setSize((current) => current - 1)
                                           }}>
                                               Remove Last
                                           </button>
                                       }}
                    >
                        <GenericTextArea constants={fellowshipConstants.details}/>
                        <GenericSelect constants={fellowshipConstants.year} options={years}/>
                        <GenericInput constants={fellowshipConstants.amountPerAnnumINR} passDownProps={{type: "number"}}/>
                        <GenericSelect constants={fellowshipConstants.status} options={[]}/>
                    </GenericRepeatable>
                </FormSection>
            </AccordionContent>
        </AccordionItem>
    </Accordion>
}