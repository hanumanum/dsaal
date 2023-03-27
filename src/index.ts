import { HashTableFactory, EnumCollisionHandlingStategy } from './08 Hash Table/HashTable';


const hashTable = HashTableFactory(101, EnumCollisionHandlingStategy.LinearProbing)
console.log(hashTable)

if (!(hashTable instanceof Error)) {
    hashTable.put("Gara", "Gara Persone")
    hashTable.put("Danny", "Danny Boy")
    hashTable.put("Cynthia", "Cynthia Girl")

    hashTable.showDistro()
    const ddd = hashTable.get("Gara")
    console.log("----", ddd)

    const bbb = hashTable.get("Danny")
    console.log("----", bbb)

    const mmm = hashTable.get("Babby")
    console.log("----", mmm)
}