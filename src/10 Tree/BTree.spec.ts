import { describe, expect, test } from '@jest/globals';
import { BSTreeFactory, BSTree } from './BTree';


describe('Sets tests', () => {
    const values  = [554, -1, 21, 0, 19, 22, 10, 18, 15, 12, 0, 120, 0, 11]

    let BSTree: BSTree<number>;
    beforeEach(() => {
        BSTree = BSTreeFactory();
        values.map(BSTree.insert)
    })
    
    test('to be defind', () => {
        const BTree = BSTreeFactory();
        expect(BTree.count).toBeDefined();
    });

    test('all data in', () => {
        expect(BSTree.count()).toEqual(values.length);
        
        BSTree.remove(554)
        expect(BSTree.count()).toEqual(values.length - 1);
    
        BSTree.remove(11)
        expect(BSTree.count()).toEqual(values.length - 2);
    });


    test('insert', () => {
        BSTree.insert(5555)
        expect(BSTree.count()).toEqual(values.length+1);
        
        expect(BSTree.find(5555)).toBeDefined();
        expect(BSTree.find(5555)?.data).toEqual(5555);
    });

})