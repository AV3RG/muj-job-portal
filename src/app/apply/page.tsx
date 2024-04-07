import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
    return <div className={"m-auto w-full max-w-6xl mt-20 grid grid-cols-2 gap-x-8"}>
        <div className={"flex flex-col items-center border rounded py-6 px-10 gap-y-4"}>
            <span className={"text-2xl font-bold"}>Academic</span>
            <span>
                Manipal University Jaipur offers a wide range of academic programs in various disciplines. The programs are designed to provide a unique learning experience and are delivered by a team of experienced faculty members. The programs are designed to provide a unique learning experience and are delivered by a team of experienced faculty members.
            </span>
            <Link href={"/apply/academic"}><Button className={"mt-4"}>Apply Now</Button></Link>
        </div>
        <div className={"flex flex-col items-center border rounded py-6 px-10 gap-y-4"}>
            <span className={"text-2xl font-bold"}>Non Academic</span>
            <span>
                Manipal University Jaipur offers a wide range of academic programs in various disciplines. The programs are designed to provide a unique learning experience and are delivered by a team of experienced faculty members. The programs are designed to provide a unique learning experience and are delivered by a team of experienced faculty members.
            </span>
            <Link href={"/apply/non-academic"}><Button className={"mt-4"}>Apply Now</Button></Link>
        </div>
    </div>
}