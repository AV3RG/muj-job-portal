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
import academicQualificationConstants, {
  class10FieldNamePrefix,
  class12FieldNamePrefix,
  graduationConstants,
  graduationFieldNamePrefix
} from "@/constants/field/academicQualificationConstants";
import GenericInput from "../generic/GenericInput";
import educationModes from "@/constants/education_modes.json";
import years from "@/constants/years.json";
import division from "@/constants/division.json";
import streams from "@/constants/streams.json";
import AddressCombo from "@/components/form/generic/personal-info/AddressCombo";
import GenericRepeatable from "@/components/form/generic/GenericRepeatable";

export default function AcademicQualifications(props: FormAccordionProps) {
  const class10 = academicQualificationConstants.class10;
  const class12 = academicQualificationConstants.class12;
  const graduation = academicQualificationConstants.graduation;

  const Class10Component = () => {
    return <FormSection form={props.form} fieldNamePrefix={class10FieldNamePrefix}>
      <AddressCombo constants={class10.location} customRender={true} formFieldNamePrefix={class10FieldNamePrefix}/>
      <GenericSelect options={educationModes} constants={class10.educationMode} form={props.form}/>
      <GenericInput constants={class10.school} />
      <GenericInput constants={class10.board} />
      <GenericSelect options={years} constants={class10.passingYear} form={props.form}/>
      <GenericSelect options={division} constants={class10.division} form={props.form}/>
      <GenericInput constants={class10.aggregate} passDownProps={{type: "number"}}/>
    </FormSection>
  }

  const Class12Component = () => {
    return <FormSection form={props.form} fieldNamePrefix={class12FieldNamePrefix}>
      <AddressCombo constants={class12.location} customRender={true} formFieldNamePrefix={class12FieldNamePrefix}/>
      <GenericSelect options={educationModes} constants={class12.educationMode} form={props.form}/>
      <GenericInput constants={class12.school} />
      <GenericInput constants={class12.board} />
      <GenericSelect constants={class12.stream} options={streams} />
      <GenericSelect options={years} constants={class12.passingYear} form={props.form}/>
      <GenericSelect options={division} constants={class12.division} form={props.form}/>
      <GenericInput constants={class12.aggregate} passDownProps={{type: "number"}}/>
    </FormSection>
  }

  const GraduationComponent = () => {
    return <FormSection form={props.form} fieldNamePrefix={graduationFieldNamePrefix}>
      <GenericRepeatable fieldNamePrefix={graduationFieldNamePrefix} customRender={true}
                         addButtonRenderer={(_, setSize) => {
                           return <button onClick={(e) => {
                             e.preventDefault()
                             setSize((current) => { return current + 1 })
                           }}>
                             Add new
                           </button>
                         }}
                         removeButtonRenderer={(_, setSize) => {
                           return <button onClick={(e) => {
                             e.preventDefault()
                             setSize((current) => { return current - 1 })
                           }}>
                             Remove Last
                           </button>
                         }}>
        <AddressCombo constants={graduation.location} customRender={true} formFieldNamePrefix={graduationFieldNamePrefix}/>
        <GenericSelect constants={graduation.educationMode} options={educationModes}/>
        <GenericInput constants={graduation.university}/>
        <GenericInput constants={graduation.college}/>
        <GenericSelect options={years} constants={graduation.graduationYear}/>
        <GenericSelect constants={graduation.courseName} options={[]}/>
        <GenericInput constants={graduation.specialization}/>
        <GenericSelect options={division} constants={graduation.division}/>
        <GenericInput constants={graduation.aggregate} passDownProps={{type: "number"}}/>
      </GenericRepeatable>
    </FormSection>
  }

  const PostGraduationComponent = () => {

  }

  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            {props.index}. Academic / Professional Qualifications
          </AccordionTrigger>
          <AccordionContent>
            <Class10Component />
            <Class12Component />
            <GraduationComponent />
            <PostGraduationComponent />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
