"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as zod from "zod"
import formSchema from "@/constants/form/formSchema";
import defaultValues from "@/constants/form/defaultValues";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import ApplicationInfo from "@/components/form/academic/ApplicationInfo";

export default async function Academic() {

    const form = useForm<zod.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: defaultValues
    })

    function onSubmit(values: zod.infer<typeof formSchema>) {
        return <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <ApplicationInfo/>
            </form>
        </Form>
    }

    return <>
        <div className={"mt-12"}>
            <ApplicationInfo/>
        </div>
    </>

}