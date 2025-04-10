export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw new TypeError('size must be a number');
    }
    if (typeof location !== 'string') {
      throw new TypeError('location must be a string');
    }

    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  // Quand on utilise Number(obj)
  valueOf() {
    return this._size;
  }

  // Quand on utilise String(obj)
  toString() {
    return this._location;
  }
}
