import { qSort } from "./001 Sorting Algorithms/01_qsort";

const dd =  qSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(dd)


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].sort((a,b)=>Math.random()-0.5)
const dd1 =  qSort(arr);
console.log(arr)
console.log(dd1)
