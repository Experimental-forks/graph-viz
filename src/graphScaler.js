export default function(graph, graphSize) {

    const nodes = graph.nodes;
    const edges = graph.edges;

    const size = graphSize[0] < graphSize[1] ? graphSize[0] : graphSize[1];
    let minX = 99999999999999999;
    let maxX = -99999999999999999;
    let minY = 99999999999999999;
    let maxY = -99999999999999999;

    nodes.forEach(function(node) {
        if (node.x > maxX) maxX = node.x;
        if (node.x < minX) minX = node.x;
        if (node.y > maxY) maxY = node.y;
        if (node.y < minY) minY = node.y;
    });

    const xScale = maxX - minX;
    const yScale = maxY - minY;

    nodes.forEach(function(node) {
        node.orix = node.x;
        node.oriy = node.y;
        node.x = (node.x - minX) / xScale * size;
        node.y = (node.y - minY) / yScale * size;
    });

    edges.forEach(function(edge) {
        const controlPoints = edge.controlPoints;
        if (controlPoints) {
            controlPoints.forEach(function(cp) {
                cp.x = (cp.x - minX) / xScale * size;
                cp.y = (cp.y - minY) / yScale * size;
            });
        }
    });
}
