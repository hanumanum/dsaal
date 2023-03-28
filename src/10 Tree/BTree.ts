type TNode<T> = {
    data: T;
    left: TNode<T>;
    right: TNode<T>;
    show: () => void;
} | null

export type BSTree<T> = {
    insert: (data: T) => void;
    inOrder: (node: TNode<T>) => void;
    preOrder: (node: TNode<T>) => void;
    postOrder: (node: TNode<T>) => void;
    getRoot: () => TNode<T>;
    getMin: () => T | null;
    getMax: () => T | null;
    printTree: () => void;
    find: (data: T) => TNode<T>;
    remove: (data: T) => void;
    count: () => number;
}


const Node = <T>(data: any, left: TNode<T>, right: TNode<T>): TNode<T> => {
    const show = () => {
        console.log(data);
    }

    return {
        data,
        left,
        right,
        show
    }
}


export const BSTreeFactory = <T>(): BSTree<T> => {
    let root: TNode<T> = null;
    let cnt = 0

    const insert = (data: T) => {
        let n = Node(data, null, null) as TNode<T>;
        if (root === null) {
            root = n;
            cnt++;
            return
        }

        let current: TNode<T> = root;
        let parent: TNode<T>;
        while (true) {
            parent = current;

            if (data < current.data) {
                current = current.left;
                if (current === null) {
                    parent.left = n;
                    cnt++;
                    break;
                }
            }
            else {
                current = current.right;
                if (current === null) {
                    parent.right = n;
                    cnt++;
                    break;
                }
            }

        }
    }

    const inOrder = (node: TNode<T>) => {
        if (node !== null) {
            inOrder(node.left);
            node.show();
            inOrder(node.right);
        }
    }

    const preOrder = (node: TNode<T>) => {
        if (node !== null) {
            node.show();
            preOrder(node.left);
            preOrder(node.right);
        }
    }

    const postOrder = (node: TNode<T>) => {
        if (!(node == null)) {
            postOrder(node.left);
            postOrder(node.right);
            node.show()
        }
    }

    const getRoot = () => { return root }

    const getMin = () => {
        const root = getRoot()
        const smallest = getSmallest(root)
        return (smallest) ? smallest.data : null;
    }

    const getMax = () => {
        let current = root;
        if (current === null || current === undefined)
            return null

        while (current.right !== null) {
            current = current.right;
        }

        return current.data;
    }

    const printTree = (node: any = root, level = 0) => {
        if (node === null) {
            return null;
        }

        console.log('_'.repeat(level) + node.data);

        printTree(node.left, level + 1);
        printTree(node.right, level + 1);
    }

    const getSmallest = (node: TNode<T>): TNode<T> => {
        let current = node;
        if (current === null || current === undefined)
            return null

        while (current.left !== null) {
            current = current?.left;
        }

        return current;
    }


    const find = (data: T) => {
        if (root === null)
            return null
        if (data !== 0 && !data)
            return null

        let current: TNode<T> = root;
        while (current?.data !== data) {
            if (current === null)
                return null

            if (data < current.data)
                current = current.left
            else
                current = current.right
        }

        return current
    }

    const removeNode = (node: TNode<T>, data: T) => {
        if (node === null) {
            return null;
        }

        if (data === node.data) {

            if (node.left === null && node.right === null) {
                cnt--
                return null;
            }

            if (node.left === null) {
                cnt--
                return node.right;
            }


            if (node.right === null) {
                cnt--
                return node.left;
            }

            const tempNode = getSmallest(node.right);
            if (tempNode === null)
                return null

            node.data = tempNode.data;
            node.right = removeNode(node.right, tempNode.data);

            return node;
        }
        else if (data < node.data) {
            node.left = removeNode(node.left, data);
            return node;
        }
        else {
            node.right = removeNode(node.right, data);
            return node;
        }
    }

    const remove = (data: T) => {
        root = removeNode(root, data);
    }

    const count = () => {
        return cnt;
    }

    return {
        getRoot,
        insert,
        inOrder,
        preOrder,
        postOrder,
        getMin,
        getMax,
        printTree,
        find,
        remove,
        count
    }
}



