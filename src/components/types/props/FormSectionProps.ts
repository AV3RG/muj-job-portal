import {UseFormReturn} from "react-hook-form";
import React from "react";

type FormSectionProps = {
    form: UseFormReturn<any, undefined, any>,
    children: React.JSX.Element | React.JSX.Element[],
}

export default FormSectionProps;