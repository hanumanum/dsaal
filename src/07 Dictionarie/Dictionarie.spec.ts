import { describe, expect, test } from '@jest/globals';
import { DicitionarieFactory, TDicitionarie } from './Dictionarie';


describe('dicitionnarie tests', () => {

    let dicitionnarie: TDicitionarie<string>, dicitionnarie2: TDicitionarie<string>;

    beforeEach(() => {
        dicitionnarie = DicitionarieFactory()
        dicitionnarie2 = DicitionarieFactory()

    })

    test('is referance safe', () => {
        expect(dicitionnarie).not.toBe(dicitionnarie2)
    })

    test('is empty', () => {
        expect(dicitionnarie.count()).toBe(0)
    })


    test('add and find', () => {
        dicitionnarie.add("baba", "karabata")
        dicitionnarie.add("mamaka", "karbanaka")
        dicitionnarie.add("shush", "markashus")
        dicitionnarie.add("gggg", "zarkramangggg")

        expect(dicitionnarie.count()).toBe(4)
        expect(dicitionnarie.find("baba")).toBe("karabata")
        expect(dicitionnarie.find("shush")).toBe("markashus")
        expect(dicitionnarie.find("gggg")).toBe("zarkramangggg")
    })

    test('remove', () => {
        dicitionnarie.add("baba", "karabata")
        dicitionnarie.add("mamaka", "karbanaka")
        dicitionnarie.add("shush", "markashus")

        dicitionnarie.remove("baba")
        
        expect(dicitionnarie.count()).toBe(2)
        expect(dicitionnarie.find("baba")).toBeNull()
    })


    test('clear', () => {
        dicitionnarie.add("baba", "karabata")
        dicitionnarie.add("mamaka", "karbanaka")
        dicitionnarie.add("shush", "markashus")

        expect(dicitionnarie.count()).toBe(3)
        dicitionnarie.clear()

        expect(dicitionnarie.count()).toBe(0)
    })


    /*
    test('is empty', () => {
        expect(queue.empty()).toBeFalsy()

        while(!queue.empty()) {
            queue.dequeue()
        }

        expect(queue.empty()).toBe(true)
    })


    test('front and end', () => {
        expect(queue.front()).toBe("sunday")
        expect(queue.back()).toBe("saturday")

        expect(queue.dequeue()).toBe("sunday")
        expect(queue.front()).toBe("monday")
    })

    test('enqueue', () => {
        queue.enqueue("newday")
        expect(queue.back()).toBe("newday")
        expect(queue.front()).toBe("sunday")
    })

    test('toStrang', ()=> {
        expect(queue.toString()).toBe(weekdays.toString())
    })
*/
});