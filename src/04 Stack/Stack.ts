export type TStack<T> = {
    push: (element: T) => void,
    pop: () => T | undefined,
    peek: () => T,
    length: () => number,
    clear: () => void
}


//In this implementation poped values are not really deleted from the stack. 
//This is not a memory efficient solution.
export const StackFactory = <T>(): TStack<T> => {
    let top = 0
    const dataStore: T[] = [];

    const push = (element: T) => dataStore[top++] = element;

    const pop = () => dataStore[--top];

    const peek = () => dataStore[top - 1];

    const length = () => top;

    const clear = () => top = 0;

    return {
        push,
        peek,
        pop,
        length,
        clear
    }
}


//In this implementation poped values are really deleted from the stack. 
//This is a memory efficient solution.
export const StackFactoryV2 = <T>(): TStack<T> => {
    let dataStore: T[] = [];

    const push = (element: T) => { dataStore.push(element) };

    const pop = () => dataStore.pop();

    const peek = () => dataStore[dataStore.length - 1];

    const length = () => dataStore.length;

    const clear = () => { dataStore = [] };

    return {
        push,
        peek,
        pop,
        length,
        clear
    }
}