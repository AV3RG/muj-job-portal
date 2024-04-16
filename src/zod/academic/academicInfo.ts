import * as zod from 'zod';

export default zod.array(zod.object({
    name: zod.string(),
    age: zod.number(),
    email: zod.string().email(),
    address: zod.string(),
    phone: zod.string(),
}))