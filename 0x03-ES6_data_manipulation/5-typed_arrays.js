// 5-typed_arrays.js
const createInt8TypedArray = (length, position, value) => {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const int8View = new Int8Array(buffer);
  int8View[position] = value; // Affecter la valeur à la position spécifiée

  return new DataView(buffer); // Retourner un DataView pour visualiser le buffer
};

export default createInt8TypedArray;
