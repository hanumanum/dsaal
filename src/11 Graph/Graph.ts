type TVertex = {
    label: string,
    id: number,
    [key: string]: any
}

export const VertexFactory = () => {
    let id = 0
    const Vertex = (label: string, obj?: any): TVertex => {
        const _label = label
        const _id = id++

        return {
            ...obj,
            label: _label,
            id: _id
        }
    }

    return Vertex
}


export const Graph = () => {
    const adjacency = Array.from({ length: 1 }, () => (new Array()))
    let vertices: number = 0
    let visited: boolean[] = []
    let edgeTo: TVertex[] = []
    let edges: number = 0

    const resetVisited = () => {
        const visited = new Array(adjacency.length).fill(false)
        return visited
    }

    const addEdge = (v: TVertex, w: TVertex) => {
        (adjacency[v.id]) ? adjacency[v.id].push(w) : adjacency[v.id] = [w];
        (adjacency[w.id]) ? adjacency[w.id].push(v) : adjacency[w.id] = [v];
        edges++
        visited = resetVisited()
    }


    const dfs = (v: TVertex) => {
        visited = resetVisited()
        _dfs(v)
    }

    const bfs = (v: TVertex) => {
        visited = resetVisited()
        _bfs(v)
    }

    //Depth-First Search
    const _dfs = (v: TVertex) => {
        visited[v.id] = true
        console.log(v.label)
        if (adjacency[v.id] !== undefined) {
            adjacency[v.id].forEach(w => {
                if (!visited[w.id]) {
                    _dfs(w)
                }
            })
        }
    }

    //Breadth-First Search
    const _bfs = (v: TVertex) => {
        if (adjacency[v.id] === undefined) {
            console.log(v.label)
            return
        }

        const queue: TVertex[] = []
        visited[v.id] = true
        queue.push(v)

        while (queue.length > 0) {
            v = queue[0]
            console.log(v.label)
            queue.shift()

            adjacency[v.id].forEach(w => {
                if (!visited[w.id]) {
                    visited[w.id] = true
                    queue.push(w)
                }
            })
        }

    }


    const showGraph = () => {
        console.table(adjacency)
    }

    const getEdgesOf = (v: TVertex) => {
        return adjacency[v.id] || []
    }

    const bfsShortestPath = (startNode: TVertex, endNode: TVertex) => {
        visited = resetVisited()

        if (startNode === endNode)
            return [startNode]

        const queue = []
        const initalPath = [startNode]
        queue.push(initalPath)

        while (queue.length > 0) {
            const path: any = queue[0]
            queue.shift()
            const node = path[path.length - 1]

            if (!visited[node.id]) {
                visited[node.id] = true

                const neighbors = getEdgesOf(node)
                for (let i = 0; i < neighbors.length; i++) {
                    const newPath = [...path, neighbors[i]]

                    if (neighbors[i] === endNode) {
                        return newPath
                    }

                    queue.push(newPath)
                }
            }
        }

        return []

    }

    return {
        addEdge,
        getEdgesOf,
        showGraph,
        dfs,
        bfs,
        bfsShortestPath
    }
}


export const testS = () => {
    //Some tests

    const createNewVertex = VertexFactory();
    const grap = Graph();

    const v0 = createNewVertex("v0");
    const v1 = createNewVertex("v1");
    const v2 = createNewVertex("v2");
    const v3 = createNewVertex("v3");
    const v4 = createNewVertex("v4");
    const v5 = createNewVertex("v5");
    const v6 = createNewVertex("v6");


    grap.addEdge(v0, v1);
    grap.addEdge(v1, v2);
    grap.addEdge(v2, v3);
    grap.addEdge(v0, v3);
    grap.addEdge(v5, v6);

    //grap.addEdge(v3, v4);
    //grap.addEdge(v0, v3);
    //grap.addEdge(v1, v3);
    //grap.addEdge(v3, v4);

    grap.showGraph()
    grap.dfs(v4)
    console.log('==============');
    const path = grap.bfsShortestPath(v4, v6)
    console.log(path)

    const path1 = grap.bfsShortestPath(v0, v3)
    console.log(path1)
}

