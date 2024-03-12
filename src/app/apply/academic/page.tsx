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
import Experience from "@/components/form/academic/Experience";
import Fellowships from "@/components/form/academic/Fellowships";
import Books from "@/components/form/academic/Books";
import Rewards from "@/components/form/academic/Rewards";
import OtherInfo from "@/components/form/academic/OtherInfo";
import Research from "@/components/form/academic/Research";
import { Accordion } from "@/components/ui/accordion";


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
                    <div className={"flex flex-col gap-y-5"}>
                        <div className={"text-center text-xl md:text-5xl font-sans"}>Job Application Form</div>
                        <Accordion type="single" collapsible className={"flex flex-col gap-y-2"}>
                            {[
                                ApplicationInfo,
                                PersonalInfo,
                                AcademicQualifications,
                                Qualifications,
                                Experience,
                                Fellowships,
                                Research,
                                Books,
                                Rewards,
                                OtherInfo,
                            ].map((FormSection, index) => {
                                return <FormSection form={form} index={index + 1} key={index}/>
                            })}
                        </Accordion>
                    </div>
                </form>
            </Form>
        </div>
    </>

}
