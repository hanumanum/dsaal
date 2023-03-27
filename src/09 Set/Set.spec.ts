import { describe, expect, test } from '@jest/globals';
import { TSet, SetFactory } from './Set';


describe('Sets tests', () => {
    let set: TSet, set2: TSet;

    beforeEach(() => {
        set = SetFactory()
        set2 = SetFactory()
    })

    test('is referance safe', () => {
        expect(set).not.toBe(set2)
    })

    test('is empty', () => {
        expect(set.size()).toBe(0)
    })

    test('add, remove, contains, and count', () => {
        set.add("Sanga")
        set.add("Sanga")
        set.add("Maga")
        expect(set.size()).toBe(2)
        expect(set.contains("Sanga")).toBe(true)
        expect(set.contains("Maga")).toBe(true)
        expect(set.contains("Barkakaka")).toBe(false)

        set.remove("Sanga")
        expect(set.size()).toBe(1)
        expect(set.contains("Sanga")).toBe(false)
    })

    test('union tests', () => {
        const set1 = SetFactory()
        const set2 = SetFactory()
        const set3 = set1.union(set2)
        expect(set3.size()).toBe(0)

        set1.add("Sanga")
        set1.add("Maga")
        set1.add("Gara")
        set2.add("Sanga")
        set2.add("Baranga")

        const set5 = set1.union(set2)
        expect(set5.size()).toBe(4)
        expect(set5.contains("Sanga")).toBe(true)
        expect(set5.toArray()).toEqual(expect.arrayContaining(["Sanga", "Maga", "Gara", "Baranga"]))
    })

    test('intersection tests', () => {
        const set1 = SetFactory()
        const set2 = SetFactory()
        const set3 = set1.intersect(set2)
        expect(set3.size()).toBe(0)

        set1.add("Sanga")
        set1.add("Maga")
        set1.add("Gara")
        set2.add("Sanga")
        set2.add("Baranga")
        set2.add("Maga")

        const set5 = set1.intersect(set2)
        expect(set5.size()).toBe(2)
        expect(set5.contains("Sanga")).toBe(true)
        expect(set5.contains("Baranga")).toBe(false)
        expect(set5.toArray().sort()).toEqual(["Maga","Sanga"].sort())
    })

    test(('subset tests'), () => {
        set.add("Sanga")
        set.add("Bhanga")
        set.add("Maga")

        set2.add("Sanga")
        set2.add("Bhanga")

        expect(set.subset(set2)).toBe(true)
        expect(set2.subset(set)).toBe(false)
    })


    test(('difference tests'), () => {
        set.add("Sanga")
        set.add("Bhanga")
        set.add("Maga")

        set2.add("Sanga")
        set2.add("Bhanga")
        set2.add("Rabanga")

        const diff1 = set.difference(set2)
        expect(diff1.toArray().sort()).toEqual(["Maga"].sort())

        const diff2 = set2.difference(set)
        expect(diff2.toArray().sort()).toEqual(["Rabanga"].sort())

    })

})