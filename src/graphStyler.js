export default function(data) {

    const nodes = data.nodes;
    const edges = data.edges;

    nodes.forEach(node => {
        if (!node.style) {
            node.style = {};
        }
        node.style.lineWidth = 1;
        node.style.stroke = '#666';
        node.style.fill = 'steelblue';
        switch (node.class) {
            case 'c0': {
                node.shape = 'circle';
                //node.style.fill = 'orange';
                break;
            }
            case 'c1': {
                node.shape = 'rect';
                node.size = [ 35, 20 ];
                break;
            }
            case 'c2': {
               node.shape = 'ellipse';
               node.size = [ 35, 20 ];
               break;
            }
        }
    });
    edges.forEach(edge => {
        if (!edge.style) {
            edge.style = {};
        }
        edge.shape = 'line'; // or 'cubic' etc
        edge.style.endArrow = edge.directed;
        edge.style.lineWidth = edge.weight;
        edge.style.opacity = 0.6;
        edge.style.stroke = edge.directed ? 'orange' : 'grey';
    });
}