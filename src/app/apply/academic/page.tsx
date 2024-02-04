"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as zod from "zod"
import formSchema from "@/constants/form/formSchema";
import defaultValues from "@/constants/form/defaultValues";
import { Form } from "@/components/ui/form"
import ApplicationInfo from "@/components/form/academic/ApplicationInfo";
import PersonalInfo from "@/components/form/academic/PersonalInfo";
import Qualifications from "@/components/form/academic/Qualifications";
import AcademicQualifications from "@/components/form/academic/AcademicQualifications";


export default function Academic() {

    const form = useForm<zod.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: defaultValues
    })

    function onSubmit(values: zod.infer<typeof formSchema>) {
        console.log(values)
    }

    return <>
        <div className={"mt-12 px-12 md:px-24"}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className={"flex flex-col gap-y-2"}>
                        <div className={"text-center text-xl md:text-3xl "}>Job Application Form</div>
                        <ApplicationInfo form={form} index={1}/>
                        <PersonalInfo form={form} index={2}/>
                        <AcademicQualifications form={form} index={3}/>
                        <Qualifications form={form} index={4}/>
                    </div>
                </form>
            </Form>
        </div>
    </>

}
