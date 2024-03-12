import {UseFormReturn} from "react-hook-form";

export default function fieldWatcher(form: UseFormReturn<any, undefined, any>, fieldPath: string[]): any {
    return form.watch(fieldPath.join("."))
}