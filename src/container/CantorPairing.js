export default function cantorPair (k1, k2) {
    const sum = k1 + k2;
    const triangularNumberOfSum = sum * (sum + 1)/2;
    return triangularNumberOfSum + k2;
}