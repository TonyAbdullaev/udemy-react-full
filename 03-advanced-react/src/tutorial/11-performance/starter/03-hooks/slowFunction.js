export const slowFunction = () => {
    let value = 0;
    for (let i = 0; i < 500000000; i++) {
        value += 1;
    }
    return value;
}