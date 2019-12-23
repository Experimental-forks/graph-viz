import { autoGraphLayout as graph } from './graphLayout';

import demoGraph from './data/demoGraph';
import g90_50 from './data/g90_50';
import g152_200 from './data/g152_200';

import graphStyler from './graphStyler';
import graphPreProcessor from './graphPreProcessor';
import css from './css/graph-viz.css';


const main = async () => {
    const data = graphPreProcessor(g90_50);
    graphStyler(data);
    graph.data(data);
    graph.render();
};

main();