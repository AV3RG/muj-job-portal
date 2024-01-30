import FormAddressProps from "@/components/types/props/FormAddressProps";
import React from "react";
import GenericComboBox from "../GenericComboBox";
import GenericTextArea from "@/components/form/generic/GenericTextArea";
import FormSection from "../../FormSection";
import formFormAssertion from "@/util/assert/formFormAssertion";

export default function AddressCombo(props: FormAddressProps) {

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

    return <>
        <FormSection form={form}>
            <GenericComboBox options={countries} constants={props.constants.country}/>
            <GenericComboBox options={states} constants={props.constants.state}/>
            <GenericComboBox options={cities} constants={props.constants.city}/>
            <GenericTextArea constants={props.constants.address}/>
        </FormSection>
    </>
}