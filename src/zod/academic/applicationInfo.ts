import * as zod from "zod";
import designations from "@/constants/designations.json";
import faculties from "@/constants/faculties.json";

const facultyOptions = Object.keys(faculties);
const departmentOptions = Object.values(faculties).flat();
const schoolOptions = Object.values(faculties).flat();

require('@/zod/extensions/prototypes')

export default zod.object({
    designation: zod.string().nonEmpty()
        .fromOptions(designations),
    faculty: zod.string().nonEmpty()
        .fromOptions(facultyOptions),
    department: zod.string().nonEmpty(),
    school: zod.string().nonEmpty(),
})