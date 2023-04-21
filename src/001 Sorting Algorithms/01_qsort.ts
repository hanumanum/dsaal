import { getRandomInt } from "../utils/random"

type arrayType = (string | number)[]

export const qSort = (arr: arrayType): arrayType => {
    if (arr.length < 2) 
        return arr

    const pivotIndex = getRandomInt(arr.length) //To be О(п log п) in avg case instead of O(n^2) if we take a first or last element as a pivot 
    const pivot = arr[pivotIndex] 
    
    const less = arr.filter((v) => v < pivot)
    const more = arr.filter((v) => v > pivot)

    return [...qSort(less), pivot, ...qSort(more)]
}