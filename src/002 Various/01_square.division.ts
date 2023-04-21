export const calcLargestSquareToCoverRectangle = (width: number, height: number): number => {

    if (width === height)
        return width

    /*     
    if (width < height) {
        let tmp = width
        width = height
        height = tmp
    } */

    const tryW = height
    if (width % tryW === 0) {
        return tryW
    }

    const rest = width % height
    return calcLargestSquareToCoverRectangle(height, rest)
}