import graphScaler from './graphScaler';

export default function(data, graphSize) {
    console.log("processed data = " + data.nodes.length);

    if (data.nodes[0].hasOwnProperty('lat')) {
      data.nodes = data.nodes.map(n => ({...n, x: Math.round(32 * n.lng) + 400, y: -Math.round(32 * n.lat) + 100}));
      console.log("new node = " + JSON.stringify(data.nodes[1]));
    }

    graphScaler(data, graphSize);
    return data;
}