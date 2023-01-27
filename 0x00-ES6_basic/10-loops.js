export default function appendToEachArrayValue(array, appendString) {
  const arrValue = [];
  for (const idx of array) {
    arrValue.push(`${appendString}${idx}`);
  }
  return arrValue;
}
