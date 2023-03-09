import { describe, expect, test } from '@jest/globals';
import { TQueue, QueueFactory } from './Queue';

const weekdays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

describe('Queue tests', () => {

    let queue: TQueue<string>, queue2: TQueue<string>;

    beforeEach(() => {
        queue = QueueFactory()
        queue2 = QueueFactory()
        weekdays.map(queue.enqueue)
    })

    test('is referance safe', () => {
        expect(queue).not.toBe(queue2)
    })

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

});