export type TSet = {
    add: (value: any) => void;
    remove: (value: any) => any;
    contains: (value: any) => boolean;
    toArray: () => any[];
    size: () => number;
    union: (set: TSet) => TSet;
    intersect: (set: TSet) => TSet;
    subset: (set: TSet) => boolean;
    difference: (set: TSet) => TSet;
    show: () => void;
}


export const SetFactory = (): TSet => {
    const dataStore: any[] = []

    const toArray = () => [...dataStore]

    const add = (value: any) => {
        if (dataStore.includes(value)) return
        dataStore.push(value)
        dataStore.sort()
    }

    const remove = (value: any) => {
        const index = dataStore.indexOf(value)
        return dataStore.splice(index, 1)
    }

    const size = () => dataStore.length
    const contains = (val: any) => dataStore.includes(val)  //Do not know algorithm of includes, may be a new crafted algorithm will be better

    const union = (set: TSet) => {
        const tempSet = SetFactory()
        set.toArray().map(tempSet.add)
        dataStore.map(tempSet.add)
        return tempSet
    }

    const intersect = (set: TSet) => {
        const tempSet = SetFactory()
        dataStore
            .filter(set.contains)
            .map(tempSet.add)

        return tempSet
    }

    const subset = (set: TSet) => {
        if (set.size() > dataStore.length)
            return false

        for (let v of set.toArray()) {
            if (!dataStore.includes(v))
                return false
        }

        return true
    }

    const difference = (set: TSet) => {
        const tempSet = SetFactory()
        dataStore
            .filter(v => !set.contains(v))
            .map(tempSet.add)

        return tempSet
    }

    const show = () => console.table(dataStore)

    return {
        add,
        remove,
        size,
        contains,
        toArray,
        union,
        intersect,
        subset,
        difference,
        show
    }
}
