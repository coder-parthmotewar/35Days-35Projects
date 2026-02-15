const graph = {
  A: { B: 4, C: 2 },
  B: { A: 4, C: 1, D: 5 },
  C: { A: 2, B: 1, D: 8, E: 10 },
  D: { B: 5, C: 8, E: 2, F: 6 },
  E: { C: 10, D: 2, F: 2 },
  F: { D: 6, E: 2 }
};

function dijkstra(start, end) {
  const distances = {};
  const visited = {};
  const previous = {};
  const nodes = Object.keys(graph);

  nodes.forEach(n => distances[n] = Infinity);
  distances[start] = 0;

  while (nodes.length) {
    nodes.sort((a, b) => distances[a] - distances[b]);
    const current = nodes.shift();

    if (current === end) break;
    if (distances[current] === Infinity) break;

    for (let neighbor in graph[current]) {
      const newDist = distances[current] + graph[current][neighbor];
      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist;
        previous[neighbor] = current;
      }
    }
  }

  const path = [];
  let curr = end;
  while (curr) {
    path.unshift(curr);
    curr = previous[curr];
  }

  return { distance: distances[end], path };
}

function findRoute() {
  const result = dijkstra("A", "F");
  document.getElementById("output").innerText =
    `Shortest Path: ${result.path.join(" → ")} | Distance: ${result.distance}`;
}
