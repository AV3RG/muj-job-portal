import FormComboBoxProps from "@/components/types/props/FormComboBoxProps";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {FormControl} from "@/components/ui/form";
import {Button} from "@/components/ui/button";
import {Check, ChevronsUpDown} from "lucide-react";
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem} from "@/components/ui/command";
import React from "react";
import formFormAssertion from "@/util/assert/formFormAssertion";
import formFieldAssertion from "@/util/assert/formFieldAssertion";

export default function GenericComboBox(props: FormComboBoxProps) {

    const form = formFormAssertion(props.form)


    const field = formFieldAssertion(props.field)

    return <>
        <Popover>
            <PopoverTrigger asChild>
                <FormControl>
                    <Button variant={"outline"} role={"combobox"}>
                        {field.value || props.constants.placeholder}
                        <ChevronsUpDown/>
                    </Button>
                </FormControl>
            </PopoverTrigger>
            <PopoverContent>
                <Command>
                    <CommandInput placeholder={props.constants.commandInputPlaceholder}/>
                    <CommandEmpty>{props.constants.commandEmptyText}</CommandEmpty>
                    <CommandGroup>
                        {props.options.map((option, index) => {
                            return <CommandItem
                                value={option}
                                key={option}
                                onSelect={async () => {
                                    form.setValue(props.constants.name, option)
                                }}
                            >
                                <Check/>
                                {option}
                            </CommandItem>
                        })}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    </>
}