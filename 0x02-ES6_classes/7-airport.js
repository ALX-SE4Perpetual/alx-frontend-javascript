export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') {
      throw TypeError('Name should be a string');
    }

    if (typeof code !== 'string') {
      throw TypeError('Code should be a string');
    }

    this._name = name;
    this._code = code;
  }

  toString() {
    return `[Object ${this._code}]`;
  }
}
