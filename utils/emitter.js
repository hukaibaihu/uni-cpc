function isFunc(fn) {
  return typeof fn === 'function';
}

export default class Emitter {
  constructor() {
    this._store = {};
  }

  /**
   * 事件监听
   * @param {String} event 事件名
   * @param {Function} listener 事件回调函数
   */
  on(event, listener) {
    const listeners = this._store[event] || (this._store[event] = []);

    listeners.push(listener);
  }

  /**
   * 取消事件监听
   * @param {String} event 事件名
   * @param {Function} listener 事件回调函数
   */
  off(event, listener) {
    const listeners = this._store[event] || (this._store[event] = []);

    listeners.splice(listeners.findIndex(item => item === listener), 1);
  }

  /**
   * 事件监听 仅监听一次
   * @param {String} event 事件名
   * @param {Function} listener 事件回调函数
   */
  once(event, listener) {
    const proxyListener = (data) => {
      isFunc(listener) && listener.call(null, data);

      this.off(event, proxyListener);
    }

    this.on(event, proxyListener);
  }

  /**
   * 触发事件
   * @param {String} 事件名
   * @param {Object} 传给事件回调函数的参数
   */
  emit(event, data) {
    const listeners = this._store[event] || (this._store[event] = []);

    for (const listener of listeners) {
      isFunc(listener) && listener.call(null, data);
    }
  }
}
