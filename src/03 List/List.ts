export type TList<T> = {
    clear: () => void
    find: (element: T) => number
    toString: () => string
    insert: (element: T, after: any) => boolean
    append: (element: T) => void
    remove: (element: T) => boolean
    front: () => void
    end: () => void
    prev: () => void
    next: () => void
    currPos: () => number
    moveTo: (position: number) => void
    getElement: () => T
    length: () => number
}

export const ListFactory = <T>(): TList<T> => {
    let listSize = 0;
    let pos = 0;
    let dataStore: T[] = [];

    const clear = () => {
        dataStore = [];
        listSize = pos = 0;
    };

    const find = (element: any) => {
        for (let i = 0; i < dataStore.length; i++) {
            if (dataStore[i] === element)
                return i;
        }
        return -1;
    };

    const toString = () => dataStore.toString();

    const insert = (element: any, after: any) => {
        const insertPos = find(after);

        if (insertPos < 0)
            return false

        dataStore.splice(insertPos + 1, 0, element);
        ++listSize;
        return true;
    };

    const append = (element: any) => {
        dataStore[listSize++] = element;
    };

    const remove = (element: any) => {
        const foundAt = find(element);
        if (foundAt > -1) {
            dataStore.splice(foundAt, 1);
            --listSize;
            return true;
        }
        return false;
    };

    const front = () => (pos = 0);

    const end = () => (pos = listSize - 1);

    const prev = () => (pos > 0) && --pos;

    const next = () => (pos < listSize - 1) && ++pos;

    const currPos = () => pos;

    const moveTo = (position: number) => pos = position;

    const getElement = () => dataStore[pos];

    const length = () => listSize;
    
    return {
        clear,
        find,
        toString,
        insert,
        append,
        remove,
        front,
        end,
        prev,
        next,
        currPos,
        moveTo,
        getElement,
        length
    }
}