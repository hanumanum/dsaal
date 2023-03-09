import { describe, expect, test } from '@jest/globals';
import { TLLNode, LinkedList, LinkedListFactory } from './LinkedList';

const futark = ['fehu', 'uruz', 'ansuz']

describe('Linked List tests', () => {

    let linkedList: LinkedList<string>, linkedList2: LinkedList<string>;

    beforeEach(() => {
        linkedList = LinkedListFactory()
        linkedList2 = LinkedListFactory()
        linkedList.insert(futark[0], "head")
        linkedList.insert(futark[1], futark[0])
        linkedList.insert(futark[2], futark[1])
    })

    test('is referance safe', () => {
        expect(linkedList).not.toBe(linkedList2)
    })


    test('check data', () => {
        for(const rune of futark){
            expect(linkedList.find(rune)?.element).toBe(rune)
        }
        expect(linkedList.length()).toBe(futark.length)
    })

    test('insert', () => {
        linkedList.insert("thurisaz", "uruz")
        expect(linkedList.length()).toBe(futark.length+1)
    })

    test('remove', () => {
        linkedList.remove("ansuz")
        expect(linkedList.length()).toBe(futark.length-1)
    })

    test('is empty', () => {
        for (let rune of futark) {
            linkedList.remove(rune)
        }

        expect(linkedList.length()).toBe(0)
    })

    test('iteration test', ()=> {
        let next = linkedList.head()?.next

        for(let rune of futark){
            expect(next?.element).toBe(rune)
            next = next?.next
        }

        expect(linkedList.length()).toBe(futark.length)

    })


});