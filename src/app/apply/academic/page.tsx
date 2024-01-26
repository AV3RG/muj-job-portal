"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as zod from "zod"
import formSchema from "@/constants/form/formSchema";
import defaultValues from "@/constants/form/defaultValues";
import { Form } from "@/components/ui/form"
import ApplicationInfo from "@/components/form/academic/application-info/ApplicationInfo";

export default function Academic() {

    const form = useForm<zod.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: defaultValues
    })

    function onSubmit(values: zod.infer<typeof formSchema>) {
        console.log(values)
    }

    return <>
        <div className={"mt-12"}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <ApplicationInfo form={form}/>
                </form>
            </Form>
        </div>
    </>

}