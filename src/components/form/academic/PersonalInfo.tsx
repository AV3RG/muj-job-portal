import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import FormSection from "@/components/form/FormSection";
import FormAccordionProps from "@/components/types/props/FormAccordionProps";
import DateOfBirth from "../generic/personal-info/DateOfBirth";
import personalInfoConstants, {fieldNamePrefix} from "@/constants/field/personalInfoConstants";
import GenericInput from "@/components/form/generic/GenericInput";
import GenericButtonGroup from "@/components/form/generic/GenericButtonGroup";
import genders from "@/constants/genders.json";
import { Separator } from "@/components/ui/separator";
import AddressCombo from "@/components/form/generic/personal-info/AddressCombo";
import GenericCheckBox from "@/components/form/generic/GenericCheckBox";
import GenericSelect from "@/components/form/generic/GenericSelect";
import religions from "@/constants/religions.json";
import maritalStatuses from "@/constants/marital_status.json";
import GenericTextArea from "@/components/form/generic/GenericTextArea";

export default function PersonalInfo(props: FormAccordionProps) {

    const sameAddress = props.form.watch(personalInfoConstants.sameAddress.name)

    return <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
            <AccordionTrigger>{props.index}. Personal Information</AccordionTrigger>
            <AccordionContent>
                <FormSection form={props.form} fieldNamePrefix={fieldNamePrefix}>
                    <GenericInput constants={personalInfoConstants.firstName}/>
                    <GenericInput constants={personalInfoConstants.middleName}/>
                    <GenericInput constants={personalInfoConstants.lastName}/>
                    <DateOfBirth constants={personalInfoConstants.dob}/>
                    <GenericButtonGroup constants={personalInfoConstants.gender} options={genders} />
                    <GenericInput constants={personalInfoConstants.email}/>
                    <Separator orientation={"horizontal"}/>
                    <AddressCombo constants={personalInfoConstants.permanentAddress} customRender={true} formFieldNamePrefix={personalInfoConstants.permanentAddress.prefix}/>
                    <GenericTextArea constants={personalInfoConstants.permanentAddress.address}/>
                    <GenericCheckBox constants={personalInfoConstants.sameAddress} noLabel/>
                    {sameAddress ||
                        <>
                            <AddressCombo constants={personalInfoConstants.currentAddress} customRender={true} formFieldNamePrefix={personalInfoConstants.currentAddress.prefix}/>
                            <GenericTextArea constants={personalInfoConstants.currentAddress.address}/>
                        </>
                    }
                    <GenericSelect constants={personalInfoConstants.religion} options={religions}/>
                    <GenericSelect constants={personalInfoConstants.maritalStatus} options={maritalStatuses}/>
                    <GenericInput constants={personalInfoConstants.aadhaarCard}/>
                    <GenericInput constants={personalInfoConstants.panCard}/>
                </FormSection>
            </AccordionContent>
        </AccordionItem>
    </Accordion>
}