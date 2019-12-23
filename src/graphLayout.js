import G6 from '@antv/g6';

const CONTAINER = 'container';

const config = {
   container: CONTAINER,
   width: 1000,
   height: 800,
   renderer: 'svg',

   fitView: true,
   fitViewPadding: [ 10, 20, 20, 10 ],

   defaultNode: {
       size: 1,
       labelCfg: {
           position: 'left',
           style: { fontSize: 10, fill: '#ddeeff'}
       }
   },
   defaultEdge: {
       size: 1,
       labelCfg: {
           autoRotate: true,
       }
   }
};

const fixedLayout = new G6.Graph(config);
const autoLayout = new G6.Graph({
    ...config,
    layout: {
        // Force layout  'force', 'fruchterman', 'circular', 'radial', 'mds', 'dagre', 'concentric', 'mindmap'
        type: 'force',
        clustering: true,
        gravity: 0.2,
        linkDistance: 40,        // The link distance is 100
        preventOverlap: true,     // Prevent nodes from overlapping
    }
});


G6.registerEdge('running-polyline', {
  afterDraw(cfg, group) {
    const shape = group.get('children')[0];
    const length = shape.getTotalLength();
    let circleCount = Math.ceil(length / 20);
    circleCount = circleCount === 0 ? 1 : circleCount;

    const _loop = function _loop(i) {
      const delay = 500; //Math.random() * 1000;
      const start = shape.getPoint(i / circleCount);
      const circle = group.addShape('circle', {
        attrs: {
          x: start.x,
          y: start.y,
          r: 1.7,
          fill: '#A0F3AF',
          shadowColor: '#fff',
          shadowBlur: 30
        }
      });
      circle.animate({
        onFrame: function onFrame(ratio) {
          ratio += i / circleCount;
          if (ratio > 1) {
            ratio %= 1;
          }
          const tmpPoint = shape.getPoint(ratio);
          return {
            x: tmpPoint.x,
            y: tmpPoint.y
          };
        },
        repeat: true
      }, 20 * length, 'easeLinear', null, delay);  // easeCubic
    };

    for (let i = 0; i < circleCount; i++) {
      _loop(i);
    }
  }
}, 'quadratic');




export {
    fixedLayout,
    autoLayout,
}


