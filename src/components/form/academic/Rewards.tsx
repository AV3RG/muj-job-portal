import FormAccordionProps from "@/components/types/props/FormAccordionProps";
import rewardsConstants, { fieldNamePrefix } from "@/constants/field/rewardsConstants";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import FormSection from "@/components/form/FormSection";
import GenericCheckBox from "@/components/form/generic/GenericCheckBox";
import GenericInput from "@/components/form/generic/GenericInput";
import GenericSelect from "@/components/form/generic/GenericSelect";
import years from "@/constants/years.json";
import fieldWatcher from "@/util/fieldWatcher";
import GenericRepeatable from "../generic/GenericRepeatable";

export default function Rewards(props: FormAccordionProps) {
    const checkboxState = fieldWatcher(props.form, [fieldNamePrefix, rewardsConstants.ifYes.name])

    return <AccordionItem value={props.index.toString()}>
        <AccordionTrigger>{props.index}. Rewards & Recognition</AccordionTrigger>
        <AccordionContent>
            <FormSection form={props.form} fieldNamePrefix={fieldNamePrefix}>
                <GenericCheckBox constants={rewardsConstants.ifYes}/>
                {checkboxState &&
                    <GenericRepeatable fieldNamePrefix={fieldNamePrefix}>
                        <GenericInput constants={rewardsConstants.awards}/>
                        <GenericInput constants={rewardsConstants.institute}/>
                        <GenericSelect constants={rewardsConstants.year} options={years}/>
                    </GenericRepeatable>
                }
            </FormSection>
        </AccordionContent>
    </AccordionItem>
}