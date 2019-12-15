import G6 from '@antv/g6';

const CONTAINER = 'mountNode';

export const graphLayout = new G6.Graph({
    container: CONTAINER,
    width: 900,
    height: 700,
    defaultNode: {
        size: 30,
        labelCfg: {
          style: {
              fill: '#fff'
          }
        }
    },
    defaultEdge: {
        labelCfg: {
            autoRotate: true
        }
    },
    layout: {
        type: 'force',            // Force layout
        linkDistance: 150,        // The link distance is 100
        preventOverlap: true,     // Prevent nodes from overlapping
    }
});

