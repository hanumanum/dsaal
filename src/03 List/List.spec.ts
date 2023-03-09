import { describe, expect, test } from '@jest/globals';
import { TList, ListFactory } from './List';

describe('List ADT tests, simple values', () => {
    let list: TList<string> = ListFactory()
    beforeEach(() => {
        list.clear()
        list.append("Sun")
        list.append("Moon")
        list.append("Jupiter")
        list.append("Saturn")
    })


    test('clear', () => {
        list.clear()
        expect(list.length()).toBe(0)
    })

    test('find 3 elements', () => {
        expect(list.find("Sun")).toBe(0)
        expect(list.find("Moon")).toBe(1)
        expect(list.find("Jupiter")).toBe(2)
    })

    test("insert element", () => {
        list.insert("Venera", "Moon")
        expect(list.length()).toBe(5)
        expect(list.find("Venera")).toBe(2)
    })

    test('4 elements + append one', () => {
        expect(list.length()).toBe(4)
        list.append("Venera")
        expect(list.length()).toBe(5)
    });

    test('remove element', () => {
        list.remove("Moon")
        expect(list.length()).toBe(3)
        expect(list.find("Moon")).toBe(-1)
    })

    test('front & next', () => {
        list.front()
        expect(list.currPos()).toBe(0)
        expect(list.next()).toBe(1)
    })

    test('end & prev', () => {
        list.end()
        expect(list.currPos()).toBe(3)
        expect(list.prev()).toBe(2)
    })

    test('move to position', () => {
        list.moveTo(1)
        expect(list.currPos()).toBe(1)
        expect(list.getElement()).toBe("Moon")
    })

    test('lenght', () => {
        expect(list.length()).toBe(4)
    })

});