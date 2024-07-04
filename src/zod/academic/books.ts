import * as zod from 'zod';
import bookWrittenAs from '@/constants/book_written_as.json';

export default zod.object({
    details: zod.string().nonEmpty(),
    isbn: zod.string().nonEmpty(),
    writtenAs: zod.string().nonEmpty().fromOptions(bookWrittenAs),
}).array()
