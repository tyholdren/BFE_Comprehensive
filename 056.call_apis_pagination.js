// https://bigfrontend.dev/problem/call-APIs-with-pagination
// fetchList is provided for you
// const fetchList = (since?: number) => Promise<{items: Array<{id: number}>}>
// you can change this to generator function if you want

const fetchListWithAmount = async (amount = 5) => {
  const results = [];
  let lastId = 0;

  while (results.length < amount) {
    const { items } = await fetchList(lastId);
    if (items.length == 0) {
      break;
    }

    lastId = items[items.length - 1].id;

    const subset = items.slice(0, amount - results.length);

    for (const item of subset) {
      if (results.length >= amount) {
        break;
      }
      results.push(item);
    }
  }
  return results;
};
