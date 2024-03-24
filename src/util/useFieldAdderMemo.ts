import {UseFormReturn} from "react-hook-form";
import fieldWatcher from "@/util/fieldWatcher";

export default function useFieldAdderMemo(form: UseFormReturn<any, undefined, any>, fieldNamePrefix: string, fields: string[][]): number {

    const fieldWatchers = fields.map(field => fieldWatcher(form, [fieldNamePrefix, ...field]));
    return fieldWatchers.reduce((acc, field) => {
        const fieldInt = parseInt(field) || 0;
        return acc + fieldInt;
    }, 0);

}