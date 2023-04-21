import { describe, expect, test } from '@jest/globals';
import { qSort } from './01_qsort';

describe('testing qSort', () => {
    let arrNumbers: number[] = []
    let arrStrings: string[] = []
    beforeEach(() => {
        arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].sort((a, b) => Math.random() - 0.5)
        arrStrings = ['a', 'ba', 'co', 'de', 'ek', 'em', 'eh', 'ha', 'ia', 'jo'].sort((a, b) => Math.random() - 0.5)
    })

    test('same length', () => {
        const qSortedNumbers = qSort(arrNumbers)
        const qSortedStrings = qSort(arrStrings)
        expect(qSortedNumbers.length).toBe(arrNumbers.length)
        expect(qSortedStrings.length).toBe(arrStrings.length)
    })

    test('values numbers', () => {
        const qSortedNumbers = qSort(arrNumbers)
        const bSortedNumbers = [...arrNumbers].sort((a, b) => a - b)
        expect(qSortedNumbers).toEqual(bSortedNumbers)
    })

    test('values strings', () => {
        const qSortedStrngs = qSort(arrStrings)
        const bSortedStrings = [...qSortedStrngs].sort((a, b) => a > b ? 1 : -1)
        expect(qSortedStrngs).toEqual(bSortedStrings)

    })

});