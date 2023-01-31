export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') {
      throw Error('Name must be a string');
    }

    if (typeof code !== 'string') {
      throw Error('Code must be a string');
    }

    this._name = name;
    this._code = code;
  }

  toString() {
    return `[Object ${this._code}]`;
  }
}
