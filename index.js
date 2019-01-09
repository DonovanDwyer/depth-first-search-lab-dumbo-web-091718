function depthFirstSearch(rootNode, vertices, edges){
  rootNode.distance = 0;
  let queue = [rootNode];
  let exploredNodes = [rootNode]
  while(queue.length > 0){
    let node = queue.pop();
    if(!node.discovered){
      node.discovered = true;
      let adjacentNodes = findAdjacent(node.name, vertices, edges)
      queue = queue.concat(adjacentNodes)
      exploredNodes = exploredNodes.concat(adjacentNodes)
    }
  }
  return exploredNodes;
}

function findAdjacent(nodeName, vertices, edges){
  let adj = edges.filter(edge => {
    return edge.includes(nodeName)
  }).map(edge => {
    return edge.filter(vertex => {
      return vertex !== nodeName
    })[0]
  }).map(vertex => {
    return vertices.find(tex => {
      return tex.name === vertex
    })
  }).filter(vertex => vertex.discovered === null)

  return adj
}
