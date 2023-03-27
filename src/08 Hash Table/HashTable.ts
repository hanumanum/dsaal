export type THashTable = {
    put: (key: string, value: any) => void
    get: (key: string) => any
    showDistro: () => void
}

export enum EnumCollisionHandlingStategy {
    LinearProbing, //open-addressing hashing
    SeparateChaining
}


const isPrimeNumber = (length: number) => {
    for (let i = 2, s = Math.sqrt(length); i <= s; i++)
        if (length % i === 0) return false;
    return length > 1;
}

export const HashTableFactory = (length: number, collisionStrategy: EnumCollisionHandlingStategy): THashTable | Error => {
    if (length < 101) //This is the recommended minimal number of slots for a hash table
        return new Error('Length must be more then 101')
    if (!isPrimeNumber(length))
        return new Error('Length must be a prime number')

    const hashStore = (collisionStrategy === EnumCollisionHandlingStategy.SeparateChaining)
        ? Array(length).fill(null).map(() => new Array())
        : Array(length).fill(null)

    const hornersMethodHash = (value: string): number => {
        const H = 37 //31
        const total = value.split("").reduce((acc: number, curr: string) => acc + H * acc + curr.charCodeAt(0), 0)
        return (total % length)
    }

    const SeparateChaining = {
        put: (key: string, value: any) => {
            const index = hornersMethodHash(key)
            hashStore[index].push([key, value])
        },
        get: (key: string) => {
            const index = hornersMethodHash(key)
            return hashStore[index].find((val: any) => val[0] === key) || null
        }
    }

    const LinearProbing = {
        put: (key: string, value: any) => {
            let index = hornersMethodHash(key)
            if (hashStore[index] === null) {
                hashStore[index] = [key, value]
            }
            else {
                while (hashStore[index] !== null) {
                    index++
                }
                hashStore[index] = [key, value]
            }
        },
        get: (key: string) => {
            let index = hornersMethodHash(key)
            if (hashStore[index] !== null && hashStore[index][0] === key) {
                return hashStore[index]
            }
            else {
                while (hashStore[index] !== null && hashStore[index][0] !== key) {
                    index++
                }

                return hashStore[index]
            }
        }
    }

    const put = (key: string, value: any) => {
        if (collisionStrategy === EnumCollisionHandlingStategy.SeparateChaining)
            return SeparateChaining.put(key, value)
        if (collisionStrategy === EnumCollisionHandlingStategy.LinearProbing)
            return LinearProbing.put(key, value)
    }

    const get = (key: string): any | null => {
        if (collisionStrategy === EnumCollisionHandlingStategy.SeparateChaining)
            return SeparateChaining.get(key)
        if (collisionStrategy === EnumCollisionHandlingStategy.LinearProbing)
            return LinearProbing.get(key)
    }

    const showDistro = () => {
        hashStore
            .filter((val) => val !== null && val.length > 0)
            .map((val, i) => console.log(`${i}: ${val}`))
    }

    return {
        put,
        showDistro,
        get
    }

}
