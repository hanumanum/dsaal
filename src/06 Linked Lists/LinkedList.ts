export type TLLNode<T> = {
    element: T | "head",
    next: TLLNode<T>
} | null

export type LinkedList<T> = {
    find: (element: T) => TLLNode<T> | null
    insert: (element: T, after: T) => boolean
    remove: (element: T) => boolean
    display: () => void,
    length: () => number,
    head: () => TLLNode<T>
}

export const LinkedListFactory = <T>(): LinkedList<T> => {
    let _length = 0;

    const head: TLLNode<T> = {
        element: "head",
        next: null
    }

    const find = (element: T) => {
        let currNode = head;

        while (currNode.element !== element) {
            if (currNode.next === null)
                return null

            currNode = currNode.next;
        }

        return currNode;
    }

    const insert = (element: T, after: T) => {
        const newNode: TLLNode<T> = {
            element,
            next: null
        }

        const currNode = find(after);
        if (currNode === null)
            return false

        newNode.next = currNode.next;
        currNode.next = newNode;
        _length++;

        return true;
    }

    const length = () => _length;

    const display = () => {
        let currNode = head;

        while (currNode.next !== null) {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    }


    const findPrevious = (item: T) => {
        let currNode = head;
        while (!(currNode.next == null) &&
            (currNode.next.element != item)) {
            currNode = currNode.next;
        }
        return currNode;
    }

    const remove = (item: T) => {
        let prevNode = findPrevious(item);
        if (prevNode.next !== null) {
            prevNode.next = prevNode.next.next;
            _length--;
            return true;
        }

        return false;
    }


    return {
        insert,
        find,
        display,
        length,
        remove,
        head: () => head
    }

}