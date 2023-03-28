import { BSTreeFactory } from './10 Tree/BTree';

const BSTree = BSTreeFactory();

[554, -1, 0, 21, 0, 19, 22, 0, 10, 18, 0, 15, 12, 0, 120, 0, 11].map(BSTree.insert)

/*console.log(BSTree.inOrder(BSTree.getRoot()))
console.log(BSTree.preOrder(BSTree.getRoot()))
console.log(BSTree.postOrder(BSTree.getRoot()))
*/
//console.log(BSTree.inOrder(BSTree.getRoot()))
//console.log(BSTree.getMin())
//console.log(BSTree.getMax())
//console.log(BSTree.printTree())
console.log(BSTree.printTree())
BSTree.remove(120)
console.log(BSTree.printTree())

console.log("-----------find ----------\n", BSTree.find(0))
