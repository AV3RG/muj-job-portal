import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function ApplicationInfo() {
    return <Select>
        <SelectTrigger>
            <SelectValue>Application Type</SelectValue>
        </SelectTrigger>
        <SelectContent>
            <SelectItem value={"Professor"}>Professor</SelectItem>
            <SelectItem value={"Associate Professor"}>Associate Professor</SelectItem>
            <SelectItem value={"Assistant Professor"}>Assistant Professor</SelectItem>
        </SelectContent>
    </Select>
}