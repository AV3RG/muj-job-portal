export default function formFieldNameAssertion(fieldName: string | null | undefined): string | never {
    if (fieldName === null || fieldName === undefined)
        throw new Error("formFieldNameAssertion: fieldName is null or undefined");
    return fieldName;
}