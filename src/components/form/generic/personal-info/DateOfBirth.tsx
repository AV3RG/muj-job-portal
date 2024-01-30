import FormInputProps from "@/components/types/props/FormInputProps";
import {FormControl} from "@/components/ui/form";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Calendar} from "@/components/ui/calendar";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {CalendarIcon} from "lucide-react";
import {format} from "date-fns";

export default function DateOfBirth(props: FormInputProps) {
    if (!props.field) {
        throw Error("field is undefined or null")
    }

    return <>
        <Popover>
            <PopoverTrigger asChild>
                <FormControl>
                    <Button
                        variant={"outline"}
                        className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !props.field.value && "text-muted-foreground"
                        )}
                    >
                        {props.field.value ? (
                            format(props.field.value, "PPP")
                        ) : (
                            <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                    mode="single"
                    selected={props.field.value}
                    onSelect={props.field.onChange}
                    disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                    captionLayout={"dropdown"}
                    fromYear={1920}
                    toYear={new Date().getFullYear()}
                />
            </PopoverContent>
        </Popover>
    </>
}