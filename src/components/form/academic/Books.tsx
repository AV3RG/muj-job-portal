import FormAccordionProps from "@/components/types/props/FormAccordionProps";
import booksConstants, { fieldNamePrefix } from "@/constants/field/booksConstants";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import FormSection from "@/components/form/FormSection";
import GenericCheckBox from "@/components/form/generic/GenericCheckBox";
import GenericInput from "@/components/form/generic/GenericInput";
import GenericSelect from "@/components/form/generic/GenericSelect";

export default function Books(props: FormAccordionProps) {
    const checkboxState = props.form.watch(booksConstants.ifYes.name)

    return <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
            <AccordionTrigger>{props.index}. Books</AccordionTrigger>
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
    </Accordion>
 }