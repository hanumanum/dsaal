export type TDicitionarie<T> = {
    add: (key: string, value: any) => void
    find: (key: string) => T | null
    remove: (key: string) => void
    showAll: () => void
    count: () => number
    clear: () => void
}

export interface IDataStore<T> {
    [key: string]: T;
}

export const DicitionarieFactory = <T>(): TDicitionarie<T> => {
    const dataStore: IDataStore<T> = {}

    const iterateOver = (callback: (key: string) => void) => Object.keys(dataStore).map(callback)

    const add = (key: string, value: T) => { dataStore[key] = value }
    const find = (key: string) => dataStore[key] || null
    const remove = (key: string) => { delete dataStore[key] }
    const showAll = () => iterateOver(key => console.log(`${key} -> ${dataStore[key]}`))
    const count = () => Object.keys(dataStore).length
    const clear = () => iterateOver(key => delete dataStore[key])

    return {
        add,
        find,
        remove,
        showAll,
        count,
        clear
    }

}
