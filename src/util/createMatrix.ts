export function createMatrix<T>(
    width: number,
    height: number,
    fill: T
): Array<Array<T>> {
    const arr = new Array<Array<T>>(height);

    for (let i = 0; i < height; i++) {
        arr[i] = new Array<T>(width).fill(fill);
    }

    return arr;
}
