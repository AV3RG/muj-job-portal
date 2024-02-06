import React from "react";
import FormAccordionProps from "@/components/types/props/FormAccordionProps";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FormSection from "../FormSection";
import GenericSelect from "../generic/GenericSelect";
import academicQualificationConstants, {class10FieldNamePrefix, class12FieldNamePrefix} from "@/constants/field/academicQualificationConstants";
import GenericInput from "../generic/GenericInput";
import educationModes from "@/constants/education_modes.json";
import years from "@/constants/years.json";
import division from "@/constants/division.json";
import streams from "@/constants/streams.json";
import AddressCombo from "@/components/form/generic/personal-info/AddressCombo";

export default function AcademicQualifications(props: FormAccordionProps) {
  const class10 = academicQualificationConstants.class10;
  const class12 = academicQualificationConstants.class12;
  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            {props.index}. Academic / Professional Qualifications
          </AccordionTrigger>
          <AccordionContent>
            {/*Class 10th details*/}
            <FormSection form={props.form} fieldNamePrefix={class10FieldNamePrefix}>
              <AddressCombo constants={class10.location} customRender={true}/>
              <GenericSelect options={educationModes} constants={class10.educationMode} form={props.form}/>
              <GenericInput constants={class10.school} />
              <GenericInput constants={class10.board} />
              <GenericSelect options={years} constants={class10.passingYear} form={props.form}/>
              <GenericSelect options={division} constants={class10.division} form={props.form}/>
              <GenericInput constants={class10.aggregate} passDownProps={{type: "number"}}/>
            </FormSection>
            {/*Class 12th details*/}
            <FormSection form={props.form} fieldNamePrefix={class12FieldNamePrefix}>
              <AddressCombo constants={class12.location} customRender={true}/>
              <GenericSelect options={educationModes} constants={class12.educationMode} form={props.form}/>
              <GenericInput constants={class12.school} />
              <GenericInput constants={class12.board} />
              <GenericSelect constants={class12.stream} options={streams} />
              <GenericSelect options={years} constants={class12.passingYear} form={props.form}/>
              <GenericSelect options={division} constants={class12.division} form={props.form}/>
              <GenericInput constants={class12.aggregate} passDownProps={{type: "number"}}/>
            </FormSection>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
