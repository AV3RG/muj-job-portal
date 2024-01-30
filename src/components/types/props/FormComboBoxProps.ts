import FormInputProps from "@/components/types/props/FormInputProps";

type FormComboBoxProps = FormInputProps & {
    options: string[],
    constants: {
        commandInputPlaceholder: string,
        commandEmptyText: string
    }
}

export default FormComboBoxProps