/**
 * https://bigfrontend.dev/problem/merge-identical-API-calls
 * @param {(path: string, config: any) => Promise<any>} getAPI
 * @returns {(path: string, config: any) => Promise<any> & {clearCache: () => void}}
 */
function createGetAPIWithMerging(getAPI) {
  const cache = new Map();

  function getAPIWithMerging(path, config) {
    const key = generateHashKey(path, config);

    if (cache.has(key)) {
      const { promise, expiredAt } = cache.get(key);
      if (expiredAt > Date.now()) {
        cache.set(key, { promise, expiredAt: Date.now() + 1000 });
        return Promise.resolve(promise);
      }
    }

    if (cache.size >= 5) {
      evictLRU();
    }

    const promise = getAPI(path, config);
    cache.set(key, { promise, expiredAt: Date.now() + 1000 });
    return promise;
  }

  getAPIWithMerging.clear = () => {
    cache.clear();
  };

  function evictLRU() {
    let lruKey = null;
    let time = Infinity;

    for (const [key, value] of cache.entries()) {
      const { expiredAt } = value;
      if (expiredAt < time) {
        lruKey = key;
        time = expiredAt;
      }
    }
    cache.delete(lruKey);
  }

  function generateHashKey(path, config) {
    const arr = [path];

    for (const [key, value] of Object.entries(config).sort()) {
      arr.push([key, value]);
    }
    const cacheKey = JSON.stringify(arr);
    return cacheKey;
  }

  return getAPIWithMerging;
}
