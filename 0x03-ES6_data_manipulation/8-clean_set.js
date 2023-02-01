export default function cleanSet(set, startString) {
  if (startString === undefined || startString.length === 0) {
    return '';
  }
  return [...set]
    .filter((name) => (name !== undefined ? name.startsWith(startString) : ''))
    .map((name) => (name !== undefined ? name.slice(startString.length) : ''))
    .join('-');
}
