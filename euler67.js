function getSumofGreatestPath(graph) {
    
    for (let row = 0; row < graph.length - 1; row++) {
        graph[row + 1][0] += graph[row][0];
    
        for (let col = 0; col < graph[row].length - 1; col++) {
            graph[row + 1][col + 1] += Math.max(graph[row][col], graph[row][col + 1])
        }


        graph[row + 1][graph[row].length] += graph[row][graph[row].length - 1];
    }
    return Math.max(...graph[graph.length - 1]);
}
    