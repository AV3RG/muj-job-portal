import FormAccordionProps from "@/components/types/props/FormAccordionProps";
import {AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import GenericInput from "../generic/GenericInput";
import researchConstants, {
    ConferenceConstants,
    ConsultancyConstants,
    fieldNamePrefix, GuidanceConstants, PatentConstants,
    ProjectConstants,
    PublicationConstants
} from "@/constants/field/researchConstants";
import FormSection from "@/components/form/FormSection";
import { Separator } from "@/components/ui/separator";
import {UseFormReturn} from "react-hook-form";
import fieldWatcher from "@/util/fieldWatcher";
import {useMemo} from "react";
import useFieldAdderMemo from "@/util/useFieldAdderMemo";
import GenericSelect from "@/components/form/generic/GenericSelect";
import GenericRepeatable from "../generic/GenericRepeatable";
import GenericCheckBox from "@/components/form/generic/GenericCheckBox";

function PublicationSection(props: {
    form: UseFormReturn<any, undefined, any>,
    constants: PublicationConstants
}) {
    const constants = props.constants;

    const total = useFieldAdderMemo(props.form, fieldNamePrefix, [
        [constants.ugcCareList.name],
        [constants.sci.name],
        [constants.webOfScience.name],
        [constants.googleScholar.name],
        [constants.scopus.name],
    ]);

    return <FormSection form={props.form} fieldNamePrefix={fieldNamePrefix} className={"grid grid-cols-6"}>
        <GenericInput constants={constants.total} passDownProps={{value: total}}/>
        <GenericInput constants={constants.ugcCareList} passDownProps={{defaultValue: 0}}/>
        <GenericInput constants={constants.sci} passDownProps={{defaultValue: 0}}/>
        <GenericInput constants={constants.webOfScience} passDownProps={{defaultValue: 0}}/>
        <GenericInput constants={constants.googleScholar} passDownProps={{defaultValue: 0}}/>
        <GenericInput constants={constants.scopus} passDownProps={{defaultValue: 0}}/>
    </FormSection>
}

function FundedProjectsSection(props: {
    form: UseFormReturn<any, undefined, any>,
    constants: ProjectConstants,
}) {
    return <FormSection form={props.form} fieldNamePrefix={fieldNamePrefix} className={"grid grid-cols-2"}>
        <GenericInput constants={props.constants.noOfProjects}/>
        <GenericInput constants={props.constants.amount}/>
    </FormSection>
}

function ConferenceSection(props: {
    form: UseFormReturn<any, undefined, any>,
    constants: ConferenceConstants,
}) {

    const presentedTotal = useFieldAdderMemo(props.form, fieldNamePrefix, [
        [props.constants.presentedAtConferences.national.name],
        [props.constants.presentedAtConferences.international.name],
    ]);
    const attendedTotal = useFieldAdderMemo(props.form, fieldNamePrefix, [
        [props.constants.attendedConferences.national.name],
        [props.constants.attendedConferences.international.name],
    ]);
    const organizedTotal = useFieldAdderMemo(props.form, fieldNamePrefix, [
        [props.constants.organizedConferences.national.name],
        [props.constants.organizedConferences.international.name],
    ]);
    const finalTotal = useMemo(() => presentedTotal + attendedTotal + organizedTotal, [presentedTotal, attendedTotal, organizedTotal]);

    return <div className={"flex flex-col gap-y-3"}>
        <span className={"text-lg"}>Presented at Conferences</span>
        <FormSection form={props.form} fieldNamePrefix={fieldNamePrefix} className={"grid grid-cols-3"}>
            <GenericInput constants={props.constants.presentedAtConferences.total} passDownProps={{value: presentedTotal}}/>
            <GenericInput constants={props.constants.presentedAtConferences.national} passDownProps={{defaultValue: 0}}/>
            <GenericInput constants={props.constants.presentedAtConferences.international} passDownProps={{defaultValue: 0}}/>
        </FormSection>
        <Separator />
        <span className={"text-lg"}>Attended Conferences</span>
        <FormSection form={props.form} fieldNamePrefix={fieldNamePrefix} className={"grid grid-cols-3"}>
            <GenericInput constants={props.constants.attendedConferences.total} passDownProps={{value: attendedTotal}}/>
            <GenericInput constants={props.constants.attendedConferences.national} passDownProps={{defaultValue: 0}}/>
            <GenericInput constants={props.constants.attendedConferences.international} passDownProps={{defaultValue: 0}}/>
        </FormSection>
        <Separator />
        <span className={"text-lg"}>Organized Conferences</span>
        <FormSection form={props.form} fieldNamePrefix={fieldNamePrefix} className={"grid grid-cols-3"}>
            <GenericInput constants={props.constants.organizedConferences.total} passDownProps={{value: organizedTotal}}/>
            <GenericInput constants={props.constants.organizedConferences.national} passDownProps={{defaultValue: 0}}/>
            <GenericInput constants={props.constants.organizedConferences.international} passDownProps={{defaultValue: 0}}/>
        </FormSection>
        <Separator />
        <span className={"text-lg"}>Grand total</span>
        <FormSection form={props.form} fieldNamePrefix={fieldNamePrefix} className={"grid grid-cols-3"}>
            <GenericInput constants={props.constants.totalConferences} passDownProps={{value: finalTotal}}/>
        </FormSection>
    </div>
}

function GuidanceSection(props: {
    form: UseFormReturn<any, undefined, any>,
    constants: GuidanceConstants
}) {
    return <div className={"flex flex-col gap-y-2"}>
        <FormSection form={props.form} fieldNamePrefix={fieldNamePrefix} className={"grid grid-cols-4"}>
            <GenericInput constants={props.constants.independentMPhil}/>
            <GenericInput constants={props.constants.independentPhD}/>
        </FormSection>
        <FormSection form={props.form} fieldNamePrefix={fieldNamePrefix} className={"grid grid-cols-4"}>
            <GenericInput constants={props.constants.coSupervisedMPhil}/>
            <GenericInput constants={props.constants.coSupervisedPhD}/>
        </FormSection>
    </div>
}

function PatentSection(props: {
    form: UseFormReturn<any, undefined, any>,
    constants: PatentConstants
}) {
    const PatentComponent = () => {
        return <div className={"flex flex-col gap-y-2"}>
            <FormSection form={props.form} fieldNamePrefix={fieldNamePrefix}>
                <GenericRepeatable fieldNamePrefix={fieldNamePrefix} formSectionProps={{type: "fragment", className: "grid grid-cols-3"}}>
                    <GenericInput constants={props.constants.details}/>
                    <GenericSelect constants={props.constants.year} options={[]}/>
                    <GenericSelect constants={props.constants.status} options={[]}/>
                </GenericRepeatable>
            </FormSection>
        </div>
    }

    const patentYes = fieldWatcher(props.form, [fieldNamePrefix, props.constants.yesCheckbox.name]);

    return <FormSection form={props.form} fieldNamePrefix={fieldNamePrefix} className={"flex flex-col gap-y-2"}>
        <GenericCheckBox constants={props.constants.yesCheckbox}/>
        {patentYes && <PatentComponent />}
    </FormSection>
}

function ConsultancyComponent(props: {
    form: UseFormReturn<any, undefined, any>,
    constants: ConsultancyConstants
}) {

    const ConsultancyComponent = () => {
        return <FormSection form={props.form} fieldNamePrefix={fieldNamePrefix} className={"grid grid-cols-3"}>
            <span>#</span>
            <span>Number of Consultancy</span>
            <span>Amount</span>
            <span>Completed</span>
            <GenericInput constants={props.constants.completedNo}/>
            <GenericInput constants={props.constants.completedAmount}/>
            <span>Ongoing</span>
            <GenericInput constants={props.constants.ongoingNo}/>
            <GenericInput constants={props.constants.ongoingAmount}/>
        </FormSection>
    }

    const consultancyYes = fieldWatcher(props.form, [fieldNamePrefix, props.constants.yesCheckbox.name]);

    return <FormSection form={props.form} fieldNamePrefix={fieldNamePrefix} className={"flex flex-col gap-y-2"}>
        <GenericCheckBox constants={props.constants.yesCheckbox}/>
        {consultancyYes && <ConsultancyComponent />}
    </FormSection>

}

export default function Research(props: FormAccordionProps) {
    return <AccordionItem value={props.index.toString()}>
        <AccordionTrigger>{props.index}. Research & Consultancy</AccordionTrigger>
        <AccordionContent>
            <div className={"flex flex-col gap-y-3"}>
                <FormSection form={props.form} fieldNamePrefix={fieldNamePrefix} className={"grid grid-cols-2"}>
                    <GenericInput constants={researchConstants.orcId}/>
                    <GenericInput constants={researchConstants.hIndexScopus}/>
                </FormSection>
                <FormSection form={props.form} fieldNamePrefix={fieldNamePrefix} className={"grid grid-cols-2"}>
                    <GenericInput constants={researchConstants.hIndexWebOfScience}/>
                    <GenericInput constants={researchConstants.cumulativeImpactFactor}/>
                </FormSection>

                <Separator />
                <span className={"font-bold text-lg"}>Number of Publications</span>
                <Separator />

                <span className={"text-sm"}>Research Paper Published (Total)</span>
                <PublicationSection form={props.form} constants={researchConstants.researchPublicationsTotal} />
                <Separator />
                <span className={"text-sm"}>Research Paper Published (Last 3 Years)</span>
                <PublicationSection form={props.form} constants={researchConstants.researchPublicationsLast3years} />
                <Separator />

                <span className={"text-sm"}>Number of citations (in the last three years)</span>
                <FormSection form={props.form} fieldNamePrefix={fieldNamePrefix} className={"grid grid-cols-2"}>
                    <GenericInput constants={researchConstants.citationsLast3Years}/>
                </FormSection>
                <Separator />

                <span className={"font bold"}>Number of funded projects (in the last 3 years)</span>
                <Separator />

                <span className={"text-sm"}>Completed</span>
                <FundedProjectsSection form={props.form} constants={researchConstants.fundedProjectsCompletedLast3Years} />
                <Separator />

                <span className={"text-sm"}>Ongoing</span>
                <FundedProjectsSection form={props.form} constants={researchConstants.fundedProjectsOngoing} />
                <Separator />

                <span className={"font-bold text-lg"}>No. of conferences, seminars, workshops, training programmes (in last three years)</span>
                <Separator />
                <ConferenceSection form={props.form} constants={researchConstants.conferenceSection}/>
                <Separator />

                <span className={"font-bold text-lg"}>Research Guidance (in the last three years)</span>
                <Separator />
                <span className={"text-lg"}>Successfully Completed</span>
                <GuidanceSection form={props.form} constants={researchConstants.completedGuidance}/>
                <Separator />
                <span className={"text-lg"}>Under Supervision</span>
                <GuidanceSection form={props.form} constants={researchConstants.underSupervisionGuidance}/>

                <span className={"text-lg"}>Patent Details (in the last 3 years)</span>
                <PatentSection form={props.form} constants={researchConstants.patents}/>
                <Separator />

                <span className={"text-lg"}>Consultancy</span>
                <ConsultancyComponent form={props.form} constants={researchConstants.consultancy}/>
                

            </div>
        </AccordionContent>
    </AccordionItem>
}