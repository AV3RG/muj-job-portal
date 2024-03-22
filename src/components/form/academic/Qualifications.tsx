import FormAccordionProps from "@/components/types/props/FormAccordionProps";
import {AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import FormSection from "@/components/form/FormSection";
import GenericInput from "@/components/form/generic/GenericInput";
import GenericSelect from "@/components/form/generic/GenericSelect";
import qualificationsConstants, {fieldNamePrefix} from "@/constants/field/qualificationsConstants";
import pastYears from "@/util/pastYears";


export default function Qualifications(props: FormAccordionProps) {

    const yearsOptions = pastYears(100)

    return <AccordionItem value={props.index.toString()}>
        <AccordionTrigger>{props.index}. Qualifications</AccordionTrigger>
        <AccordionContent>
            <FormSection form={props.form} fieldNamePrefix={fieldNamePrefix} className={"grid grid-cols-6"}>
                <GenericSelect constants={qualificationsConstants.gateYear} options={yearsOptions} />
                <GenericInput constants={qualificationsConstants.gateScore} passDownProps={{type: "number"}} />
                <GenericSelect constants={qualificationsConstants.ugcNetYear} options={yearsOptions} />
                <GenericInput constants={qualificationsConstants.ugcNetScore} passDownProps={{type: "number"}} />
                <GenericSelect constants={qualificationsConstants.ugcJrfYear} options={yearsOptions} />
                <GenericInput constants={qualificationsConstants.ugcJrfScore} passDownProps={{type: "number"}} />
                <GenericSelect constants={qualificationsConstants.urcCsirYear} options={yearsOptions} />
                <GenericInput constants={qualificationsConstants.urcCsirScore} passDownProps={{type: "number"}} />
                <GenericSelect constants={qualificationsConstants.icmrYear} options={yearsOptions} />
                <GenericInput constants={qualificationsConstants.icmrScore} passDownProps={{type: "number"}} />
                <GenericSelect constants={qualificationsConstants.icarYear} options={yearsOptions} />
                <GenericInput constants={qualificationsConstants.icarScore} passDownProps={{type: "number"}} />
            </FormSection>
        </AccordionContent>
    </AccordionItem>
}