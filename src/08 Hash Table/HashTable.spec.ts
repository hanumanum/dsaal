import { describe, expect, test } from '@jest/globals';
import { HashTableFactory, EnumCollisionHandlingStategy, THashTable } from './HashTable';


describe('hashTable (SeparateChaining) tests', () => {

    let hashTable: THashTable | Error, hashTable2: THashTable | Error;

    beforeEach(() => {
        hashTable = HashTableFactory(101, EnumCollisionHandlingStategy.SeparateChaining)
        hashTable2 = HashTableFactory(101, EnumCollisionHandlingStategy.SeparateChaining)
    })

    test('is referance safe', () => {
        expect(hashTable).not.toBe(hashTable2)
    })

    test('is instance of Error (length)', () => {
        const hashTable3 = HashTableFactory(99, EnumCollisionHandlingStategy.SeparateChaining)
        expect(hashTable3).toBeInstanceOf(Error)
        expect(hashTable3).toEqual(new Error('Length must be more then 101'))
    })

    test('is instance of Error (not prime primary)', () => {
        const hashTable4 = HashTableFactory(122, EnumCollisionHandlingStategy.SeparateChaining)
        expect(hashTable4).toBeInstanceOf(Error)
        expect(hashTable4).toEqual(new Error('Length must be a prime number'))
    })
    

    test('put and get', () => {
        if (!(hashTable instanceof Error)) {
            hashTable.put("Gara", "Gara Persone")
            hashTable.put("Danny", "Danny Boy")
            hashTable.put("Cynthia", "Cynthia Girl")

            expect(hashTable.get("Gara")).toEqual(["Gara", "Gara Persone"])
            expect(hashTable.get("Danny")).toEqual(["Danny", "Danny Boy"])
            expect(hashTable.get("gggg")).toBeNull()
        }
    })


})


describe('hashTable (LinearProbing) tests', () => {

    let hashTable: THashTable | Error, hashTable2: THashTable | Error;

    beforeEach(() => {
        hashTable = HashTableFactory(101, EnumCollisionHandlingStategy.LinearProbing)
        hashTable2 = HashTableFactory(101, EnumCollisionHandlingStategy.LinearProbing)
    })

    test('is referance safe', () => {
        expect(hashTable).not.toBe(hashTable2)
    })

    test('is instance of Error (length)', () => {
        const hashTable3 = HashTableFactory(99, EnumCollisionHandlingStategy.SeparateChaining)
        expect(hashTable3).toBeInstanceOf(Error)
        expect(hashTable3).toEqual(new Error('Length must be more then 101'))
    })

    test('is instance of Error (not prime primary)', () => {
        const hashTable4 = HashTableFactory(122, EnumCollisionHandlingStategy.SeparateChaining)
        expect(hashTable4).toBeInstanceOf(Error)
        expect(hashTable4).toEqual(new Error('Length must be a prime number'))
    })
    

    test('put and get', () => {
        if (!(hashTable instanceof Error)) {
            hashTable.put("Gara", "Gara Persone")
            hashTable.put("Danny", "Danny Boy")
            hashTable.put("Cynthia", "Cynthia Girl")

            expect(hashTable.get("Gara")).toEqual(["Gara", "Gara Persone"])
            expect(hashTable.get("Danny")).toEqual(["Danny", "Danny Boy"])
            expect(hashTable.get("gggg")).toBeNull()
        }
    })


})