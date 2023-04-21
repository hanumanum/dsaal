import { describe, expect, test } from '@jest/globals';
import { calcLargestSquareToCoverRectangle } from './01_square.division';
import { getRandomInt } from '../utils/random';

describe('testing calcLargestSquareToCoverRectangle function', () => {

    test('equals', () => {
        const width = 600, height = 600
        const dd = calcLargestSquareToCoverRectangle(width, height)

        expect(dd).toBe(width)
        expect((width * height) % Math.pow(dd, 2) === 0).toBe(true)

    })

    test('non equal sides', () => {
        for (let i = 1; i < 1200; i += 20) {
            for (let j = 1; j < 3000; j += getRandomInt(20)) {
                const dd = calcLargestSquareToCoverRectangle(i, j)
                expect((i * j) % Math.pow(dd, 2) === 0).toBe(true)
            }
        }
    })

});