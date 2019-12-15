import { graphLayout as graph } from './graphLayout';
import g1_50 from './data/g1_50';
import graphStyler from './graphStyler';


  const main = async () => {

    const data = g1_50;
    graphStyler(data);
    graph.data(data);
    graph.render();
  };
  main();