exports.remove = (array, predicate) => {
  const retainedValues = [];

  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    if (predicate(value, i, array)) {
      retainedValues.push(array.splice(i, 1)[0]);
      i - 1;
    }
  }
  return retainedValues;
};
