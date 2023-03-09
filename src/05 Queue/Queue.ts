export type TQueue<T> = {
    enqueue: (element: T) => void
    dequeue: () => T | undefined
    front: () => T
    back: () => T
    toString: () => string
    empty: () => boolean
}

export const QueueFactory = <T>(): TQueue<T> => {
    const dataStore: T[] = []

    const enqueue = (element: T) => { dataStore.push(element) }
    const dequeue = () => dataStore.shift()
    const front = () => dataStore[0]
    const back = () => dataStore[dataStore.length - 1]
    const empty = () => dataStore.length === 0
    const toString = () => dataStore.toString()

    return {
        enqueue,
        dequeue,
        front,
        back,
        toString,
        empty
    }

}
