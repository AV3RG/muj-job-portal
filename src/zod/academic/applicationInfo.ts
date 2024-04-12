import * as zod from "zod";
import designations from "@/constants/designations.json";
import faculties from "@/constants/faculties.json";

const facultyOptions = Object.keys(faculties);
const departmentOptions = Object.values(faculties).flat();
const schoolOptions = Object.values(faculties).flat();

export default zod.object({
    designation: zod.string().min(1)
        .refine((value) => designations.includes(value), "Invalid designation!"),
    faculty: zod.string().min(1, "This field is required!")
        .refine((value) => facultyOptions.includes(value), "Invalid faculty!"),
    department: zod.string().min(1, "This field is required!"),
    school: zod.string().min(1, "This field is required!"),
})