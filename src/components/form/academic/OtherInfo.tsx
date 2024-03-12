import FormAccordionProps from "@/components/types/props/FormAccordionProps";
import {AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function OtherInfo(props: FormAccordionProps) {
    return <AccordionItem value={props.index.toString()}>
        <AccordionTrigger>{props.index}. Other Information</AccordionTrigger>
        <AccordionContent>
        </AccordionContent>
    </AccordionItem>

}