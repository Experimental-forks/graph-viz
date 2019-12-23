import G6 from '@antv/g6';

const CONTAINER = 'mountNode';

const config = {
   container: CONTAINER,
   width: 2000,
   height: 1000,
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
   }
};

const fixedGraphLayout = new G6.Graph(config);
const autoGraphLayout = new G6.Graph({
    ...config,
    layout: {
        // Force layout  'force', 'fruchterman', 'circular', 'radial', 'mds', 'dagre', 'concentric', 'mindmap'
        type: 'force',
        clustering: true,
        gravity: 0.1,
        linkDistance: 40,        // The link distance is 100
        preventOverlap: true,     // Prevent nodes from overlapping
    }
});

export {
    fixedGraphLayout,
    autoGraphLayout,
}


