import { Button } from "@/components/ui/button";
import {DropdownMenu, DropdownMenuContent,
    DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default async function Header() {
    return <header>
        <div className={"flex items-center justify-between p-10 max-h-20"}>
            <div><img src={"/navbarlogo.jpeg"} className={"object-contain"} alt={"Logo"}/></div>
            <div className={"gap-x-6 flex"}>
                <div><Button variant={"outline"}>Home</Button></div>
                <div className={"self-center"}>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant={"default"}>Apply</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Apply</DropdownMenuLabel>
                        <DropdownMenuSeparator/>
                        <DropdownMenuItem>Academic</DropdownMenuItem>
                        <DropdownMenuItem>Non-Academic</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                </div>
                <div>
                    <Link href={"/contact"}>
                        <Button variant={"outline"}>Contact</Button>
                    </Link>
                </div>
            </div>
        </div>
    </header>
}