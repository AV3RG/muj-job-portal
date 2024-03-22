import FormAccordionProps from "@/components/types/props/FormAccordionProps";
import {AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import FormSection from "@/components/form/FormSection";
import GenericRepeatable from "@/components/form/generic/GenericRepeatable";
import React from "react";
import fellowshipConstants, {fieldNamePrefix} from "@/constants/field/fellowshipConstants";
import GenericSelect from "@/components/form/generic/GenericSelect";
import years from "@/constants/years.json";
import GenericInput from "@/components/form/generic/GenericInput";
import {academicPrefix} from "@/constants/field/experienceConstants";

export default function Fellowships(props: FormAccordionProps) {

    return <AccordionItem value={props.index.toString()}>
        <AccordionTrigger>{props.index}. Fellowships Achieved</AccordionTrigger>
        <AccordionContent>
            <FormSection form={props.form} fieldNamePrefix={fieldNamePrefix} className={"w-full"}>
                <GenericRepeatable fieldNamePrefix={academicPrefix} formSectionProps={{type: "fragment", className: "grid grid-cols-6"}}>
                    <GenericInput constants={fellowshipConstants.details} fieldRenderClassName={"col-span-6"}/>
                    <GenericSelect constants={fellowshipConstants.year} options={years}/>
                    <GenericInput constants={fellowshipConstants.amountPerAnnumINR} passDownProps={{type: "number"}}/>
                    <GenericSelect constants={fellowshipConstants.status} options={[]}/>
                </GenericRepeatable>
            </FormSection>
        </AccordionContent>
    </AccordionItem>
}