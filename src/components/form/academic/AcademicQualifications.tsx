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
import AddressCombo from "@/components/form/generic/personal-info/AddressCombo";
import GenericRepeatable from "@/components/form/generic/GenericRepeatable";
import GenericCheckBox from "@/components/form/generic/GenericCheckBox";

export default function AcademicQualifications(props: FormAccordionProps) {
  const class10 = academicQualificationConstants.class10;
  const class12 = academicQualificationConstants.class12;
  const graduation = academicQualificationConstants.graduation;
  const postGraduation = academicQualificationConstants.postGraduation;
  const phd = academicQualificationConstants.phd;
  const mPhil = academicQualificationConstants.mPhil;

  const Class10Component = () => {
    return <FormSection form={props.form} fieldNamePrefix={class10FieldNamePrefix}>
      <AddressCombo constants={class10.location} customRender={true} formFieldNamePrefix={class10.location.prefix}/>
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
      <AddressCombo constants={class12.location} customRender={true} formFieldNamePrefix={class12.location.prefix}/>
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
        <AddressCombo constants={graduation.location} customRender={true} formFieldNamePrefix={graduation.location.prefix}/>
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
    return <FormSection form={props.form} fieldNamePrefix={postGraduationFieldNamePrefix}>
      <GenericRepeatable fieldNamePrefix={postGraduationFieldNamePrefix} customRender={true}
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
        <AddressCombo constants={postGraduation.location} customRender={true} formFieldNamePrefix={postGraduation.location.prefix}/>
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

    const phdYes = props.form.watch(`${phdFieldNamePrefix}.${phd.yesCheckbox.name}`);

    const PhDYesComponent = () => {
        return <FormSection form={props.form} fieldNamePrefix={phdFieldNamePrefix}>
            <GenericRepeatable fieldNamePrefix={phdFieldNamePrefix} customRender={true}
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
                <GenericSelect constants={phd.status} options={[]} />
                <AddressCombo constants={phd.location} customRender={true} formFieldNamePrefix={phd.location.prefix}/>
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
      <GenericCheckBox constants={phd.yesCheckbox} noLabel/>
      {phdYes && <PhDYesComponent />}
    </FormSection>
  }

  const MPhilComponent = () => {

      const mPhilYes = props.form.watch(`${mPhilFieldNamePrefix}.${mPhil.yesCheckbox.name}`);

      const MPhilYesComponent = () => {
            return <FormSection form={props.form} fieldNamePrefix={mPhilFieldNamePrefix}>
                <GenericRepeatable fieldNamePrefix={mPhilFieldNamePrefix} customRender={true}
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
                    <AddressCombo constants={mPhil.location} formFieldNamePrefix={mPhil.location.prefix} />
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
            <GenericCheckBox constants={mPhil.yesCheckbox} noLabel/>
            {mPhilYes && <MPhilYesComponent />}
        </FormSection>

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
            <PhDComponent />
            <MPhilComponent />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
