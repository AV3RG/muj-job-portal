export default function pastYears(years: number): string[] {
    const currentYear = new Date().getFullYear();
    const yearsArray = [];
    for (let i = 0; i < years; i++) {
        yearsArray.push(`${currentYear - i}`);
    }
    return yearsArray;
}