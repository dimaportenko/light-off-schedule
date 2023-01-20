export default class AsyncStorage {
  private storageCache: Record<string, string>;

  constructor(cache: Record<string, string> = {}) {
    this.storageCache = cache;
  }

  setItem = jest.fn((key: string, value: string) => {
    return new Promise((resolve, reject) => {
      if (typeof key !== "string" || typeof value !== "string") {
        reject(new Error("key and value must be string"));
      }
      this.storageCache[key] = value;
      resolve(this.storageCache[key] === value);
    });
  });

  getItem = jest.fn((key) => {
    return new Promise((resolve) => {
      this.storageCache[key] ? resolve(this.storageCache[key]) : resolve(null);
    });
  });

  removeItem = jest.fn((key) => {
    return new Promise((resolve, reject) => {
      this.storageCache[key]
        ? resolve(delete this.storageCache[key])
        : reject(new Error("No such key!"));
    });
  });

  clear = jest.fn(() => {
    return new Promise((resolve) => {
      resolve((this.storageCache = {}));
    });
  });

  getAllKeys = jest.fn(() => {
    return new Promise((resolve) => {
      resolve(Object.keys(this.storageCache));
    });
  });

  // multiRemove = jest.fn(keys => {
  //   return new Promise((resolve, reject) => {
  //     keys.forEach((key: string) => {
  //       this.removeItem(key);
  //     });
  //     resolve();
  //   });
  // });
}
