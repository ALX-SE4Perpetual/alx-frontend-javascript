export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw TypeError('Size must be a number');
    }

    if (typeof location !== 'string') {
      throw TypeError('Location must be a string');
    }

    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  set size(size) {
    if (typeof size !== 'number') {
      throw TypeError('Size must be a number');
    }

    this._size = size;
  }

  get location() {
    return this._location;
  }

  set location(location) {
    if (typeof location !== 'string') {
      throw TypeError('Location must be a string');
    }

    this._location = location;
  }

  [Symbol.toPrimitive](hc) {
    if (hc === 'number') {
      return this.size;
    }

    if (hc === 'string') {
      return this.location;
    }
    return this;
  }
}
