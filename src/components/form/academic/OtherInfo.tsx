import FormAccordionProps from "@/components/types/props/FormAccordionProps";
import {AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import fieldWatcher from "@/util/fieldWatcher";
import otherInfoConstants, {fieldNamePrefix} from "@/constants/field/otherInfoConstants";
import { UseFormReturn } from "react-hook-form";
import GenericRadioGroup from "@/components/form/generic/GenericRadioGroup";
import GenericInput from "../generic/GenericInput";
import FormSection from "@/components/form/FormSection";

function KnownMujComponent(props: {
    form: UseFormReturn<any, undefined, any>,
}) {

    const knownMujValue = fieldWatcher(props.form, [fieldNamePrefix, otherInfoConstants.knownMuj.name]);
    const yesNoArray = ["Yes", "No"] as const;

    return <></>

    /*return <FormSection form={props.form} fieldNamePrefix={fieldNamePrefix}>
        <GenericRadioGroup constants={otherInfoConstants.knownMuj} options={[...yesNoArray]} />
        {knownMujValue === "Yes" && <>
            <GenericInput constants={otherInfoConstants.knownMujDetails.name} />
            <GenericInput constants={otherInfoConstants.knownMujDetails.department} />
            <GenericInput constants={otherInfoConstants.knownMujDetails.designation} />
            <GenericInput constants={otherInfoConstants.knownMujDetails.relation} />
        </>}
    </FormSection>*/
}

export default function OtherInfo(props: FormAccordionProps) {

    return <AccordionItem value={props.index.toString()}>
        <AccordionTrigger>{props.index}. Other Information</AccordionTrigger>
        <AccordionContent>
            <KnownMujComponent form={props.form} />
        </AccordionContent>
    </AccordionItem>

}