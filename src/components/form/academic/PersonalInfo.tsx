import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import FormSection from "@/components/form/FormSection";
import FormAccordionProps from "@/components/types/props/FormAccordionProps";
import GenericDate from "../generic/GenericDate";
import personalInfoConstants, {fieldNamePrefix} from "@/constants/field/personalInfoConstants";
import GenericInput from "@/components/form/generic/GenericInput";
import GenericButtonGroup from "@/components/form/generic/GenericButtonGroup";
import genders from "@/constants/genders.json";
import { Separator } from "@/components/ui/separator";
import GenericAddressCombo from "@/components/form/generic/GenericAddressCombo";
import GenericCheckBox from "@/components/form/generic/GenericCheckBox";
import GenericSelect from "@/components/form/generic/GenericSelect";
import religions from "@/constants/religions.json";
import maritalStatuses from "@/constants/marital_status.json";
import GenericTextArea from "@/components/form/generic/GenericTextArea";
import fieldWatcher from "@/util/fieldWatcher";

export default function PersonalInfo(props: FormAccordionProps) {

    const sameAddress = fieldWatcher(props.form, [fieldNamePrefix, personalInfoConstants.sameAddress.name])

    return <AccordionItem value={props.index.toString()}>
        <AccordionTrigger>{props.index}. Personal Information</AccordionTrigger>
        <AccordionContent className={"flex flex-col gap-y-6"}>
            <FormSection form={props.form} fieldNamePrefix={fieldNamePrefix} className={"grid grid-cols-6"}>
                <GenericInput constants={personalInfoConstants.firstName}/>
                <GenericInput constants={personalInfoConstants.middleName}/>
                <GenericInput constants={personalInfoConstants.lastName}/>
                <GenericDate constants={personalInfoConstants.dob}/>
                <GenericButtonGroup constants={personalInfoConstants.gender} options={genders} />
                <GenericInput constants={personalInfoConstants.email}/>
            </FormSection>
            <Separator orientation={"horizontal"}/>
            <FormSection form={props.form} fieldNamePrefix={[fieldNamePrefix, personalInfoConstants.permanentAddress.prefix].join(".")} className={"grid grid-cols-6"}>
                <GenericAddressCombo constants={personalInfoConstants.permanentAddress}
                                     customRender={true}
                                     containerClassName={"flex gap-x-8 gap-y-4 flex-wrap"}
                />
                <GenericTextArea constants={personalInfoConstants.permanentAddress.address}/>
                <GenericCheckBox constants={personalInfoConstants.sameAddress}/>
            </FormSection>
            <Separator orientation={"horizontal"}/>
            {sameAddress ||
                <>
                    <FormSection form={props.form} fieldNamePrefix={[fieldNamePrefix, personalInfoConstants.currentAddress.prefix].join(".")} className={"grid grid-cols-6"}>
                        <GenericAddressCombo constants={personalInfoConstants.currentAddress}
                                             customRender={true}
                                             containerClassName={"flex-none gap-0"}
                        />
                        <GenericTextArea constants={personalInfoConstants.currentAddress.address}/>
                    </FormSection>
                    <Separator orientation={"horizontal"}/>
                </>
            }
            <FormSection form={props.form} fieldNamePrefix={fieldNamePrefix} className={"grid grid-cols-6"}>
                <GenericSelect constants={personalInfoConstants.religion} options={religions}/>
                <GenericSelect constants={personalInfoConstants.maritalStatus} options={maritalStatuses}/>
                <GenericInput constants={personalInfoConstants.aadhaarCard}/>
                <GenericInput constants={personalInfoConstants.panCard}/>
            </FormSection>
        </AccordionContent>
    </AccordionItem>
}