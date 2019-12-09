export class Storage {
  constructor() {
    this._store = {};
  }

  add(key, val) {
    this._store[key] = val;
  }
  
  get(key) {
    return this._store[key];
  }
  
  remove(key) {
    delete this._store[key];
  }
  
  clear() {
    this._store = {};
  }
}

export default new Storage();
