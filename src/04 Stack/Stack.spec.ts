import { describe, expect, test } from '@jest/globals';
import { TStack, StackFactory, StackFactoryV2 } from './Stack';

const objects = ['sun','moon','jupiter','saturn']

describe('Stack tests, simple values', () => {
    
    let stack: TStack = StackFactoryV2()
    let stack2: TStack = StackFactoryV2()
    beforeEach(() => {
        stack.clear()
        objects.map(stack.push)
    })

    test('is referance safe', () => {
        expect(stack).not.toBe(stack2)
    })

    test('is empty', () => {
        stack.clear()
        expect(stack.length()).toBe(0)
    })

    test('is well formed and test pop', () => {
        const objectsReversed = objects.reverse()
        for(const obj of objectsReversed){
            expect(stack.pop()).toBe(obj)
        }
    })

    test('test peek', () => {
        const picked = stack.peek()
        expect(picked).toBe(objects[objects.length-1])
    })

    test('test length', () => {
        expect(stack.length()).toBe(objects.length)
        stack.push('venus')
        stack.push('mars')
        expect(stack.length()).toBe(objects.length+2)
        stack.clear()
        expect(stack.length()).toBe(0)
    })

});