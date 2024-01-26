import * as zod from "zod"

export default zod.object({
    username: zod.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})
