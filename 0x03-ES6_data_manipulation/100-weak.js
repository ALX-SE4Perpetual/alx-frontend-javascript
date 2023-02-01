const weakMap = new WeakMap();

function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
  weakMap.set(endpoint, 1)
  return;
  }

  const apiCall = weakMap.get(endpoint);
  weakMap.set(endpoint, apiCall + 1);
  if (apiCall + 1 >= 5) {
    throw Error('Endpoint load is high');
  }
}

export { weakMap, queryAPI };
