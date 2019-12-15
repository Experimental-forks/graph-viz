import { graphLayout as graph } from './graphLayout';
import demoGraph from './data/demoGraph';
import graphStyler from './graphStyler';


  const main = async () => {

    const data = demoGraph;
    graphStyler(data);
    graph.data(data);
    graph.render();
  };
  main();