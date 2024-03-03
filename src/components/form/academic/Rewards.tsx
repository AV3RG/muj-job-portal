import FormAccordionProps from "@/components/types/props/FormAccordionProps";
import rewardsConstants, { fieldNamePrefix } from "@/constants/field/rewardsConstants";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import FormSection from "@/components/form/FormSection";
import GenericCheckBox from "@/components/form/generic/GenericCheckBox";
import GenericInput from "@/components/form/generic/GenericInput";
import GenericSelect from "@/components/form/generic/GenericSelect";
import years from "@/constants/years.json";

export default function Books(props: FormAccordionProps) {
    const checkboxState = props.form.watch(rewardsConstants.ifYes.name)

    return <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
            <AccordionTrigger>{props.index}. Books</AccordionTrigger>
            <AccordionContent>
                <FormSection form={props.form} fieldNamePrefix={fieldNamePrefix}>
                    <GenericCheckBox constants={rewardsConstants.ifYes}/>
                    {checkboxState &&
                        <>
                            <GenericInput constants={rewardsConstants.awards}/>
                            <GenericInput constants={rewardsConstants.institute}/>
                            <GenericSelect constants={rewardsConstants.year} options={years}/>
                        </>
                    }
                </FormSection>
            </AccordionContent>
        </AccordionItem>
    </Accordion>
}