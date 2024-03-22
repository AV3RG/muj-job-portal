import FormLocationProps from "@/components/types/props/FormLocationProps";
import React from "react";
import GenericComboBox from "./GenericComboBox";
import FormSection from "../FormSection";
import formFormAssertion from "@/util/assert/formFormAssertion";

export default function GenericAddressCombo(props: FormLocationProps) {

    const form = formFormAssertion(props.form)

    const countries = React.useMemo(() => {
        return ["Testing Country"]
    }, [])

    const selectedCountry = form.watch(props.constants.country.name)

    const states = React.useMemo(() => {
        if (!selectedCountry) {
            return []
        }
        return [`Testing State ${selectedCountry}`]
        //TODO: get states from selected country
    }, [selectedCountry])

    const selectedState = form.watch(props.constants.state.name)

    const cities = React.useMemo(() => {
        if (!selectedState || !selectedCountry) {
            return []
        }
        return [`Testing City ${selectedState}`]
    }, [selectedState, selectedCountry])

    return <FormSection form={form} fieldNamePrefix={props.formFieldNamePrefix} className={props.containerClassName} type={"fragment"}>
        <GenericComboBox options={countries} constants={props.constants.country}/>
        <GenericComboBox options={states} constants={props.constants.state}/>
        <GenericComboBox options={cities} constants={props.constants.city}/>
    </FormSection>
}

GenericAddressCombo.defaultProps = {
    customRender: true
}