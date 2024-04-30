export function calculateImc(weight: number, height: number): number {
    return Number((weight / (height * height)).toFixed(2));
}