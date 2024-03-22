import React from "react";
import FormAccordionProps from "@/components/types/props/FormAccordionProps";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FormSection from "../FormSection";
import GenericSelect from "../generic/GenericSelect";
import academicQualificationConstants, {
    class10FieldNamePrefix,
    class12FieldNamePrefix,
    graduationFieldNamePrefix,
    postGraduationFieldNamePrefix,
    phdFieldNamePrefix,
    mPhilFieldNamePrefix
} from "@/constants/field/academicQualificationConstants";
import GenericInput from "../generic/GenericInput";
import educationModes from "@/constants/education_modes.json";
import years from "@/constants/years.json";
import division from "@/constants/division.json";
import streams from "@/constants/streams.json";
import GenericAddressCombo from "@/components/form/generic/GenericAddressCombo";
import GenericRepeatable from "@/components/form/generic/GenericRepeatable";
import GenericCheckBox from "@/components/form/generic/GenericCheckBox";
import fieldWatcher from "@/util/fieldWatcher";
import {Separator} from "@/components/ui/separator";
import GenericRepeatableButton, {
    GenericAddButton,
    GenericRemoveButton
} from "@/components/form/generic/GenericRepeatableButton";

export default function AcademicQualifications(props: FormAccordionProps) {
  const class10 = academicQualificationConstants.class10;
  const class12 = academicQualificationConstants.class12;
  const graduation = academicQualificationConstants.graduation;
  const postGraduation = academicQualificationConstants.postGraduation;
  const phd = academicQualificationConstants.phd;
  const mPhil = academicQualificationConstants.mPhil;

  const Class10Component = () => {
    return <FormSection form={props.form} fieldNamePrefix={class10FieldNamePrefix} className={"grid grid-cols-6 w-full"}>
      <GenericAddressCombo constants={class10.location} customRender={true} formFieldNamePrefix={class10.location.prefix}/>
      <GenericSelect options={educationModes} constants={class10.educationMode} form={props.form}/>
      <GenericInput constants={class10.school} />
      <GenericInput constants={class10.board} />
      <GenericSelect options={years} constants={class10.passingYear} form={props.form}/>
      <GenericSelect options={division} constants={class10.division} form={props.form}/>
      <GenericInput constants={class10.aggregate} passDownProps={{type: "number"}}/>
    </FormSection>
  }

  const Class12Component = () => {
    return <FormSection form={props.form} fieldNamePrefix={class12FieldNamePrefix} className={"grid grid-cols-6 w-full"}>
      <GenericAddressCombo constants={class12.location} customRender={true} formFieldNamePrefix={class12.location.prefix}/>
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
    return <FormSection form={props.form} fieldNamePrefix={graduationFieldNamePrefix} className={"block gap-0 w-full"}>
      <GenericRepeatable fieldNamePrefix={graduationFieldNamePrefix}
                         customRender={true}
                         formSectionProps={{type: "fragment", className: "grid grid-cols-6"}}
      >
        <GenericAddressCombo constants={graduation.location} customRender={true} formFieldNamePrefix={graduation.location.prefix}/>
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
    return <FormSection form={props.form} fieldNamePrefix={postGraduationFieldNamePrefix} className={"block gap-0 w-full"}>
      <GenericRepeatable fieldNamePrefix={postGraduationFieldNamePrefix}
                         customRender={true}
                         formSectionProps={{type: "fragment", className: "grid grid-cols-6"}}
      >
        <GenericAddressCombo constants={postGraduation.location} customRender={true} formFieldNamePrefix={postGraduation.location.prefix}/>
        <GenericSelect constants={postGraduation.educationMode} options={educationModes}/>
        <GenericInput constants={postGraduation.university}/>
        <GenericInput constants={postGraduation.college}/>
        <GenericSelect options={years} constants={postGraduation.graduationYear}/>
        <GenericSelect constants={postGraduation.courseName} options={[]}/>
        <GenericInput constants={postGraduation.specialization}/>
        <GenericSelect options={division} constants={postGraduation.division}/>
        <GenericInput constants={postGraduation.aggregate} passDownProps={{type: "number"}}/>
      </GenericRepeatable>
    </FormSection>
  }

  const PhDComponent = () => {
    const phdYes = fieldWatcher(props.form, [phdFieldNamePrefix, phd.yesCheckbox.name]);

    const PhDYesComponent = () => {
        return <FormSection form={props.form} fieldNamePrefix={phdFieldNamePrefix} className={"block gap-0 w-full"}>
            <GenericRepeatable fieldNamePrefix={phdFieldNamePrefix} customRender={true}
                               formSectionProps={{type: "fragment", className: "grid grid-cols-6"}}
            >
                <GenericSelect constants={phd.status} options={[]} />
                <GenericAddressCombo constants={phd.location} customRender={true} formFieldNamePrefix={phd.location.prefix}/>
                <GenericSelect constants={phd.educationMode} options={educationModes}/>
                <GenericInput constants={phd.university}/>
                <GenericInput constants={phd.college}/>
                <GenericSelect options={years} constants={phd.enrollmentYear}/>
                <GenericSelect options={years} constants={phd.completionYear}/>
                <GenericInput constants={phd.specialization}/>
                <GenericSelect options={division} constants={phd.teachingExperience}/>
            </GenericRepeatable>
        </FormSection>
    }

    return <FormSection form={props.form} fieldNamePrefix={phdFieldNamePrefix}>
      <GenericCheckBox constants={phd.yesCheckbox}/>
      {phdYes && <PhDYesComponent />}
    </FormSection>
  }

  const MPhilComponent = () => {

      const mPhilYes = fieldWatcher(props.form, [mPhilFieldNamePrefix, mPhil.yesCheckbox.name]);

      const MPhilYesComponent = () => {
            return <FormSection form={props.form} fieldNamePrefix={mPhilFieldNamePrefix} className={"block gap-0 w-full"}>
                <GenericRepeatable fieldNamePrefix={mPhilFieldNamePrefix} customRender={true}
                                   formSectionProps={{type: "fragment", className: "grid grid-cols-6"}}
                >
                    <GenericAddressCombo constants={mPhil.location} formFieldNamePrefix={mPhil.location.prefix} />
                    <GenericSelect constants={mPhil.educationMode} options={educationModes}/>
                    <GenericInput constants={mPhil.university}/>
                    <GenericInput constants={mPhil.college}/>
                    <GenericSelect options={years} constants={mPhil.completionYear}/>
                    <GenericInput constants={mPhil.specialization}/>
                    <GenericSelect options={division} constants={mPhil.division}/>
                    <GenericInput constants={mPhil.aggregate} passDownProps={{type: "number"}}/>
                </GenericRepeatable>
            </FormSection>
      }

        return <FormSection form={props.form} fieldNamePrefix={mPhilFieldNamePrefix}>
            <GenericCheckBox constants={mPhil.yesCheckbox}/>
            {mPhilYes && <MPhilYesComponent />}
        </FormSection>

  }

  return (
    <AccordionItem value={props.index.toString()}>
      <AccordionTrigger>
        {props.index}. Academic / Professional Qualifications
      </AccordionTrigger>
        <AccordionContent className={"flex gap-x-8 gap-y-4 flex-wrap"}>
            <div className={"block w-full font-bold text-lg"}>Class 10</div>
            <Class10Component/>
            <Separator orientation={"horizontal"}/>
            <div className={"block w-full font-bold text-lg"}>Class 12</div>
            <Class12Component/>
            <Separator orientation={"horizontal"}/>
            <div className={"block w-full font-bold text-lg"}>Graduation</div>
            <GraduationComponent/>
            <Separator orientation={"horizontal"}/>
            <div className={"block w-full font-bold text-lg"}>Post Graduation</div>
            <PostGraduationComponent/>
            <Separator orientation={"horizontal"}/>
            <div className={"block w-full font-bold text-lg"}>Ph.D</div>
            <PhDComponent/>
            <Separator orientation={"horizontal"}/>
            <div className={"block w-full font-bold text-lg"}>M. Phil</div>
            <MPhilComponent/>
        </AccordionContent>
    </AccordionItem>
  );
}
