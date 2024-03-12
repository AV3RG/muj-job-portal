import FormAccordionProps from "@/components/types/props/FormAccordionProps";
import booksConstants, { fieldNamePrefix } from "@/constants/field/booksConstants";
import {AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import FormSection from "@/components/form/FormSection";
import GenericCheckBox from "@/components/form/generic/GenericCheckBox";
import GenericInput from "@/components/form/generic/GenericInput";
import GenericSelect from "@/components/form/generic/GenericSelect";
import fieldWatcher from "@/util/fieldWatcher";

export default function Books(props: FormAccordionProps) {
    const checkboxState = fieldWatcher(props.form, [fieldNamePrefix, booksConstants.ifYes.name])

    return <AccordionItem value={props.index.toString()}>
        <AccordionTrigger>{props.index}. Books Authored/Co-Authored/Edited/Co-Edited (in last 3 years)</AccordionTrigger>
        <AccordionContent>
            <FormSection form={props.form} fieldNamePrefix={fieldNamePrefix}>
                <GenericCheckBox constants={booksConstants.ifYes}/>
                {checkboxState &&
                    <>
                        <GenericInput constants={booksConstants.details}/>
                        <GenericInput constants={booksConstants.isbn} passDownProps={{type: "number"}}/>
                        <GenericSelect constants={booksConstants.writtenAs} options={[]}/>
                    </>
                }
            </FormSection>
        </AccordionContent>
    </AccordionItem>
 }