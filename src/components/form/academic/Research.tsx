import FormAccordionProps from "@/components/types/props/FormAccordionProps";
import {AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Research(props: FormAccordionProps) {
    return <AccordionItem value={props.index.toString()}>
        <AccordionTrigger>{props.index}. Research & Consultancy</AccordionTrigger>
        <AccordionContent>
        </AccordionContent>
    </AccordionItem>
}