import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import data from "@/constants/contacts.json"

export default async function ContactPage() {

    const dataTyped = data as Array<{Office: string, Extension: number[], "Email ID": string[]}>

    return <div className={"flex"}>
        <div className={"w-full flex flex-col items-center justify-center mt-10"}>
            <div className={"text-4xl font-semibold"}>Contact Us</div>
            <div>
                <Table >
                    <TableCaption>Important MUJ Contacts</TableCaption>
                    <TableHeader>
                        <TableRow className={"text-xl"}>
                            <TableHead>Office</TableHead>
                            <TableHead>Phone</TableHead>
                            <TableHead>Extension</TableHead>
                            <TableHead>Email ID</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className={"text-lg"}>
                        {dataTyped.map((row, index) => {
                            return <TableRow key={index}>
                                <TableCell>{row["Office"]}</TableCell>
                                {index == 0 && <TableCell rowSpan={13}>0141 - 3999100</TableCell>}
                                <TableCell>{row["Extension"]}</TableCell>
                                <TableCell>
                                    {row["Email ID"].map((email, index) => {
                                        return <div key={index}>{email}</div>
                                    })}
                                </TableCell>
                            </TableRow>
                        })}
                    </TableBody>
                </Table>
            </div>
        </div>
    </div>
}