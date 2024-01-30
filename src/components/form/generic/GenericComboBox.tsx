import FormComboBoxProps from "@/components/types/props/FormComboBoxProps";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {FormControl} from "@/components/ui/form";
import {Button} from "@/components/ui/button";
import {Check, ChevronsUpDown} from "lucide-react";
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem} from "@/components/ui/command";
import React from "react";
import formFormAssertion from "@/util/assert/formFormAssertion";

export default function ComboBox(props: FormComboBoxProps) {

    const form = formFormAssertion(props.form)

    const [open, setOpen] = React.useState(false)

    return <>
        <Popover open={open}>
            <PopoverTrigger asChild>
                <FormControl>
                    <Button>
                        {props.constants.placeholder}
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
                                key={index}
                                onClick={async () => {
                                    form.setValue(props.constants.name, option)
                                    setTimeout(() => {
                                        setOpen(false)
                                    }, 500)
                                }}
                            >
                                <Check>
                                    {option}
                                </Check>
                            </CommandItem>
                        })}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    </>
}