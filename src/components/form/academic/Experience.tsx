import FormAccordionProps from "@/components/types/props/FormAccordionProps";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import FormSection from "@/components/form/FormSection";
import experienceConstants, {academicPrefix, nonAcademicPrefix, fieldNamePrefix} from "@/constants/field/experienceConstants";
import GenericSelect from "@/components/form/generic/GenericSelect";
import GenericInput from "@/components/form/generic/GenericInput";
import GenericRepeatable from "../generic/GenericRepeatable";
import GenericAddressCombo from "../generic/GenericAddressCombo";
import React from "react";
import GenericDate from "@/components/form/generic/GenericDate";

export default function Experience(props: FormAccordionProps) {

    const academic = experienceConstants.academic;
    const nonAcademic = experienceConstants.nonAcademic;

    return <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
            <AccordionTrigger>{props.index}. Experience</AccordionTrigger>
            <AccordionContent>
                <FormSection form={props.form} fieldNamePrefix={fieldNamePrefix}>
                    <GenericRepeatable fieldNamePrefix={academicPrefix}
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
                        <GenericSelect options={[]} constants={academic.natureOfJob}/>
                        <GenericAddressCombo constants={academic.location} customRender={true} formFieldNamePrefix={academic.location.prefix}/>
                        <GenericInput constants={academic.university}/>
                        <GenericInput constants={academic.college}/>
                        <GenericSelect constants={academic.position} options={[]}/>
                        <GenericInput constants={academic.domain}/>
                        <GenericDate constants={academic.from}/>
                        <GenericDate constants={academic.to}/>
                    </GenericRepeatable>
                </FormSection>
                <FormSection form={props.form} fieldNamePrefix={fieldNamePrefix}>
                    <GenericRepeatable fieldNamePrefix={nonAcademicPrefix}
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
                        <GenericSelect constants={nonAcademic.typeOfJob} options={[]} />
                        <GenericSelect options={[]} constants={nonAcademic.natureOfJob}/>
                        <GenericAddressCombo constants={nonAcademic.location} customRender={true} formFieldNamePrefix={nonAcademic.location.prefix}/>
                        <GenericInput constants={nonAcademic.organization}/>
                        <GenericInput constants={nonAcademic.designation} />
                        <GenericInput constants={nonAcademic.department} />
                        <GenericDate constants={nonAcademic.from}/>
                        <GenericDate constants={nonAcademic.to}/>
                    </GenericRepeatable>
                </FormSection>
            </AccordionContent>
        </AccordionItem>
    </Accordion>
}