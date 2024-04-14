import FormAccordionProps from "@/components/types/props/FormAccordionProps";
import {AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import FormSection from "@/components/form/FormSection";
import experienceConstants, {academicPrefix, nonAcademicPrefix, fieldNamePrefix} from "@/constants/field/experienceConstants";
import GenericSelect from "@/components/form/generic/GenericSelect";
import GenericInput from "@/components/form/generic/GenericInput";
import GenericRepeatable from "../generic/GenericRepeatable";
import GenericAddressCombo from "../generic/GenericAddressCombo";
import React from "react";
import GenericDate from "@/components/form/generic/GenericDate";
import { Separator } from "@/components/ui/separator";

export default function Experience(props: FormAccordionProps) {

    const academic = experienceConstants.academic;
    const nonAcademic = experienceConstants.nonAcademic;

    return <AccordionItem value={props.index.toString()}>
        <AccordionTrigger>{props.index}. Experience</AccordionTrigger>
        <AccordionContent>
            <div className={"flex flex-col gap-y-6"}>
                <div className={"text-lg font-bold"}>Academic Experience</div>
                <FormSection form={props.form} fieldNamePrefix={[fieldNamePrefix, academicPrefix].join(".")}>
                    <GenericRepeatable fieldNamePrefix={academicPrefix} formSectionProps={{type: "fragment", className: "grid grid-cols-6"}}>
                        <GenericSelect options={[]} constants={academic.natureOfJob}/>
                        <GenericAddressCombo constants={academic.location}
                                             customRender={true}
                        />
                        <GenericInput constants={academic.university}/>
                        <GenericInput constants={academic.college}/>
                        <GenericSelect constants={academic.position} options={[]}/>
                        <GenericInput constants={academic.domain}/>
                        <GenericDate constants={academic.from}/>
                        <GenericDate constants={academic.to}/>
                    </GenericRepeatable>
                </FormSection>
                <Separator/>
                <div className={"text-lg font-bold"}>Non Academic Experience</div>
                <FormSection form={props.form} fieldNamePrefix={[fieldNamePrefix, nonAcademicPrefix].join(".")}>
                    <GenericRepeatable fieldNamePrefix={academicPrefix} formSectionProps={{type: "fragment", className: "grid grid-cols-6"}}>
                        <GenericSelect constants={nonAcademic.typeOfJob} options={[]}/>
                        <GenericSelect options={[]} constants={nonAcademic.natureOfJob}/>
                        <GenericAddressCombo constants={nonAcademic.location} customRender={true}/>
                        <GenericInput constants={nonAcademic.organization}/>
                        <GenericInput constants={nonAcademic.designation}/>
                        <GenericInput constants={nonAcademic.department}/>
                        <GenericDate constants={nonAcademic.from}/>
                        <GenericDate constants={nonAcademic.to}/>
                    </GenericRepeatable>
                </FormSection>
            </div>
        </AccordionContent>
    </AccordionItem>
}