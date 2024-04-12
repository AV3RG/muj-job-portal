import { Button } from "@/components/ui/button";

export default function SubmitSection() {
    return (
        <div className={"flex justify-center"}>
            <input
                type="submit"
                className={"w-1/2 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"}
            />
        </div>
    )
}