import G6 from '@antv/g6';

const CONTAINER = 'mountNode';

export const graphLayout = new G6.Graph({
    container: CONTAINER,
    width: 2100,
    height: 1600,
    //center: [100, 100],\
    renderer: 'svg',

    fitView: true,
    fitViewPadding: [ 10, 20, 20, 10 ],

    defaultNode: {
        size: 1,
        labelCfg: {
            position: 'left',
            style: { fontSize: 12, fill: '#112255'}
        }
    },
    defaultEdge: {
        labelCfg: {
            autoRotate: true
        }
    },
//    layout: {
//        // Force layout  'force', 'fruchterman', 'circular', 'radial', 'mds', 'dagre', 'concentric', 'mindmap'
//        type: 'concentric',
//        clustering: true,
//        gravity: 1.0,
//        linkDistance: 30,        // The link distance is 100
//        preventOverlap: true,     // Prevent nodes from overlapping
//    }
});

